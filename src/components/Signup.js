import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, Container, Alert } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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
      // Redirect to login page upon successful signup
      router.push('/login'); // Adjust to the path you want to redirect to
    } catch (error) {
      setError('Error signing up: ' + error.message); // Display error message
      console.error('Signup error:', error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect to a different page if needed
      router.push('/home'); // Adjust to the path you want to redirect to
    } catch (error) {
      setError('Error signing up with Google: ' + error.message); // Display error message
      console.error('Google signup error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
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
          {/* Google Sign Up Button */}
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleGoogleSignUp}
          >
            Sign Up with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
