import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2563eb', // Blue background
        color: '#fff', // White text color
        textAlign: 'center',
        padding: '20px',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Rohan Mathew Alex. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <a href="https://github.com/rohanmathewalex" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          GitHub
        </a> | 
        <a href="https://rohanmathewalex.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          Portfolio
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
