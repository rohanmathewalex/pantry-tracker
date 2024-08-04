import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function IndexPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup'); // Navigate to signup page
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Pantry Tracker</h1>
        <p className={styles.description}>
          Discover new recipes based on the ingredients you have. Powered by AI, our app helps you make the most out of your pantry. Start exploring now!
        </p>
        <button className={styles.button} onClick={handleGetStarted}>Get Started</button>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}

export default IndexPage;
