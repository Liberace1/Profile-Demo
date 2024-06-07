#!/bin/bash

# Function to check if a command exists and install the package if it doesn't
check_and_install() {
    local cmd=$1
    local package=$2
    local installer=$3

    if ! command -v $cmd &> /dev/null; then
        echo "$cmd is not installed. Installing $package..."
        eval $installer
        if [ $? -eq 0 ]; then
            echo "$package has been installed successfully."
        else
            echo "Failed to install $package. Please install it manually."
        fi
    else
        echo "$cmd is already installed."
    fi
}

# Detect package manager
if command -v apt-get &> /dev/null; then
    PACKAGE_MANAGER="apt-get"
    UPDATE_CMD="sudo apt-get update"
    INSTALL_CMDS=(
        "python3:python3:sudo apt-get install -y python3"
        "node:nodejs:curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt-get install -y nodejs"
        "docker:docker:curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh && sudo usermod -aG docker \$USER"
        "curl:curl:sudo apt-get install -y curl"
        "java:openjdk-11-jdk:sudo apt-get install -y openjdk-11-jdk"
    )
elif command -v yum &> /dev/null; then
    PACKAGE_MANAGER="yum"
    UPDATE_CMD="sudo yum update -y"
    INSTALL_CMDS=(
        "python3:python3:sudo yum install -y python3"
        "node:nodejs:curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash - && sudo yum install -y nodejs"
        "docker:docker:curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh && sudo usermod -aG docker \$USER"
        "curl:curl:sudo yum install -y curl"
        "java:java-11-openjdk-devel:sudo yum install -y java-11-openjdk-devel"
    )
else
    echo "Unsupported package manager. Please install dependencies manually."
    exit 1
fi

# Update package manager
echo "Updating package manager..."
eval $UPDATE_CMD

# Check and install each dependency
for entry in "${INSTALL_CMDS[@]}"; do
    IFS=":" read -r cmd package installer <<< "$entry"
    check_and_install $cmd $package "$installer"
done

echo "All dependencies are checked and installed if necessary."
