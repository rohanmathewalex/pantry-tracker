import { auth, database } from '../firebase/firebase.js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

 

function IndexPage({ Component, pageProps}){
    return (
        <>
          <Navbar />
          <Container>
            Welcome to my app
          </Container>
        </>
      );

}
  
  export default IndexPage;