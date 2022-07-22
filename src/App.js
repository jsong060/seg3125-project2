import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import StartBuild from './components/StartBuild';
import Parts from './components/CpuParts';
import Builds from './components/Builds';
import Community from './components/Community';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Account from './components/Account';
import Login from './components/Login';
import CpuParts from './components/CpuParts';
import CpuCoolerParts from './components/CpuCoolerParts';
import NavMenu from './components/NavMenu';
import MotherboardParts from './components/MotherboardParts';
import MemoryParts from './components/MemoryParts';
import StorageParts from './components/StorageParts';
import VideoCardParts from './components/VideoCardParts';
import PowerSupplyParts from './components/PowerSupplyParts';
import CompCaseParts from './components/CompCaseParts';
import MonitorParts from './components/MonitorParts';
import MouseParts from './components/MouseParts';
import KeyboardParts from './components/KeyboardParts';
import FooterPg from './components/FooterPg';
import ExampleUser from './components/examples/ExampleUser';
import ExampleBuild from './components/examples/ExampleBuild';
import ExampleCpu from './components/examples/ExampleCpu';
import ExampleCooler from './components/examples/ExampleCooler';
import ExampleMotherBoard from './components/examples/ExampleMotherBoard';
import ExampleMemory from './components/examples/ExampleMemory';
import ExampleStorage from './components/examples/ExampleStorage';
import ExampleVideoCard from './components/examples/ExampleVideoCard';
import ExamplePSU from './components/examples/ExamplePSU';
import ExampleCase from './components/examples/ExampleCase';
import ExampleMonitor from './components/examples/ExampleMonitor';
import ExampleMouse from './components/examples/ExampleMouse';
import ExampleKeyboard from './components/examples/ExampleKeyboard';


function App() {
  return (
    <div className='bg'>
      <NavMenu />
      <Router>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/StartBuild' element={<StartBuild /> } />
          <Route path='/parts' element={<Parts /> } />
          <Route path='/Builds' element={<Builds /> } />
          <Route path='/Community' element={<Community /> } />
          <Route path='/ContactUs' element={<ContactUs /> } />
          <Route path='/AboutUs' element={<AboutUs /> } />
          <Route path='/Account' element={<Account /> } />
          <Route path='/Login' element={<Login /> } />
          <Route path='/CpuParts' element={<CpuParts /> } />
          <Route path='/CpuCoolerParts' element={<CpuCoolerParts /> } />
          <Route path='/MotherboardParts' element={<MotherboardParts /> } />
          <Route path='/MemoryParts' element={<MemoryParts /> } />
          <Route path='/StorageParts' element={<StorageParts /> } />
          <Route path='/VideoCardParts' element={<VideoCardParts /> } />
          <Route path='/PowerSupplyParts' element={<PowerSupplyParts /> } />
          <Route path='/CompCaseParts' element={<CompCaseParts /> } />
          <Route path='/MonitorParts' element={<MonitorParts /> } />
          <Route path='/MouseParts' element={<MouseParts /> } />
          <Route path='/KeyboardParts' element={<KeyboardParts /> } />
          <Route path='/ExampleCpu' element={<ExampleCpu /> } />
          <Route path='/ExampleUser' element={<ExampleUser /> } />
          <Route path='/ExampleBuild' element={<ExampleBuild /> } />
          <Route path='/ExampleCooler' element={<ExampleCooler /> } />
          <Route path='/ExampleMotherBoard' element={<ExampleMotherBoard /> } />
          <Route path='/ExampleMemory' element={<ExampleMemory /> } />
          <Route path='/ExampleStorage' element={<ExampleStorage /> } />
          <Route path='/ExampleVideoCard' element={<ExampleVideoCard /> } />
          <Route path='/ExamplePSU' element={<ExamplePSU /> } />
          <Route path='/ExampleCase' element={<ExampleCase /> } />
          <Route path='/ExampleMonitor' element={<ExampleMonitor /> } />
          <Route path='/ExampleMouse' element={<ExampleMouse /> } />
          <Route path='/ExampleKeyboard' element={<ExampleKeyboard /> } />


        </Routes>
      </Router>
      <FooterPg />
    </div>
  );
}

export default App;
