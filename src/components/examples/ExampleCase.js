import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleCase() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./case.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$100</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Case name: </p>
                <p className="mx-4">NZXT H510 White</p>
                <p className="fw-bold">Type</p>
                <p className="mx-4">ATX Mid Tower</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">White</p>
                <p className="fw-bold">Power Supply</p>
                <p className="mx-4">None</p>
                <p className="fw-bold">Side Panel Window</p>
                <p className="mx-4">Tempered Glass</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: sleek looking case, I like the look</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleCase