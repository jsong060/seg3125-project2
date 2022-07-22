import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleMotherBoard() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./mobo.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$500</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">Gigabyte x570 Elite wifi</p>
                <p className="fw-bold">Socket</p>
                <p className="mx-4">AM4</p>
                <p className="fw-bold">Form Factor</p>
                <p className="mx-4">ATX</p>
                <p className="fw-bold">Memory slots</p>
                <p className="mx-4">4</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">Black</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: very nice motherboard, has wifi functionality</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleMotherBoard