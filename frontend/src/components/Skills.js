import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faDocker, faCss3, faAws, faGoogle, faHtml5,  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { Typography, Grid, TextField, Button, TextareaAutosize } from '@mui/material';


const Skills = () => {
    
 const path = process.env.PUBLIC_URL;
 const skillsCsvPath = path + "/skills.csv";

  const [skillsData, setSkillsData] = useState([]);

  // Inside the Skills component
const iconMap = {
    python: faPython,
    java: faJava,
    javascript: faJs,
    docker: faDocker,
    postgresql: faDatabase,
    mongodb: faDatabase,
    css: faCss3,
    aws: faAws,
    gcp: faGoogle,
    html: faHtml5,
    'machine-learning': faMicrochip
    // Add other icons as needed
  };

  useEffect(() => {
    // Fetch and parse CSV data
    const fetchSkillsData = async () => {
      const response = await fetch(skillsCsvPath); // Replace with the actual path
      const text = await response.text();

      // Parse CSV data
      Papa.parse(text, {
        header: true,
        complete: (result) => {
         console.log(result.data);
          setSkillsData(result.data);
        },
      });
    };

    fetchSkillsData();
  }, [skillsCsvPath]);

  return (
    <div className="skills-section">
    <Typography variant="h2" style={{marginBottom: '20px'}}>Skills</Typography>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon"><FontAwesomeIcon icon={iconMap[skill.icon]} /></div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
