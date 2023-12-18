// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element, Events, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { IconButton } from '@mui/material';



const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      // Update active section when scrolling begins
      setActiveSection(to || 'home'); // Set default to 'home' if 'to' is undefined
      setMenuOpen(false);
    });


    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to top when clicking on the logo or Home in the nav
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header fixed`}>
      <nav className="navbar">
            <div className="logo" onClick={scrollToTop}>
                <b> Sandeep Punugu </b>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="navbar-collapse">
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {/* Exclude "Home" from navigation items */}
                <li>
                    <ScrollLink
                    to="about"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60} // Offset to adjust the highlight position
                    >
                    About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60} // Offset to adjust the highlight position
                    >
                    Skills
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60}
                    >
                    Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    to="timeline"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60}
                    >
                    Work Experience
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    to="certifications"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60}
                    >
                    Certifications
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={800}
                    activeClass="active"
                    spy={true}
                    offset={-60}
                    >
                    Contact
                    </ScrollLink>
                </li>
                </ul>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                  <IconButton color="inherit" href="https://github.com/svpunugu" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.linkedin.com/in/sandeep-punugu-b3aa0222" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                  <IconButton color="inherit" href="https://medium.com/@sunniz31" target="_blank">
                    <FontAwesomeIcon icon={faMedium} />
                  </IconButton>
        </div>

      </nav>
    </header>
  );
};

export default Header;
