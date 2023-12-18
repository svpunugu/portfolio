// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Element, ScrollLink } from 'react-scroll';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';




const Home = () => {
  
    var path = process.env.PUBLIC_URL;
    var image = "/spavatar.jpg";
    var vid = "/video.mp4"

    const [backgroundBrightness, setBackgroundBrightness] = useState('light');

  useEffect(() => {
    // Function to determine background brightness
    const getBrightness = (color) => {
      // Convert the color to RGB
      const rgb = color.match(/\d+/g);
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

      // Use a threshold to determine if it's light or dark
      return brightness >= 128 ? 'light' : 'dark';
    };

    // Get the background color of the video element
    const video = document.getElementById('backgroundVideo');
    const computedStyle = window.getComputedStyle(video);
    const backgroundColor = computedStyle.backgroundColor;

    // Determine background brightness and update state
    setBackgroundBrightness(getBrightness(backgroundColor));
  }, []);

  return (
    <div className={`home ${backgroundBrightness}-background`}>
      <Header />
      <div className="background-video" id="backgroundVideo">
        <video autoPlay loop muted playsInline>
          <source src={path + vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="home-section">
        <img src={path + image} alt="Avatar" className="avatar" />
        <Typography variant="h2" >Sandeep Punugu</Typography>
        <Typography variant="h6" style={{ fontStyle: 'italic' }}>Software Architect/ AI/ML enthusiast</Typography>
        <Button variant="contained" color="primary"  style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', fontSize: '16px' }}>
            <Link to="about" smooth={true} duration={800} activeClass="active" spy={true} offset={-50}>
                Enter Portfolio
            </Link>
        </Button>
      </section>

      <div className="section" id="about">
        {/* About Section Content */}
        <About />
      </div>

      <div className="section " id="skills">
        {/* About Section Content */}
        <Skills />
      </div>

      <div className="section" id="projects">
        {/* Projects Section Content */}
        <Projects />
      </div>

      <section className="section" id="timeline">
        {/* Timeline Section Content */}
        <Experience />
      </section>

      <div className="section" id="certifications">
        {/* Certifications Section Content */}
        <Certifications />
      </div>

      <div className="section" id="contact">
        {/* Contact Section Content */}
        <Contact />
      </div>

    <Footer />
    </div>
  );
};

export default Home;
