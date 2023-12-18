// src/components/Certifications.js
import React from 'react';
import { Paper, Typography, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';


var path = process.env.PUBLIC_URL;
var AWSSAA = "/AWSSAA.png";
var AWSMLS = "/AWSMLS.png";

// Sample certifications data (replace with your actual certifications data)
const certificationsData = [
  // Your certificate data goes here
  { name: 'AWS Solutions Architect - Associate', 
    issuer: 'AWS', date: 'March 2023', 
    image: <img src={path + AWSSAA} alt="Certificate 1" 
                style={{ width: '240px', height: '240px', marginBottom: '20px', cursor: 'pointer', margin: 'auto' }}/>
  },
  { name: 'AWS Machine Learning - Specialty', 
    issuer: 'AWS', date: 'August 2023', 
    image: <img src={path + AWSMLS} alt="Certificate 2" 
                style={{ width: '240px', height: '240px', marginBottom: '20px', cursor: 'pointer', margin: 'auto' }}/>
  },
  // Add more certificates as needed
];



const Certifications = () => {

 

  return (
  <div className="certifications-section">
      <Typography variant="h2">Certifications</Typography>
      <Paper elevation={0} style={{padding: '24px'}}>
      <Grid container spacing={2}>
        {certificationsData.map((certificate, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Paper elevation={2} style={{ padding: '16px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
              <div>
              {certificate.image}
              </div>
              <div>
                <Typography variant="h6">{certificate.name}</Typography>
                <Typography variant="subtitle1">{certificate.issuer}</Typography>
                <Typography variant="caption">{certificate.date}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>

    </div>
  );
};

export default Certifications;
