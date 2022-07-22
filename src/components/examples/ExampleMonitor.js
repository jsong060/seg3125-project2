import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ExampleMonitor() {
    const navigate = useNavigate(); 
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./monitor.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$200</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">MSI Optix G241</p>
                <p className="fw-bold">Refresh Rate</p>
                <p className="mx-4">144 Hz</p>
                <p className="fw-bold">Screen size</p>
                <p className="mx-4">24"</p>
                <p className="fw-bold">Response time</p>
                <p className="mx-4">1 ms</p>
                <p className="fw-bold">Panel Type</p>
                <p className="mx-4">IPS</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a className='linkcss' onClick={()  => {navigate('/ExampleUser')}}>blueCandy</a>: very nice monitor, high refresh rates and a color accurate screen</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleMonitor