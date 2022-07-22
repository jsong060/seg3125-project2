import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, } from 'react-bootstrap';


function ContactUs() {
    return (
        <div>
            <div class="row">
                <div class="col-4">

                    <img src={require('./icon.png')} className="ms-4 mt-4 border photo" />
                </div>
                <div class="col-4">
                    <p class="mt-4 fw-bold"> PO Box Address: </p>
                    <p class="mx-4">111 Main street</p>
                    <p class="fw-bold">Support Hours</p>
                    <p class="mx-4">Monday: 6AM - 9PM</p>
                    <p class="mx-4">Tuesday: 6AM - 9PM </p>
                    <p class="mx-4">Wednesday: 6AM - 9PM</p>
                    <p class="mx-4">Thursday: 6AM - 9PM</p>
                    <p class="mx-4">Friday: 6AM - 9PM</p>
                    <p class="mx-4">Saturday: 9AM - 9PM</p>
                    <p class="mx-4">Sunday: 9AM - 6PM</p>
                </div>
                <div class="col-4">
                    <p class="mt-4 fw-bold"> Phone number: </p>
                    <p class="mx-4">999-9999999</p>
                </div>
            </div>
        </div>
 
  )
}

export default ContactUs