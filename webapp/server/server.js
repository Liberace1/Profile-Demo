const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const SERVER_URL = 'http://98.81.203.17:3000';

app.use(cors({ origin: SERVER_URL }));

const profile = {
  name: 'Olalekan Owoloye',
  title: 'Senior Software Engineer',
  experienceYears: 14,
  skills: [
    { name: 'Networking', description: 'Comprehensive understanding and implementation of cybersecurity measures and network management. Details include malware and threats detection, analysis, and mitigation; vulnerability scanning and assessment; IP addressing; cyber hardening; STIGing (Security Technical Implementation Guides); firewall configuration; secure port configuration; SSH encryption; and network monitoring and intrusion detection.' },
    { name: 'Software Architecture', description: 'Design and implementation of robust and scalable software systems. Includes REST API development and integration, MVC pattern application, cloud models (IaaS, PaaS, SaaS), master-slave architecture, microservices, and serverless computing.'},
    { name: 'Coding/Programming', description: 'Proficiency in various programming languages and frameworks for diverse applications. Details include Flutter for mobile development, Python for general-purpose programming and automation, JavaScript for frontend and backend development, HTML/CSS for web content structuring and styling, Bootstrap for responsive web design, C# for desktop and web applications, and testing tools like Selenium, JUnit, and PyTest for automated testing.'},
    { name: 'Scripting', description: 'Writing scripts for automation, task management, and system administration. Includes Bash for Unix/Linux systems and Python for automation, data processing, and system management.'},
    { name: 'DevOps Practices', description: 'Implementing practices for continuous integration, continuous deployment, and infrastructure as code. Includes setting up CI/CD pipelines with tools like Jenkins and GitLab CI/CD, managing infrastructure with code using Terraform and CloudFormation, containerization with Docker and orchestration with Kubernetes, and implementing monitoring (Prometheus, Grafana) and logging (ELK stack) solutions.'},
  ],
  currentRole: 'Snr Cloud Software Engineer | DevOps | DevSecOps ',
  description: 'A team player and security-driven DevOps & Cloud Platform Engineer with over 9 years experience in systems administration, software configuration management, cloud integration using various CI/CD and SCM tools for end-to-end automation & deployment of software to different environments. Experience in implementing security best practices to provision and manage secure, fault-tolerant, scalable and highly available architectures. Hands on experience in containerization and orchestration of micro-service application into different environments leveraging various DevOps automation tools. Familiar with agile and Scrum SDLC methodologies.'
};

const skills = [
  { name: 'Networking', description: 'Expertise in building and managing networks, including: IP addressing, VPN setup, Router configuration, VLAN management' },
  { name: 'Web Design', description: 'Skills in creating aesthetically pleasing and functional websites using: HTML, CSS, JavaScript, Various web design frameworks' },
  { name: 'Mobile App Development', description: 'Experience in developing both iOS and Android applications using: Flutter, React Native, Native development tools' },
  { name: 'Coding', description: 'Proficient in multiple programming languages including: Java, Python, JavaScript, C++, Go' },
  { name: 'Testing', description: 'Able to conduct rigorous and thorough software tests, including: Unit testing, Integration testing, Automated testing using tools like Selenium and Jest' },
  { name: 'Network Engineering', description: 'Deep knowledge in network setup, configuration, and maintenance, including experience with: Firewalls, Switches, Network monitoring tools' },
  { name: 'Software Engineering', description: 'Comprehensive software development skills including: Software design, Software Architecture, Software Development, Full understanding of the agile methodology' },
  { name: 'Database Management', description: 'Designing, implementing, and maintaining robust database systems. Includes managing SQL databases like MySQL, PostgreSQL, and SQL Server, working with NoSQL databases like MongoDB and Cassandra, database optimization for efficient data retrieval and storage, and implementing backup and recovery strategies for data integrity and availability.'}
];

const courses = [
  { title: 'Data Structures' },
  { title: 'Cloud Computing' },
  { title: 'Artificial Intelligence' },
  { title: 'Operating Systems' },
  { title: 'Network Security' },
  { title: 'Mobile Development' },
  { title: 'Software Testing and Quality Assurance' },
  { title: 'Database Systems' },
  { title: 'Web Development' },
  { title: 'Human-Computer Interaction' },
  { title: 'Software Project Management' },
  { title: 'Algorithm Design and Analysis' },
  { title: 'Machine Learning' },
  { title: 'Systems Engineering' }
];

const devops = {
  skills: [
    'CI/CD pipelines',
    'Infrastructure as Code (IaC)',
    'Monitoring and Logging',
    'Containerization and Orchestration'
  ],
  tools: {
    'Operating Systems': ['Linux (RedHat, CentOs, Ubuntu)', 'Windows'],
    'Version Control Systems': ['Git', 'Github', 'Gitlab SCM'],
    'Infrastructure as a Code IaaS': ['Terraform', 'CloudFormation'],
    'Build Management Tools': ['Maven', 'ANT'],
    'Scripting Languages': ['Shell Script', 'Yaml', 'JavaScript'],
    'Web/Application Servers': ['Apache Tomcat', 'Apache Http'],
    'Continuous Integration Tools': ['Jenkins','Gitlab CI', 'Github Actions'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL'],
    'Configuration Management Tools': ['Ansible'],
    'Containerization Tools': ['Docker', 'Docker-Compose', 'DockerSwarm', 'EKS', 'ECS', 'Kubernetes'],
    'Cloud Technologies': [
      'AWS', 'GCP', 'IAM', 'VPC', 'EBS', 'EFS', 'S3', 'ELB', 'Auto Scaling', 'Route53',
      'CloudWatch', 'CloudFront', 'CloudTrail'
    ],
    'Programming Languages': ['C++', 'Java', 'Python', 'PHP', 'Qbasic', 'Fortran', 'Matlab'],
    'Testing and Scanning Tools': ['SonarQube', 'Other scanning tools'],
    'Continuous Development': ['Maven', 'ArgoCD'],
    'Artifact Repository': ['JFrog', 'Nexus'],
    'Vault Management': ['HashiCorp Vault' , 'Github Secrets'],
    'Project Planning Tools': ['Jira', 'Confluence' , 'Planning Poker'],
    'SDLC': ['Agile', 'Kanban methodologies', 'Spiral model']
  }
};

// Serve profile data as JSON
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

// Serve skills data as JSON
app.get('/api/skills', (req, res) => {
  try {
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve courses data as JSON
app.get('/api/courses', (req, res) => {
  try {
    res.json(courses.map(course => course.title));
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve devops data as JSON
app.get('/api/devops', (req, res) => {
  try {
    res.json(devops);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve image
app.get('/api/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'devops.png'));
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
