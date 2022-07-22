import React from 'react'
import { Container , Row, Navbar, Button, NavDropdown, Form} from 'react-bootstrap';


function ExampleBuild() {
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
              <p class="mx-4">CPU: <a href='/ExampleCpu'>AMD Ryzen 5060</a></p>
              <p class="mx-4">Cooler: <a href='/ExampleCooler'>NZXT AIO 120MM</a></p>
              <p class="mx-4">Motherboard: <a href='/ExampleMotherBoard'>Gigabyte x570 Elite</a></p>
              <p class="mx-4">Memory: <a href='/ExampleMemory'>Corsair Vengence 16GB</a></p>
              <p class="mx-4">Storage: <a href='/ExampleStorage'>Kingston 2TB HHD</a></p>
              <p class="mx-4">Video Card: <a href='/ExampleVideoCard'>NVIDIA RTX 3060</a></p>
              <p class="mx-4">Power Supply: <a href='/ExamplePSU'>Corsair 700W PSU</a></p>
              <p class="mx-4">Case: <a href='/ExampleCase'>Fractual Design Meshify</a></p>
              <p class="mx-4">Monitor: <a href='/ExampleMonitor'>LG GLP2000 27 Inch 114Hz</a></p>
              <p class="mx-4">Mouse: <a href='/ExampleMouse'>SteelSeries Rival500</a></p>
              <p class="mx-4">Keyboard: <a href='/ExampleKeyboard'>Logitech Pro wireless</a></p>

          </div>
          <div class="col-4">
              <p class="mt-4 fw-bold"> Review: </p>
              <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: Wow this system looks great, thank you for sharing</p>
          </div>
        </Row>


    </div>
  )
}

export default ExampleBuild