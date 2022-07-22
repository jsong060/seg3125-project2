import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleCooler() {
  return (
    <div>
        <Row>
            <div className='col-4'>
                <img src={require('./cooler.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$120</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">Cooler Master 210 CPU Cooler</p>
                <p className="fw-bold">Noise Level</p>
                <p className="mx-4">8-30 dB</p>
                <p className="fw-bold">Fan RPM</p>
                <p className="mx-4">650-2000 RPM</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">Black</p>
                <p className="fw-bold">Height</p>
                <p className="mx-4">139mm</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: average cooler, gets the job done</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleCooler