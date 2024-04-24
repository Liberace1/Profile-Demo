import React, { useState, useEffect } from 'react';
import './App.css';
import CongratulationsModal from './CongratulationsModal';

function App() {
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);  // Use null for initial state when expecting an object
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rating, setRating] = useState(0);


  useEffect(() => {
    // Fetch profile with error handling
    fetch('/api/profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Changed from text() to json()
      })
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile:', error));

    // Fetch skills with error handling
    fetch('/api/skills')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Changed from text() to json()
      })
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));

    // Fetch courses with error handling
    fetch('/api/courses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Changed from text() to json()
      })
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>; // Render loading until the profile is fetched
  }









 const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    // You can also open the modal here if needed
    // setTimeout(() => setModalIsOpen(true), 5000);
  };

  // Function to render a single star
  const renderStar = (index) => {
    return (
      <span
        key={index}
        style={{ cursor: 'pointer', marginRight: '5px' }}
        onClick={() => handleStarClick(index + 1)} // Index starts from 0, so add 1 to represent the actual rating value
      >
        {index < rating ? '★' : '☆'} {/* Render filled star if index is less than rating, otherwise render empty star */}
      </span>
    );
  };

  // Function to render star rating component
  const renderStarRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(renderStar(i));
    }
    return stars;
  };












  return (
    <div className="App">

	<header className="welcome"> 
	  Welcome Quilter, Ola has prepared this for you
      </header>


 	<button onClick={() => setModalIsOpen(true)} style={{ padding: '10px 20px', cursor: 'pointer', margin: '10px' }}>
        Would you like to know the setup?
      	</button>

     	 <CongratulationsModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />

       <text>Rate this Demo!</text>  {/* Render star rating component */}
      {renderStarRating()}




      <div className="section">
        <h1>About Me</h1>
        <p>{profile.name} - {profile.description}</p>
        <p className="core-experience">Core Experience</p>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill.name} - {skill.description}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h1>My Skills</h1>
        <ul>
          {skills.map(skill => (
            <li key={skill.name}>{skill.name} - {skill.description}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>My Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.title}>{course.title} ({course.level}): {course.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

