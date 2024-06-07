# Node.js Server and React Application Manager

This repository contains scripts to manage a Node.js server and a React application. The provided scripts will check for necessary dependencies, install them if they are not present, and start both the server and the React application.

## Contents

- `install_prereqs.sh`: A shell script to check and install required dependencies.
- `scriptstart.sh`: A Node.js script to start the server, install dependencies for the React app, build the app, and serve the built app.

## Prerequisites

- Bash shell
- Node.js installed on your system to run the Node.js script

## Scripts

### 1. `install_prereqs.sh`

This script checks for the following dependencies and installs them if they are not present:
- Python
- Node.js
- Docker
- curl
- Java

#### What It Does

- **Checks for Dependencies**: Verifies if Python, Node.js, Docker, curl, and Java are installed.
- **Installs Missing Dependencies**: If any of the dependencies are missing, the script installs them using the appropriate package manager (`apt-get` for Debian-based systems or `yum` for Red Hat-based systems).

#### How to Run

1. Navigate to the `bonus-code` directory:
    ```sh
    cd /webapp/bonus-code
    ```

2. Make the script executable:
    ```sh
    chmod +x install_prereqs.sh
    ```

3. Run the script:
    ```sh
    ./install_prereqs.sh
    ```

### 2. `scriptstart.sh`

This script will start the Node.js server, install dependencies for the React application, build the React application, and serve the built application.

#### What It Does

- **Starts the Server**: Navigates to the server directory and starts the Node.js server using `nohup` to run it in the background.
- **Installs React App Dependencies**: Navigates to the React app directory and installs the necessary npm packages.
- **Builds the React App**: Builds the React application for production.
- **Serves the React App**: Uses the `serve` package to serve the built React app.

#### How to Run

1. Navigate to the `bonus-code` directory:
    ```sh
    cd /webapp/bonus-code
    ```

2. Ensure Node.js is installed and available in your PATH.

3. Run the script:
    ```sh
    ./scriptstart.sh
    ```

## Directory Structure

The expected directory structure is as follows:


#NOTE
Script 1 (install_prereqs.sh) is optional if you have the applications instaled prior
script 2 (scriptstart)  to start the services


### Links to help with NVM Install -- https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/
