import React from 'react'
import { Col, Row } from 'react-bootstrap'

function ExampleUser() {
  return (
    <div>
        <Row>
            <div className='col-4'>
                <img src={require('./pfp.jpg')} className="ms-4 mt-4 border photo" />
            </div>
            <p className="mt-4 fw-bold"> Account details: </p>
            <div className="col-4 m-4">
                <p className="fw-bold">Name:</p>
                <p className="mx-4"> User_name</p>
                <p className="fw-bold">Account created:</p>
                <p className="mx-4"> June 12, 2019</p>
            </div>
            <div className="col-4 m-4">
                <p className="fw-bold">Recent activities:</p>
                <p className="mx-4"> User reviewed <a href='ExampleCpu'>Intel 11200X</a></p>
            </div>
        </Row>
        


    </div>
  )
}

export default ExampleUser