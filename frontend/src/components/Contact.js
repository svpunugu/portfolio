// src/components/Contact.js
import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, TextareaAutosize } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend for processing
      const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
  
        // Optionally, show a success message to the user
        alert('Message sent successfully!');
      } else {
        // Handle errors from the backend
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div id="contact" className="contact-section">
      <Typography variant="h2">Contact Me</Typography>

      {/* Contact Information */}
      <Typography variant="body1">Email: mail@sandeeppunugu.me</Typography>
      <Typography variant="body1">Phone: +1 (937) 307-8019</Typography>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={6} columnSpacing={{xs: 4}} spacing={2}>
          {/* Left column with text fields */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{paddingBottom: '20px'}}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{paddingBottom: '20px'}}
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          {/* Right column with text area */}
          <Grid item xs={12} md={6}>
            <TextField
              multiline
              minRows={7.5}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', height: '100%', resize: 'none' }}
              required
            />
          </Grid>

          {/* Send Message button */}
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
