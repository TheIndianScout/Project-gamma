import Navbar from './components/Navbar';
import Home from './components/Home';
import PlayerProfile from './components/PlayerProfile';
import Login from './components/Login';
// import ClubProfile from './components/ClubProfile';
// import PlayerView from './components/PlayerView';
// import ClubView from './components/ClubView';
import Footer from './components/Footer';
import './index.css';
import Requests from './components/Requests';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() { 
  const user = false ; 

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} >/</Route>
            <Route path='/login' element={<Login/>} >/</Route>
            <Route path='/profile' element={<PlayerProfile/>} >/</Route>
          </Routes>
        </Router>
        {/* <Home /> */}
        {/* <PlayerProfile /> */}
        {/* <ClubProfile /> */}
        {/* <PlayerView /> */}
        {/* <ClubView /> */}
        <Requests/>
        <Footer />
    </div>
  );
}

export default App;
