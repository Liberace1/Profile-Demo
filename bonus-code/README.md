# Node.js Server and React Application Manager

This script automates the process of starting a Node.js server and managing the lifecycle of a React application in a development or production environment.

## Overview

The script is designed to perform the following tasks in sequence:
1. **Start the Node.js server**: Runs the `server.js` file located in a specified directory. The server will continue to run in the background, even after the command shell is closed.
2. **Install React Dependencies**: Navigates to the React application directory and installs all required npm dependencies.
3. **Build the React Application**: Executes the build process for the React application, preparing it for production deployment.
4. **Serve the React Application**: Serves the built React application using a static server, making it accessible via a web browser.

The entire process is automated to ensure a smooth and efficient setup of both the backend and frontend components of your project.

## How to Use

To use this script, ensure that you have Node.js and npm installed on your machine. Clone or download the script to your local system in a suitable directory.

### Configuration

Before running the script, update the following directory paths in the script to match your project structure:
- `serverDirectory`: Path to the directory containing your Node.js `server.js` file.
- `reactDirectory`: Path to your React application directory.
- `buildDirectory`: Path where your React application's build output should be stored.

### Running the Script

To run the script, navigate to the directory containing the script in your command terminal and execute the following command:
```bash
node <script_name>.js

