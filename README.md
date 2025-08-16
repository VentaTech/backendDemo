# Backend Demo

A simple Node.js Express server with basic routes and form handling capabilities.

## Prerequisites

Before running this project, make sure you have the following installed on your system:

### 1. Install Node.js and npm

#### On macOS:
```bash
# Option 1: Download from official website
# Visit https://nodejs.org/ and download the LTS version

# Option 2: Using Homebrew (recommended)
brew install node

# Option 3: Using MacPorts
sudo port install nodejs18 +universal
```

#### On Windows:
```bash
# Download from https://nodejs.org/ and run the installer
# Or use Chocolatey:
choco install nodejs

# Or use Winget:
winget install OpenJS.NodeJS
```

#### On Linux (Ubuntu/Debian):
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Or install latest version using NodeSource repository:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Verify Installation

Check if Node.js and npm are installed correctly:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Getting Started

### Step 1: Clone or Download the Project

If you have git installed:
```bash
git clone <repository-url>
cd backendDemo
```

Or download the project files and navigate to the project directory.

### Step 2: Install Dependencies

Install all required packages specified in `package.json`:

```bash
npm install
```

This will install:
- `express` - Web framework for Node.js
- `cors` - Cross-Origin Resource Sharing middleware
- `nodemon` - Development dependency for auto-restarting the server

### Step 3: Run the Server

#### Option 1: Production Mode
```bash
npm start
```

#### Option 2: Development Mode (with auto-restart)
```bash
npm run dev
```

### Step 4: Access the Application

Once the server is running, you'll see a message:
```
Server is running on http://localhost:3000
```

Open your web browser and navigate to:
- **Home Page**: http://localhost:3000/
- **Contact Form**: http://localhost:3000/form

## Available Routes

- `GET /` - Home page with welcome message
- `GET /about` - About route (logs access to console)
- `GET /form` - Contact form page
- `POST /assignment5` - Form submission endpoint (expects JSON with `name` field)

## Project Structure

```
backendDemo/
├── server.js          # Main server file
├── package.json       # Project dependencies and scripts
├── README.md          # This file
└── LICENSE           # License information
```

## API Usage

### Form Submission Example

**Endpoint**: `POST /assignment5`

**Request Body** (JSON):
```json
{
  "name": "John Doe"
}
```

**Success Response**:
```json
{
  "message": "Congratulations! Form submitted successfully",
  "data": {
    "firstName": "John Doe"
  }
}
```

**Error Response** (if name is missing):
```json
{
  "error": "First name is required"
}
```

## Troubleshooting

### Port Already in Use
If you get an error that port 3000 is already in use:

1. Stop any other applications using port 3000
2. Or change the port by setting the PORT environment variable:
   ```bash
   PORT=3001 npm start
   ```

### Module Not Found Errors
If you see "module not found" errors:
1. Make sure you ran `npm install`
2. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### Permission Errors
On macOS/Linux, if you encounter permission errors:
```bash
sudo npm install
```

## Development

To make changes to the server:

1. Edit `server.js`
2. If running in development mode (`npm run dev`), the server will automatically restart
3. If running in production mode (`npm start`), manually restart the server

## License

This project is licensed under the ISC License - see the LICENSE file for details.