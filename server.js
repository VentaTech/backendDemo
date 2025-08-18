const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route 1: Home route (/)
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Backend Demo</h1>
        <p>This is the home page of our simple Express server.</p>
        <a href="/form">Go to Form</a>
    `);
});
app.get('/about', (req, res) => {
    console.log('about route accessed');
})

// Route 2: Form route (/form)
app.get('/form', (req, res) => {
    res.send(`
        <h1>Contact Form</h1>
        <form action="/form" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
            
            <input type="submit" value="Submit">
        </form>
        <br>
        <a href="/">Back to Home</a>
    `);
});

// Handle form submission
app.post('/assignment5', (req, res) => {
    console.log('Form submitted:', req.body);
    const body = req.body;
    const firstName= body.name;
    if (!firstName) {
        console.error('Form submitted: FirstName', { firstName,});
        return res.status(400).json({ error: 'First name is required' });
    }
    res.status(200).json({ message: `Congratulations ${firstName}! You are now a full stack developer!\n\nTo prove you are now a legend, display this message on web page` });
    
});

//handle weather API

app.get('/weather', async (req,res)=>{

    const weatherurl = "http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0";
     try{
        const response = await fetch(weatherurl);
        //Getting image as buffer
        const imageData = await response.arrayBuffer();

        res.set('Content-Type', 'image/png');
        res.send(Buffer.from(imageData));
     } catch (error){
        //Error handling
        console.error('Weather API error:', error);
        res.status(500).send('Error fetchig the image');
}
});

//weather API 2 in text
 app.get('/weatherText', async (req, res) =>{

    const url = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
     
    try{
        const response = await fetch(url);
         const data = await response.json();
           
         
         res.set('Content-Type', 'application/json');
         res.send(data);
    }catch (error){
        console.error('Failed to load:', error);
        res.status(500).json({message:'Failed to fetxh weather message', error: error.message });
    }

 });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
