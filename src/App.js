import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PlayerProfile from './components/PlayerProfile';
import Login from './components/Login';
import ClubProfile from './components/ClubProfile';
// import PlayerView from './components/PlayerView';
// import ClubView from './components/ClubView';
import Footer from './components/Footer';
import './index.css';
import Requests from './components/Requests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
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
      {/* <Home /> */}
      {/* <PlayerProfile /> */}
      {/* <ClubProfile /> */}
      {/* <PlayerView /> */}
      {/* <ClubView /> */}
      <Requests />
      <Footer />
    </div>
  );
}

export default App;
