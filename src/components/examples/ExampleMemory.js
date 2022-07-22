import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ExampleMemory() {
    const navigate = useNavigate(); 
    return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./ram.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$120</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">Corsair Vengence LPX</p>
                <p className="fw-bold">Speed</p>
                <p className="mx-4">3200</p>
                <p className="fw-bold">Modules</p>
                <p className="mx-4">2 x 8GB</p>
                <p className="fw-bold">Color </p>
                <p className="mx-4">RGB</p>
                <p className="fw-bold">Latency</p>
                <p className="mx-4">18</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a className='linkcss' onClick={()  => {navigate('/ExampleUser')}}>blueCandy</a>: very nice memory, very fast</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleMemory