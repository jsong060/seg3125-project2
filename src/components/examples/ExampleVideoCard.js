import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleVideoCard() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./gpu.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$700</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">NVIDIA 3070</p>
                <p className="fw-bold">Memory</p>
                <p className="mx-4">8GB</p>
                <p className="fw-bold">Memory Type</p>
                <p className="mx-4">GDDR6X</p>
                <p className="fw-bold">Core Clock</p>
                <p className="mx-4">1600 MHz</p>
                <p className="fw-bold">Length</p>
                <p className="mx-4">300 mm</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: very nice video card, high performance in all games</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleVideoCard