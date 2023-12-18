// Footer.js
import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <Paper elevation={2} style={{ padding: '16px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between' }}>
      <Typography style={{ float: 'left' }}>
        © 2023 Sandeep Punugu
      </Typography>
      <div style={{ float: 'right' }}>
        {/* Social Icons */}
        <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px', cursor: 'pointer' }} onClick={() => window.open('https://github.com/svpunugu', '_blank')} />
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/sandeep-punugu-b3aa0222', '_blank')} />
        <FontAwesomeIcon icon={faMedium} style={{ marginRight: '8px', cursor: 'pointer' }} onClick={() => window.open('https://medium.com/@sunniz31', '_blank')} />
      </div>
    </Paper>
  );
};

export default Footer;