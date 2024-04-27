const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://ec2-54-242-217-99.compute-1.amazonaws.com:3000' }));


const profile = {
    name: 'Olalekan Owoloye',
    title: 'Senior Software Engineer',
    experienceYears: 14,  // No need for quotes since it's a number
    skills: [
        { name: 'Networking', description: 'Expertise in building and managing networks.' },
        { name: 'Web Design', description: 'Skills in creating aesthetically pleasing and functional websites.' },
        { name: 'Mobile App Development', description: 'Experience in developing both iOS and Android applications.' },
        { name: 'Coding', description: 'Proficient in multiple programming languages.' },
        { name: 'Testing', description: 'Able to conduct rigorous and thorough software tests.' },
        { name: 'Animation', description: 'Skilled in creating animations for various applications.' },
        { name: 'Network Engineering', description: 'Deep knowledge in network setup, configuration, and maintenance.' },
        { name: 'Software Engineering', description: 'Comprehensive software development skills.' }
    ],
    currentRole: 'Software Engineer',
    description: 'Olalekan Owoloye is a seasoned Senior Software Engineer with an extensive 14-year career spanning multiple disciplines within technology. His expertise encompasses all listed skills.'
};




const skills = [
  { name: 'Java Development', description: 'Expert in Java SE and Java EE' },
  { name: 'DevOps', description: 'Experienced with CI/CD, Docker, Kubernetes' },
  { name: 'Cloud Services', description: 'Proficient in AWS and Azure' },
  { name: 'Full Stack Development', description: 'Capable of building applications from front to back using JavaScript, Node.js, and React' },
  { name: 'Database Management', description: 'Skilled in SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB' },
  { name: 'Machine Learning', description: 'Knowledgeable in implementing machine learning algorithms using Python and libraries like TensorFlow and scikit-learn' },
  { name: 'Mobile App Development', description: 'Experienced in developing mobile applications using Flutter and native Android' },
  { name: 'Cybersecurity Fundamentals', description: 'Familiar with security practices, penetration testing, and secure code development' },
  { name: 'Blockchain Technologies', description: 'Understanding of blockchain concepts, smart contracts, and development with Ethereum' },
  { name: 'Software Testing and QA', description: 'Proficient in writing test cases, using testing frameworks like Jest and Selenium for automated testing' }
];


const courses = [
  { title: 'Data Structures', level: 'Undergraduate', description: 'In-depth study of data structures' },
  { title: 'Cloud Computing', level: 'Master\'s', description: 'Advanced techniques in cloud computing' },
  { title: 'Artificial Intelligence', level: 'Undergraduate', description: 'Foundational AI concepts including machine learning, neural networks, and AI ethics' },
  { title: 'Operating Systems', level: 'Undergraduate', description: 'Comprehensive understanding of modern operating systems, concurrency, and memory management' },
  { title: 'Network Security', level: 'Master\'s', description: 'Advanced concepts in securing computer networks, cryptographic techniques, and secure network protocols' },
  { title: 'Mobile Development', level: 'Undergraduate', description: 'Techniques and frameworks for developing applications on mobile platforms, including iOS and Android, focusing on UI, APIs, and managing device resources' },
  { title: 'Software Testing and Quality Assurance', level: 'Undergraduate', description: 'Methods and practices for ensuring software quality, including unit testing, integration testing, and automated testing frameworks' },
  { title: 'Database Systems', level: 'Undergraduate', description: 'Design, development, and management of database systems, SQL and NoSQL databases, and database optimization' },
  { title: 'Web Development', level: 'Undergraduate', description: 'Techniques for building dynamic and responsive websites, covering both client-side and server-side programming' },
  { title: 'Human-Computer Interaction', level: 'Master\'s', description: 'Study of user interface design and user experience considerations, focusing on usability testing and design best practices' },
  { title: 'Software Project Management', level: 'Master\'s', description: 'Principles and techniques for managing software projects, including agile methodologies, project scheduling, and risk management' },
  { title: 'Algorithm Design and Analysis', level: 'Undergraduate', description: 'Theoretical and practical aspects of algorithm design, including complexity analysis and algorithm optimization techniques' },
  { title: 'Machine Learning', level: 'Master\'s', description: 'Advanced machine learning techniques and their applications, focusing on supervised, unsupervised, and reinforcement learning' },
  { title: 'Systems Engineering', level: 'Master\'s', description: 'Integrated approach to engineering complex systems, covering systems thinking, design methodologies, and lifecycle management' }
];


// Serve profile data as JSON
app.get('/api/profile', (req, res) => {
    res.json(profile);
});



app.get('/api/skills', (req, res) => {
  try {
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/courses', (req, res) => {
  try {
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
