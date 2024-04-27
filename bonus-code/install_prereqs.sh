#!/bin/bash

# Function to check if a command is available
command_exists() {
  command -v "$1" &>/dev/null
}

# Check if Node.js is installed
if ! command_exists node; then
  # Install Node Version Manager (nvm)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  
  # Load nvm to current shell session
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
  
  # Install Node.js LTS version using nvm
  nvm install --lts
  
  # Set the LTS version as default
  nvm alias default 'lts/*'
fi

# Check if npm is installed
if ! command_exists npm; then
  # npm is installed automatically with Node.js, no need for separate installation
  echo "npm is not installed."
fi

# Check if Docker is installed
if ! command_exists docker; then
  echo "Docker is not installed."
  # Install Docker
  if command_exists apt-get; then
    # Install Docker on Debian-based systems using apt-get
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io
  elif command_exists yum; then
    # Install Docker on CentOS/RHEL-based systems using yum
    sudo yum install -y yum-utils
    sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    sudo yum install -y docker-ce docker-ce-cli containerd.io
  else
    echo "No compatible package manager found. Script supports apt-get and yum."
    exit 1
  fi
fi

# Check if Python is installed
if ! command_exists python3; then
  echo "Python is not installed."
  # Install Python
  if command_exists apt-get; then
    sudo apt-get update
    sudo apt-get install -y python3
  elif command_exists yum; then
    sudo yum install -y python3
  else
    echo "No compatible package manager found. Script supports apt-get and yum."
    exit 1
  fi
fi

# Check if Java is installed
if ! command_exists java; then
  echo "Java is not installed."
  # Install Java
  if command_exists apt-get; then
    sudo apt-get update
    sudo apt-get install -y default-jdk
  elif command_exists yum; then
    sudo yum install -y java-1.8.0-openjdk
  else
    echo "No compatible package manager found. Script supports apt-get and yum."
    exit 1
  fi
fi

# Verify installations
echo "Node.js version:"
node -v
echo "npm version:"
npm -v
echo "Docker version:"
docker --version
echo "Python version:"
python3 --version
echo "Java version:"
java -version

echo "All prerequisites have been installed successfully."
