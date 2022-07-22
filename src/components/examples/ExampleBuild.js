import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container , Row, Navbar, Button, NavDropdown, Form} from 'react-bootstrap';


function ExampleBuild() {
  const navigate = useNavigate(); 
  return (
    <div>
      <h2 className='mt-4 fw-bold'>Build Name</h2>
      <Row>
          <div class="col-4">
              <img src={require('./examplebuild.jpg')} className="ms-4 mt-4 border photo" />

              <p class="mt-4 fw-bold"> Price: </p>
              <p class="mx-4">$2500</p>
          </div>
          <div class="col-4">
              <p class="mt-4 fw-bold"> Specs: </p>
              <p class="mx-4">CPU: <a className='linkcss' onClick={()  => {navigate('/ExampleCpu')}}>AMD Ryzen 5060</a></p>
              <p class="mx-4">Cooler: <a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>NZXT AIO 120MM</a></p>
              <p class="mx-4">Motherboard: <a className='linkcss' onClick={()  => {navigate('/ExampleMotherBoard')}}>Gigabyte x570 Elite</a></p>
              <p class="mx-4">Memory: <a className='linkcss' onClick={()  => {navigate('/ExampleMemory')}}>Corsair Vengence 16GB</a></p>
              <p class="mx-4">Storage: <a className='linkcss' onClick={()  => {navigate('/ExampleStorage')}}>Kingston 2TB HHD</a></p>
              <p class="mx-4">Video Card: <a className='linkcss' onClick={()  => {navigate('/ExampleVideoCard')}}>NVIDIA RTX 3060</a></p>
              <p class="mx-4">Power Supply: <a className='linkcss' onClick={()  => {navigate('/ExamplePSU')}}>Corsair 700W PSU</a></p>
              <p class="mx-4">Case: <a className='linkcss' onClick={()  => {navigate('/ExampleCase')}}>Fractual Design Meshify</a></p>
              <p class="mx-4">Monitor: <a className='linkcss' onClick={()  => {navigate('/ExampleMonitor')}}>LG GLP2000 27 Inch 114Hz</a></p>
              <p class="mx-4">Mouse: <a className='linkcss' onClick={()  => {navigate('/ExampleMouse')}}>SteelSeries Rival500</a></p>
              <p class="mx-4">Keyboard: <a className='linkcss' onClick={()  => {navigate('/ExampleKeyboard')}}>Logitech Pro wireless</a></p>

          </div>
          <div class="col-4">
              <p class="mt-4 fw-bold"> Review: </p>
              <p className="mx-4"><a className='linkcss' onClick={()  => {navigate('/ExampleUser')}}>blueCandy</a>: Wow this system looks great, thank you for sharing</p>
          </div>
        </Row>


    </div>
  )
}

export default ExampleBuild