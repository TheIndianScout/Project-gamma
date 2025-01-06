import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Loader from 'react-loaders'
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const PlayerProfile = lazy(() => import('./components/PlayerProfile.jsx'));
const ClubProfile = lazy(() => import('./components/ClubProfile.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function App() {

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Suspense fallback={<Loader/>}>
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} >/</Route>
            <Route path='/about' element={<About />} >/</Route>
            <Route path='/contact' element={<Contact />} >/</Route>
            <Route path='/login' element={<Login />} >/</Route>
            <Route path='/player-profile' element={<PlayerProfile />} >/</Route>
            <Route path='/club-profile' element={<ClubProfile />} >/</Route>
          </Routes>
        </Router>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
