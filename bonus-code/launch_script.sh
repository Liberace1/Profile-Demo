#!/bin/bash

# Function to execute a command and wait for completion
run_command() {
    $1 &   # Run command in the background
    local pid=$!  # Get the process ID of the background command
    wait $pid   # Wait for the background command to complete
    local exit_status=$?   # Get the exit status of the background command
    if [ $exit_status -ne 0 ]; then
        echo "Error executing command: $1"
        exit $exit_status   # Exit with the same status as the background command if it failed
    fi
}

# Print current working directory
echo "Current working directory: $(pwd)"

# Define project directory
project_directory="webapp"

# Print project directory
echo "Project directory: $project_directory"

# Navigate to the project directory
cd "$project_directory" || { echo "Error: Unable to navigate to project directory."; exit 1; } && es using serve in the background
echo "Serving build files..."
run_command "npm install -g serve -y"
run_command "npm install url-parse -y"
run_command "serve -s build &"

# Navigate to the frontend directory
frontend_directory="$project_directory/frontend"
cd "$frontend_directory" || { echo "Error: Unable to navigate to server directory."; exit 1; }

# Start the server in the background
echo "Starting frontend..."
run_command "npm install &"
run_command "npm start &"
run_command "cd ../../"

# Navigate to the server directory
server_directory="$project_directory/server"
cd "$server_directory" || { echo "Error: Unable to navigate to server directory."; exit 1; }

# Start the server in the background
echo "Starting server..."
run_command "npm install &"
run_command "node server.js &"

echo "All commands completed successfully."
