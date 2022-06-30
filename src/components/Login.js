import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, } from 'react-bootstrap';

function Login() {
    const navigate = useNavigate(); 
  return (
<Container fluid>
            <Row>
            <Col>
                    <Link to="/">Home</Link>
                </Col>
                <Col>
                    <div className="d-flex align-items-right jusfy-content-end">
                        <Button variant="secondary">Sign in/up</Button>
                    </div>
                    
                </Col>
                </Row>
                <Row className='mt-2 justify-content-md-center border'>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            navigate("/StartBuild")
                        }}  > Start Build</Button>
                    </Col>
                    <Col>
                    <Button variant="secondary" onClick={() => {
                            navigate("/parts")
                        }}  > Browse Parts</Button>
                    </Col>
                    <Col>
                    <Button variant="secondary" onClick={() => {
                            navigate("/builds")
                        }}  > Browse Builds</Button>
                    </Col>
                    <Col>
                    <Button variant="secondary" onClick={() => {
                            navigate("/Community")
                        }}  > Community</Button>
                    </Col>
                    <Col>
                    <Button variant="secondary" onClick={() => {
                            navigate("/ContactUs")
                        }}  > Contact Us</Button>
                    </Col>
                    <Col>
                    <Button variant="secondary" onClick={() => {
                            navigate("/Help")
                        }}  > Help </Button>
                    </Col>
                </Row>

                <div class="mt-5 mx-5">
                    <ul class="nav nav-pills " id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link btn-dark active" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected="true">Sign up</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link btn-dark " id="pills-signin-tab" data-bs-toggle="pill" data-bs-target="#pills-signin" type="button" role="tab" aria-controls="pills-signin" aria-selected="false">Sign in</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-signup" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="row">
                                <div class="col-3">
                                    <label for="formInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="formInput1" placeholder="Enter email address"/>
                                    
                                    <label for="formInput2" class="form-label mt-2">Password</label>
                                    <input type="password" class="form-control" id="formInput2" placeholder="password"/>
                                    
                                    <label for="formInput3" class="form-label mt-2">Confirm password</label>
                                    <input type="password" class="form-control" id="formInput3" placeholder="password" />

                                    <button type="button" class="btn btn-outline-dark btn-lg mt-4" id="signup" onclick="toAccount()">Create account</button>

                                </div>
                            </div>
                        
                        </div>
                        <div class="tab-pane fade" id="pills-signin" role="tabpanel" aria-labelledby="pills-contact-tab"> 
                            <div class="row">
                                <div class="col-3">
                                    <label for="formInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="formInput1" placeholder="Enter email address"/>
                                    
                                    <label for="formInput2" class="form-label mt-2">Password</label>
                                    <input type="password" class="form-control" id="formInput2" placeholder="password"/>
                                    
                                    <button type="button" class="btn btn-outline-dark btn-lg mt-4" id="signin" onclick="toAccount()">Sign in</button>

                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
        </Container>
  )
}

export default Login