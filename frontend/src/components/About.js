// src/components/About.js
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const About = () => {
    var path = process.env.PUBLIC_URL;
    var image = "/spavatar.jpg";
    var resume = "Resume.pdf";

  return (
    <section id="about" className="about-section">
      <Grid container spacing={1}>
        {/* Left column with avatar */}
        <Grid item xs={12} md={5}>
          <img src={path + image} alt="Avatar" className="avatar-big" />
        </Grid>

        {/* Right column with content about you */}
        <Grid item xs={12} md={6}>
            <Typography variant="h2">About Me</Typography>
            <Typography variant="body1">
              <Typography align='center' paragraph='true'> Hello, I'm Sandeep Venkata Punugu, a seasoned software architect with strong knowledge in machine learning and cloud computing. My passion lies in designing scalable and robust software solutions that leverage cutting-edge technologies to address complex business challenges.</Typography>

              <Typography align='center' paragraph='true'>With a strong foundation in software architecture and design patterns, I specialize in implementing machine learning solutions to extract meaningful insights from data. My experience extends to developing and deploying models on cloud platforms such as AWS and GCP, ensuring seamless integration with scalable and reliable cloud architectures.</Typography>

              <Typography align='center' paragraph='true'>Whether it's designing microservices architectures, implementing container orchestration with Kubernetes, or building predictive models for business intelligence, I thrive on creating innovative solutions that drive business success.</Typography>
            </Typography>
                        {/* Learn about my section */}
            <div className="learn-about">
            <Typography variant="h4">Learn more about my:</Typography>
            <Button variant="contained" color="primary"  className="Button">
                <Link to="skills" smooth={true} duration={800} activeClass="active" spy={true} offset={-50}>
                    Skills
                </Link>
            </Button>
            <Button variant="contained" color="primary"  className="Button">
                <Link to="timeline" smooth={true} duration={800} activeClass="active" spy={true} offset={-50}>
                    Work Experience
                </Link>
            </Button>
            <Button variant="contained" color="primary"  className="Button">
                <Link to="projects" smooth={true} duration={800} activeClass="active" spy={true} offset={-50}>
                    Projects
                </Link>
            </Button>
            <Button variant="contained" color="primary"  className="Button">
                <Link to="certifications" smooth={true} duration={800} activeClass="active" spy={true} offset={-50}>
                    Certifications
                </Link>
            </Button>
            <Button variant="contained" color="secondary"  className="Button" href={path + resume} download>
              Resume
            </Button>
          </div> 
        </Grid>
      </Grid>


    </section>
  );
};

export default About;
