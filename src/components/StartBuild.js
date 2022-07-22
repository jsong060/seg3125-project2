import React, { useState } from 'react';
// import { View } from "react-native";
import { Link, useNavigate } from 'react-router-dom';
import { Container , Breadcrumb, Button, ListGroup} from 'react-bootstrap';


function StartBuild() {
    const navigate = useNavigate(); 
    
    //make individual variables
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

    function deleteAll(){
        for (var i = 0; i < localStorage.length; i++){
            localStorage.setItem(localStorage.key(i), '');
            window.location.reload(false);
        }
    }

    return (
        <>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Start Build</Breadcrumb.Item>
        </Breadcrumb>

        

            <Container fluid> 
                <p className='fs-2'>Start your personal build</p>                 
                  <ListGroup className='mt-2 mx-2'>
                    <ListGroup.Item> CPU : <a href='ExampleCpu'>{cpu}</a> <Button  float='right' variant="secondary" onClick={() => {
                              navigate("/CpuParts")
                          }} > Add</Button> </ListGroup.Item>
                    <ListGroup.Item> CPU Cooler : <a href='ExampleCooler'>{cpuCooler}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/CpuCoolerParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Motherboard : <a href='ExampleMotherboard'>{motherboard}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/MotherboardParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Memory : <a href='ExampleMemory'>{memory}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/MemoryParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Storage : <a href='ExampleStorage'>{storage}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/StorageParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Video Card : <a href='ExampleVideoCard'>{videoCard}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/VideoCardParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Power Supply : <a href='ExamplePSU'>{powerSupply}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/PowerSupplyParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Case : <a href='ExampleCase'>{compCase}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/CompCaseParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Monitor : <a href='ExampleMonitor'>{monitor}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/MonitorParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Mouse : <a href='ExampleMouse'>{mouse}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/MouseParts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Keyboard : <a href='ExampleKeyboard'>{keyboard}</a> <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/KeyboardParts")
                          }}> Add</Button> </ListGroup.Item>
                </ListGroup>

                <Button classname='mt-5' variant='danger' onClick={() => deleteAll()}>Delete everything</Button>
          </Container>
        </>
  )
}

export default StartBuild