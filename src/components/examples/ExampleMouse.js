import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleMouse() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./mouse.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$160</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">Logitech G Pro</p>
                <p className="fw-bold">Tracking Method</p>
                <p className="mx-4">Optical</p>
                <p className="fw-bold">Connection Type</p>
                <p className="mx-4">Wireless</p>
                <p className="fw-bold">Hand Orientation</p>
                <p className="mx-4">Both</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">Black</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: very nice mouse, low latency and wireless</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleMouse