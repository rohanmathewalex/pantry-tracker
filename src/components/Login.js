import React, { useState } from 'react';
import { Button, Box, Typography, Paper, Container } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // Ensure the correct path to firebase.js
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Login = () => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log(user); // Handle the user data here

      // Redirect after successful login
      router.push('/dashboard'); // Redirect to the desired page (e.g., dashboard)
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign In</Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          {/* Google Sign-In Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGoogleSignIn}
            sx={{ mt: 2 }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

 


/**
 * Explanation:
Import useRouter: Import useRouter from next/router to handle navigation.
Initialize useRouter: Create an instance of the router with const router = useRouter();.
Redirect after login: Use router.push('/dashboard'); to navigate to the desired page after a successful login. You can replace '/dashboard' with any route you want to redirect users to.
Considerations:
Redirection Path: Adjust the path in router.push() based on where you want to redirect the user (e.g., /home, /profile, etc.).
Error Handling: Ensure proper error handling is in place to manage scenarios where login fails.

 */