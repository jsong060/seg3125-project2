import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';

function Account() {

  const navigate = useNavigate(); 
  
  const [cpu, setCpu] = useState(localStorage.getItem('cpu') || '');
  const [cpuCooler, setCpuCooler] =useState(localStorage.getItem('cpuCooler') || '');
  const [motherboard, setMotherboard] =useState(localStorage.getItem('motherboard') || '');
  const [memory, setMemory] =useState(localStorage.getItem('memory') || '');
  const [storage, setStorage] =useState(localStorage.getItem('storage') || '');
  const [videoCard, setVideoCard] = useState(localStorage.getItem('videoCard') || '');
  const [powerSupply, setPowerSupply] =useState(localStorage.getItem('powerSupply') || '');
  const [compCase, setCompCase] = useState(localStorage.getItem('compCase') || '');
  const [monitor, setMonitor] = useState(localStorage.getItem('monitor') || '');
  const [mouse, setMouse] = useState(localStorage.getItem('mouse') || '');
  const [keyboard, setKeyboard] = useState(localStorage.getItem('keyboard') || '');



  return (
    <div>
      <p className='fs-1 mt-3 mx-3'> Hello, user!</p>
      <img src={require('./examples/pfp.jpg')} className="ms-4 mt-4 border photo" />
      <Row>
      
      <div class="col-3 rounded-1 m-2">
      <p class="mt-4 mx-3 fw-bold"> Account details: </p>
          <p class="mt-4 fw-bold"> Email: </p>
          <p class="mx-4">exampleEmail@email.com</p>
          <p class="fw-bold">Name:</p>
          <p class="mx-4"> User_name</p>
      </div>
      <div class="col-4 rounded-1 m-2">
      <p class="mt-4 mx-3 fw-bold"> Current Build: </p>
          <p class="mt-4 fw-bold"> CPU: </p>
          <p class="mx-4">{cpu}</p>
          <p class="fw-bold">CPU Cooler:</p>
          <p class="mx-4"> {cpuCooler}</p>
          <p class="fw-bold">Motherboard:</p>
          <p class="mx-4"> {motherboard}</p>
          <p class="fw-bold">Memory:</p>
          <p class="mx-4"> {memory}</p>
          <p class="fw-bold">Storage:</p>
          <p class="mx-4"> {storage}</p>
          <p class="fw-bold">Video Card:</p>
          <p class="mx-4"> {videoCard}</p>
          <p class="fw-bold">Power Supply:</p>
          <p class="mx-4"> {powerSupply}</p>
          <p class="fw-bold">Case:</p>
          <p class="mx-4"> {compCase}</p>
          <p class="fw-bold">Monitor:</p>
          <p class="mx-4"> {monitor}</p>
          <p class="fw-bold">Mouse:</p>
          <p class="mx-4"> {mouse}</p>
          <p class="fw-bold">Keyboard:</p>
          <p class="mx-4"> {keyboard}</p>

          <Button onClick={() => {
                  navigate("/StartBuild")
              }}>Go to My build</Button>
      </div>
      <div class="col-4 rounded-1 m-2">
          <p class="mt-4 fw-bold"> Recent reviews: </p>
          <p class="mx-4">None</p>

      </div>
        
      </Row>
    


    </div>
  )
}

export default Account