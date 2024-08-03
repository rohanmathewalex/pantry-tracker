import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, Container, Alert } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // Ensure correct path to firebase.js
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to login page or a welcome page upon successful signup
      router.push('/login'); // Adjust to the path you want to redirect to
    } catch (error) {
      setError('Error signing up: ' + error.message); // Display error message
      console.error('Signup error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" component="h1">Sign Up</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {/* Email Input */}
          <TextField
            required
            fullWidth
            label="Email Address"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          {/* Password Input */}
          <TextField
            required
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {/* Error Message */}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {/* Sign Up Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;



/**
 * ey Updates:
Error Handling: Added an Alert component to display error messages in case of a signup failure.
Form Elements: Included TextField components for email and password input with appropriate labels and types.
Redirection: Implemented redirection to the /login page after a successful signup using router.push().
Styling: Utilized Material-UI components for a professional and clean look, including spacing and margin adjustments.
Explanation:
Container: Centers the content and limits its width.
Paper: Adds a card-like background with elevation for a clean, distinguished look.
Typography: Sets the header style.
TextField: Used for user input with appropriate labels.
Button: Styled to be full-width and contained for emphasis.
Alert: Displays error messages in case of signup failure.
 */
