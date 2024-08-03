// src/pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Signup successful! Redirecting...');
      setTimeout(() => router.push('/dashboard'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError('Error signing up: ' + error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccess('Signup successful! Redirecting...');
      setTimeout(() => router.push('/dashboard'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError('Error signing up with Google: ' + error.message);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleEmailSignup} fullWidth>
        Signup with Email
      </Button>
      <Button variant="contained" color="secondary" onClick={handleGoogleSignup} fullWidth style={{ marginTop: '1rem' }}>
        Signup with Google
      </Button>
    </Container>
  );
};

export default SignupPage;
