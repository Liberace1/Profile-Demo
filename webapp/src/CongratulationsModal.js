import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');  // This binds your modal accessibility to your app root

function CongratulationsModal({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Development Process"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }
            }}
        >
            <h2>Development Process</h2>
            <ul>
                <li><strong>Provisioning the VM:</strong> I used Vagrant to provision a virtual machine specifically configured with the necessary resources (CPU, Memory) to support a development environment suitable for a Node.js and React application.</li>
                <li><strong>Installing Dependencies:</strong> Before deploying the application, I pre-installed essential dependencies such as Node.js, npm (Node Package Manager), and other necessary libraries to ensure that the environment was ready for both development and production stages.</li>
                <li><strong>Setting Up the Server:</strong> The server is set up using Node.js to handle API requests and serve data to the frontend. The backend logic is structured to manage data interactions efficiently and securely.</li>
                <li><strong>Configuring the Frontend:</strong> The frontend is developed using React, creating a responsive and user-friendly interface. This setup involves configuring webpack for bundling and Babel for transpiling JSX into browser-compatible JavaScript.</li>
                <li><strong>API Integration:</strong> The frontend makes API calls to the backend to fetch and display data dynamically. This interaction is crucial for the real-time responsiveness of the app.</li>
                <li><strong>Network Configuration:</strong> The backend is hosted on localhost:5000, while the frontend operates on localhost:3000, demonstrating how both ends of the application interact over HTTP within a development environment.</li>
            </ul>
            <button onClick={onClose} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>Close</button>
        </Modal>
    );
}

export default CongratulationsModal;

