#!/bin/bash

# Function to install using apt-get
install_with_apt() {
  echo "Using apt-get for package management"
  # Update package lists
  sudo apt-get update

  # Node.js and npm
  curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
  sudo apt-get install -y nodejs

  # Docker
  sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  sudo apt-get update
  sudo apt-get install -y docker-ce

  # Python
  sudo apt-get install -y python3 python3-pip

  # Java
  sudo apt-get install -y default-jdk
}

# Function to install using yum
install_with_yum() {
  echo "Using yum for package management"
  # Update package lists
  sudo yum update

  # Node.js and npm
  curl -fsSL https://rpm.nodesource.com/setup_current.x | sudo bash -
  sudo yum install -y nodejs

  # Docker
  sudo yum install -y yum-utils
  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  sudo yum install -y docker-ce docker-ce-cli containerd.io

  # Python
  sudo yum install -y python3

  # Java
  sudo yum install -y java-1.8.0-openjdk
}

# Check which package manager is available
if command -v apt-get &>/dev/null; then
  install_with_apt
elif command -v yum &>/dev/null; then
  install_with_yum
else
  echo "No compatible package manager found. Script supports apt-get and yum."
  exit 1
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
