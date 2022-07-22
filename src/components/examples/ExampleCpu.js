import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleCpu() {
  return (
    <div>
        <Row>
            <div className='col-4'>
                <img src={require('./cpu.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$600</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> CPU name: </p>
                <p className="mx-4">Intel 11200X</p>
                <p className="fw-bold">Core count</p>
                <p className="mx-4">12</p>
                <p className="fw-bold">Socket</p>
                <p className="mx-4">LGA1700</p>
                <p className="fw-bold">Integrated Graphics</p>
                <p className="mx-4">Intel UHD Graphics 500</p>
                <p className="fw-bold">Maximum supported memory</p>
                <p className="mx-4">128GB</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: very nice CPU, good for its price</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleCpu