import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ExampleKeyboard() {
    const navigate = useNavigate(); 
  return (
    <div>
        <Row>
            <div className='col-4'>
            <img src={require('./kb.jpg')} className="ms-4 mt-4 border photo" />

                <p className="mt-4 fw-bold"> Price: </p>
                <p className="mx-4">$100</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> Keyboard name: </p>
                <p className="mx-4">Logitech G730</p>
                <p className="fw-bold">Switches</p>
                <p className="mx-4">MX Cherry Red</p>
                <p className="fw-bold">Backlit</p>
                <p className="mx-4">RGB</p>
                <p className="fw-bold">Style</p>
                <p className="mx-4">Gaming</p>
                <p className="fw-bold">Color</p>
                <p className="mx-4">Black</p>
            </div>
            <div className="col-4">
                <p className="mt-4 fw-bold"> User comments </p>
                <p className="mx-4"><a className='linkcss' onClick={()  => {navigate('/ExampleUser')}}>blueCandy</a>: very nice keyboard, low latency and mechanical red switches</p>
            </div>
        </Row>
    </div>


  )
}

export default ExampleKeyboard