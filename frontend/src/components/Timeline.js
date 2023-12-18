// Timeline.js
import React from 'react';
import { Paper, Grid, Typography, Container, Divider, Avatar } from '@mui/material';

const TimelineItem = ({ date, title, description, image, alignLeft }) => (
  <Grid container spacing={3} alignItems="center">
    <Grid item xs={3}>
      {/* Adjust the width of the timeline date column */}
      <Typography variant="h6" align="center">
        {date}
      </Typography>
    </Grid>

    <Grid item xs={1}>
      {/* Timeline Separator */}
      <Divider orientation="vertical" flexItem />
    </Grid>

    <Grid item xs={1}>
      {/* Timeline Image */}
      <Avatar src={image} alt={title} />
    </Grid>

    <Grid item xs={6}>
      <Paper elevation={3} style={{ padding: '20px', marginLeft: alignLeft ? 'auto' : '20px', marginRight: alignLeft ? '20px' : 'auto' }}>
        {/* Conditionally apply marginLeft based on alignLeft */}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);

const Timeline = () => (
  <Container>
    <TimelineItem
      date="2000"
      title="Event Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://placekitten.com/100/100" // Example image URL
    />

    <TimelineItem
      date="2005"
      title="Another Event Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://placekitten.com/100/100" // Example image URL
      alignLeft
    />

    {/* Add more TimelineItems as needed */}
  </Container>
);

export default Timeline;
