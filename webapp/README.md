# WebApp Architecture Overview

## Introduction
The WebApp project is a full-stack web application built using React for the frontend and Node.js for the backend. It provides functionality for managing skills, courses, and user profiles.

## Architecture
The architecture of the WebApp project consists of two main components:

### Frontend (React): 
The frontend of the application is built using React, a JavaScript library for building user interfaces. React allows for the creation of dynamic and responsive UI components.
### Backend (Node.js):
The backend of the application is built using Node.js, a JavaScript runtime environment. Node.js is used to create the API server that handles requests from the frontend and interacts with the database.

# Code Structure
The code for the WebApp project is organized as follows:

### Frontend (React):
The frontend code is located in the frontend directory.
Components such as App.js, CongratulationsModal.js, and others are responsible for rendering the user interface.
React Router is used for client-side routing to navigate between different views of the application.
Styling is done using CSS files such as App.css and index.css.

### Backend (Node.js):
The backend code is located in the webapp/server directory.
The main server file server.js sets up the Express.js server and defines the API routes.
The package.json file lists the dependencies required for the backend.
API Server
The backend server exposes API endpoints that the frontend interacts with to perform CRUD operations on data such as skills, courses, and user profiles. These endpoints are accessible via localhost on a specific port (e.g., localhost:5000).
To test Api server, visit localhost:5000/api/skills (change skillls to course or profile or devops to toggle between available api endpoint)

### Containerization (Docker)
The webapp has been dockerized and also docker-compose was used to manage both containers
in the future, this application would be deployed to the cloud and kubernetes will replace docker-compose
*webapp/docker-compose.yml
*webapp/frontend/dockerfile
*webapp/server/dockerfile

# Getting Started

### How to run the WebApp project locally, (non container):

Clone the repository to your local machine.
Install dependencies for both the frontend and backend using npm.
Start the backend server by navigating to the /webapp/server directory and running npm start.
Start the frontend by navigating to the /webapp/frontend directory and running npm start.
Access the application in your web browser at localhost on the specified port.

### How to Run the webapp project (containers)
* git clone
* install docker (google if you dont know how to)
* cd into webapp directory
* then run "docker-compose up --build"

* ### Docker-compose is used to manage multiple containers
* They are 2 docker file in this application
* dockerfile is both located in the frontend and server directory
* Both dockerfile purposes are to dockerized the frontend and backend respectively, can be manaully run by navigating into the front end directory
*  "docker build -t frontend ." and "docker run frontend" (for docker run, you can specify port to map on your pc such as "docker run-p 3000:3000 frontend" vice-versa for the backend which is in the server directory.
* Instead of doing this manually, We have docker compose to build and start both services
* The docker-compose file is located in the webapp directory and can be run by
* "docker-compose up --build" This command should run both docker file located in front end and server directory, hence bringing the application live and serving it over http
* by default, frontend is on localhost:3000, while ebackend is on localhost:5000/api (look above on how to test api server)


### Conclusion
The WebApp project demonstrates how to build a full-stack web application using React for the frontend and Node.js for the backend. It provides a structured architecture for managing data and handling user interactions.
