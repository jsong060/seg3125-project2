import React from 'react'
import { Button, Row } from 'react-bootstrap'

function ExampleStorage() {
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./storage.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$120</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Part name: </p>
                <p className="mx-4">Samsung 970 EVO Plus</p>
                <p className="fw-bold">Capacity</p>
                <p className="mx-4">1 TB</p>
                <p className="fw-bold">Type</p>
                <p className="mx-4">SSD</p>
                <p className="fw-bold">Cache</p>
                <p className="mx-4">1024 MB</p>
                <p className="fw-bold">Interface</p>
                <p className="mx-4">M.2 (M)</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a href='/ExampleUser'>blueCandy</a>: very nice storage, very large capacity</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleStorage