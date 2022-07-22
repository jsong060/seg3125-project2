import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExamplePSU() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./psu.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$110</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">EVGA SuperNOVA GA</p>
                <p className="fw-bold">Wattage</p>
                <p className="mx-4">700W</p>
                <p className="fw-bold">Modular</p>
                <p className="mx-4">Full</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">Black</p>
                <p className="fw-bold">Length</p>
                <p className="mx-4">150 mm</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: nice power supply, enough to handle my system</p>
            </div>
        </Row>
    </div>


  )
}

export default ExamplePSU