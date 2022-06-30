import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Container , Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import StartBuild from './components/StartBuild';
import Parts from './components/Parts';
import Builds from './components/Builds';
import Community from './components/Community';
import Help from './components/Help';
import ContactUs from './components/ContactUs';
import Login from './components/Login';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/StartBuild' element={<StartBuild /> } />
          <Route path='/parts' element={<Parts /> } />
          <Route path='/Builds' element={<Builds /> } />
          <Route path='/Community' element={<Community /> } />
          <Route path='/ContactUs' element={<ContactUs /> } />
          <Route path='/Help' element={<Help /> } />
          <Route path='/Login' element={<Login /> } />
        </Routes>
      </Router>
  );
}

export default App;
