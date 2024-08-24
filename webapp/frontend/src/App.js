import React, { useState, useEffect } from 'react';
import './App.css';
import CongratulationsModal from './CongratulationsModal';

const BASE_URL = 'http://98.81.203.17:5000/api';

function App() {
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [devops, setDevops] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch profile with error handling
    fetch(`${BASE_URL}/profile`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile:', error));

    // Fetch skills with error handling
    fetch(`${BASE_URL}/skills`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));

    // Fetch courses with error handling
    fetch(`${BASE_URL}/courses`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    // Fetch devops with error handling
    fetch(`${BASE_URL}/devops`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setDevops(data))
      .catch(error => console.error('Error fetching devops:', error));

    // Fetch image
    fetch(`${BASE_URL}/image`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>; // Render loading until the profile is fetched
  }

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStar = (index) => {
    return (
      <span
        key={index}
        style={{ cursor: 'pointer', marginRight: '5px' }}
        onClick={() => handleStarClick(index + 1)}
      >
        {index < rating ? '★' : '☆'}
      </span>
    );
  };

  const renderStarRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(renderStar(i));
    }
    return <div className="star-rating">{stars}</div>;
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const renderSkillTable = () => (
    <table className="table">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, index) => (
          <tr key={index}>
            <td>{skill.name}</td>
            <td>{skill.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="App">
      <header className="welcome">
        Welcome Quilter, Ola has prepared this for you
      </header>

      <button onClick={() => setModalIsOpen(true)} style={{ padding: '10px 20px', cursor: 'pointer', margin: '10px' }}>
        Would you like to know the setup?
      </button>

      <CongratulationsModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />

      <div>Rate this Demo!</div>
      {renderStarRating()}

      <div className="profile-header">
        <h1>{profile.name}</h1>
        <h2>{profile.currentRole}</h2>
      </div>

      <div className="section">
        <h1>About Me</h1>
        <p>{profile.description}</p>
        <p className="core-experience">Core Experience</p>
        <h2>Top Skills</h2>
        {profile.skills.map((skill, index) => (
          <div key={index} className="fancy-text" onClick={() => handleSkillClick(skill)}>
            <strong>{skill.name}</strong>
            {selectedSkill === skill && <p>{skill.description}</p>}
          </div>
        ))}
      </div>

      <div className="section">
        <h1>General Skills</h1>
        {renderSkillTable()}
      </div>

      <div className="section">
        <h2>My Courses</h2>
        <ul className="courses">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>DevOps Lifecycle</h2>
        {image && <img src={image} alt="Skills Distribution" className="skills-image" />}
      </div>

      {devops && (
        <div className="section">
          <h2>DevOps Skills and Tools</h2>
          <h3>Skills</h3>
          <ul>
            {devops.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3>Tools</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(devops.tools).map((category, index) => (
                <tr key={index}>
                  <td>{category}</td>
                  <td>{devops.tools[category].join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
