// src/components/Timeline.js
import React, { useState } from 'react';
import { Typography, Paper, Grid, Card, CardContent, Modal } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';


const Experience = () => {
  const experienceData = [
    // Your experience data goes here
    { title: 'Solutions Architect/Pega Lead Systems Architect', 
      company: 'R2Tech LLC', 
      date: 'Feb 2023 - current', 
      description: '' },
    { title: 'Senior Software Engineer/Pega Senior Systems Architect', 
      company: 'iTech US Inc', 
      date: 'Aug 2009 - Feb 2023', 
      description: '' },
    { title: 'Software Engineer/Pega Systems Architect', 
      company: 'Cognizant Technology Solutions', 
      date: 'Feb 2006 - Aug 2009', 
      description: ' While I was at CTS, I worked as a developer in Pega PRPC. Pega PegaRULES Process Commander is a BPM rules engine developed by Pegasystems Inc. ' + '\n' + 
                   ' I worked on projects for multiple clients during my tenure involving Pega CPM, Pega Healthcare, Pega SPM frameworks.' + '\n' +
                   ' I was part of the team which was instrumental in coming up with a novel solution involving integrating Pega with Informatica for reporting.' },
    // Add more experiences as needed
  ];
  
      // Custom CSS to remove ::before styling
      const timelineStyle = {
        '&:before': {
          display: 'none',
        },
      };

      const projectsData = [
        {
          id: 1,
          title: 'AEOB VTC',
          description: 'AEOB VTC is a microservice implemented in Pega Infinity v8.7 to evaluate claim data for any potential validity, compatibility edits.',
        },
        {
          id: 2,
          title: 'CCAE Rx VTC',
          description: 'Architected the application in Pega which determines validity, compatibility edits for Pharmacy Claims via a REST service',
        },
        {
          id: 3,
          title: 'Workflow Management',
          description: 'Architected a workflow solution using Pega PRPC which helps Plans(Healthcare companies) manage, allocate work to its processors, and also automate claims processing ',
        },
        {
          id: 4,
          title: 'Benefits Processor',
          description: 'Developed the SOAP service in Pega PRPC to replace legacy module in Mainframe which determines benefit service for claims',
        },
        {
          id: 5,
          title: 'Benefits Administration',
          description: 'Designed and developed a GUI application in Pega PRPC to replace the legacy java application which is used to CRUD codes, code groups, services, products',
        },
        {
          id: 6,
          title: 'Edits Processor',
          description: 'Designed and developed a SOAP service to evaluate Medicare edits for a Medical Claim as part of Claims Adjudication Engine.',
        },
        {
          id: 7,
          title: 'eWatson SPA',
          description: 'Developed sales and marketing workflow application using Pega SPM framework that would help the customers to create, and/or renew healthcare benefit quotes',
        },
      ];


        const [selectedProject, setSelectedProject] = useState(null);
      
        const handleOpenModal = (projectId) => {
          const project = projectsData.find((p) => p.id === projectId);
          setSelectedProject(project);
        };
      
        const handleCloseModal = () => {
          setSelectedProject(null);
        };
  
  return (
    <section className="timeline-section">
      <Typography variant="h2" style={{marginBottom: '20px'}}>Work Experience</Typography>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                  <Typography variant="h5" style={{paddingLeft: '150px', justifyContent: 'left', display: 'flex'}}>Timeline</Typography>
                  <Paper elevation={0} style={{ width: '100%' }}>
                    <Timeline align="alternate" style={{width: '100%'}}>
                      {experienceData.map((experience, index) => (
                        <TimelineItem key={index} sx={timelineStyle}>
                          <TimelineSeparator>
                            <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'} />
                            {index < experienceData.length - 1 && <TimelineConnector />}
                          </TimelineSeparator>
                          <TimelineContent>
                            <Grid container spacing={2} style={{width: '100%'}}>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">{experience.date}</Typography>  
                                <Typography variant="h6">{experience.title}</Typography>
                                <Typography variant="subtitle1">{experience.company}</Typography>
                                <Typography style={{marginTop: '16px'}}>{experience.description}</Typography>
                              </Grid>
                            </Grid>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>          
              <Typography variant="h5">Projects</Typography>
              <Paper elevation={0} style={{ marginTop: '20px',  width: '100%' }}>
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
              </Paper>
            </Grid>
                          {/* Modal for displaying project details */}
                <Modal open={!!selectedProject} onClose={handleCloseModal}>
                <div className="modal-content">
                  <Typography variant="h4">{selectedProject?.title}</Typography>
                  <Typography variant="body1">{selectedProject?.description}</Typography>
                  {/* Add more modal content if needed */}
                </div>
              </Modal>
      </Grid>
    </section>
  );
};

export default Experience;
