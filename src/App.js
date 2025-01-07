import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Loader from './components/Loader'; // Adjust the path to the loader component
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const PlayerProfile = lazy(() => import('./components/PlayerProfile.jsx'));
const ClubProfile = lazy(() => import('./components/ClubProfile.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

// Wrapper component to handle loading logic
function Wrapper() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // useLocation now works correctly inside Router

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate a delay for loading
    return () => clearTimeout(timer); // Cleanup
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />} {/* Display the loader */}
      <Navbar />
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player-profile" element={<PlayerProfile />} />
          <Route path="/club-profile" element={<ClubProfile />} />
        </Routes>
      )}
      {!loading && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Wrapper />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
