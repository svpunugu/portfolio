// src/components/Projects.js
import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Modal } from '@mui/material';

// Sample project data (replace with your actual project data)
const projectsData = [
  {
    id: 1,
    title: 'AEOB VTC',
    description: 'AEOB VTC is a microservice implemented in Pega Infinity v8.7 to evaluate claim data for any potential validity, compatibility edits.',
  },
  {
    id: 2,
    title: 'CCAE Rx VTC',
    description: 'CCAE Rx VTC is a microservice implemented in Pega Infinity V8.2 to evaluate the validity and compatibility edits for the pharmacy claims.',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 4,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 5,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 6,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 7,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 8,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    id: 9,
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
          <div id="personal-projects" className="projects-section">
            <Typography variant="h2">Portfolio</Typography>
              <Typography variant="h4" style={{marginBottom: '20px'}}>Machine Learning(Personal Projects)</Typography>
              <Grid container spacing={2}>
                {projectsData.map((project) => (
                  <Grid key={project.id} item xs={12} sm={6} md={4}>
                    <Card onClick={() => handleOpenModal(project.id)} className="project-card">
                      <CardContent>
                        <Typography variant="h6">{project.title}</Typography>
                        {/* Add more card content if needed */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Modal for displaying project details */}
              <Modal open={!!selectedProject} onClose={handleCloseModal}>
                <div className="modal-content">
                  <Typography variant="h4">{selectedProject?.title}</Typography>
                  <Typography variant="body1">{selectedProject?.description}</Typography>
                  {/* Add more modal content if needed */}
                </div>
              </Modal>

            </div>
  );
};

export default Projects;
