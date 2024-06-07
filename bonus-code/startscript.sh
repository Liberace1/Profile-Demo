#!/bin/bash

FRONTEND_DIR="../webapp/frontend"
SERVER_DIR="../webapp/server"

# Function to check if npm is installed and install it if not
install_npm() {
	    if ! command -v npm &> /dev/null; then
		            echo "npm is not installed. Installing Node.js and npm..."
			            if [ "$(uname)" == "Darwin" ]; then
					                # Install Node.js and npm on macOS
							            brew install node
								            elif [ -f /etc/debian_version ]; then
										                # Install Node.js and npm on Debian-based systems
											            curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
											                sudo apt-get install -y nodejs
											        elif [ -f /etc/redhat-release ]; then
											            # Install Node.js and npm on Red Hat-based systems
											                curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
											            sudo yum install -y nodejs
											            else
											                echo "Unsupported OS. Please install Node.js and npm manually."
											            exit 1
											            fi
											        else
											        echo "npm is already installed."
											    fi
											    }

											    # Function to start the frontend
											    start_frontend() {
											        echo "Starting frontend..."
											    cd "$FRONTEND_DIR" || { echo "Failed to navigate to frontend directory"; exit 1; }
											        npm install
											    npm start &
											        cd - || exit
											}

											# Function to start the server
											start_server() {
											    echo "Starting server..."
											        cd "$SERVER_DIR" || { echo "Failed to navigate to server directory"; exit 1; }
											    npm install
											        npm start &
											    cd - || exit
											    }

											    # Check if npm is installed and install it if not
											    install_npm

											    # Start both frontend and server
											    start_frontend
											    start_server

											    echo "Frontend and server are starting..."
