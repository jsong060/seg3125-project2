import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, Form  } from 'react-bootstrap';


function Builds() {
    const navigate = useNavigate();

    return (
        <div>
            <div class="container">
                <div class="row">
                <div class="col-3 mb-3">
                    <label class="form-label fw-bold">Size</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Desktop"/>
                        <label class="form-check-label" for="Desktop">
                            ATX Desktop
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Full Tower"/>
                        <label class="form-check-label" for="Full Tower">
                            ATX Full Tower
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Mid Tower"/>
                        <label class="form-check-label" for="Mid Tower">
                            ATX Mid Tower
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="Mini Tower"/>
                        <label class="form-check-label" for="Mini Tower">
                            ATX Mini Tower
                        </label>
                    </div>
                    <Form.Label className='fw-bold mt-3'>Price limit</Form.Label>
                    <Form.Range />
                </div>

                
                <div class="col-3 ps-5">
                    <label class="form-check-label fw-bold" for="">
                        Socket
                    </label>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="AM4"/>
                                <label class="form-check-label" for="AM4">
                                    AM4
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="AM3"/>
                                <label class="form-check-label" for="AM3">
                                    AM3
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="AM2"/>
                                <label class="form-check-label" for="AM2">
                                    AM2
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="AM1"/>
                                <label class="form-check-label" for="AM1">
                                    AM1
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="LGA1140"/>
                                <label class="form-check-label" for="LGA1140">
                                    LGA1140
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="LGA1150"/>
                                <label class="form-check-label" for="LGA1150">
                                    LGA1150
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="LGA1151"/>
                                <label class="form-check-label" for="LGA1151">
                                    LGA1151
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="LGA1151"/>
                                <label class="form-check-label" for="LGA1151">
                                    LGA1160
                                </label>
                            </div>
                        </div>
                    </div>
                </div> 

                    <div class="col-3">
                        <label for="releaseDate" class="form-label fw-bold">Release date</label>
                        <select class="form-select" aria-label="releaseDate">
                            <option value="">Please choose an option</option>
                            <option value="1">past 24 hours</option>
                            <option value="2">past week</option>
                            <option value="3">past month</option>
                            <option value="4">past year</option>
                        </select>
                    </div>

                    <div class="col-3">
                        <label for="trainerExpertise" class="form-label fw-bold">Video Card</label>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX1080"/>
                                    <label class="form-check-label" for="GTX1080">
                                        GTX1080
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2050"/>
                                    <label class="form-check-label" for="GTX2050">
                                        GTX2050
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2060"/>
                                    <label class="form-check-label" for="GTX2060">
                                        GTX2060 
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2070"/>
                                    <label class="form-check-label" for="GTX2070">
                                        GTX2070
                                    </label>
                                </div>
                            </div>
            
                            <div class="col-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2070S"/>
                                    <label class="form-check-label" for="GTX2070S">
                                        GTX2070S
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2080"/>
                                    <label class="form-check-label" for="GTX2080">
                                        GTX2080
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2080S"/>
                                    <label class="form-check-label" for="GTX2080S">
                                        GTX2080S
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="GTX2090"/>
                                    <label class="form-check-label" for="GTX2090">
                                        GTX2090
                                    </label>
                                </div>
                            </div>

                            <div class="col-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="GTX3060"/>
                                <label class="form-check-label" for="GTX3060">
                                    GTX3060
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="GTX3070" />
                                <label class="form-check-label" for="GTX3070">
                                    GTX3070
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="GTX3080"/>
                                <label class="form-check-label" for="GTX3080">
                                    GTX3080
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="GTX3090"/>
                                <label class="form-check-label" for="GTX3090">
                                    GTX3090
                                </label>
                            </div>
                        </div>
                        </div>                
                    </div>
                </div>


                <div class="row mt-3" id="myItems">
                    <div class="col-sm-12 mb-3">
                        <div class="card mb-3">
                            <div class="row">
                            <div class="col-4">
                                {/* <img src="malepf.png" class="img-fluid rounded-start" alt="..."> */}
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                <h5 class="card-title"><a href="ExampleBuild"  class="text-dark">Entry level build</a></h5>
                                <p class="card-text">Brief description about the build</p>
                                <p class="card-trainer-gender fw-light">Price: $1500</p>
                                <p class="card-trainer-location fw-light">Size: ATX Mid Tower</p>
                                <p class="card-trainer-exp fw-light">AMD Ryzen 3600</p>
                                <p class="card-trainer-exp fw-light">GTX2070</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="row">
                            <div class="col-4">
                                {/* <img src="malepf.png" class="img-fluid rounded-start" class="rounded-start" alt="..."/> */}
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                <h5 class="card-title"><a href="ExampleBuild"  class="text-dark">Enthusiast Build</a></h5>
                                <p class="card-text">Brief description about the build</p>
                                <p class="card-trainer-gender fw-light">Price: $2300</p>
                                <p class="card-trainer-location fw-light">Size: ATX Full Tower</p>
                                <p class="card-trainer-exp fw-light">AMD Ryzen 5030</p>
                                <p class="card-trainer-exp fw-light">GTX3070</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="row">
                            <div class="col-4">
                                {/* <img src="malepf.png" class="img-fluid rounded-start" alt="..."> */}
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                <h5 class="card-title"><a href="trainerExample.html"  class="text-dark">Everything topped off Build</a></h5>
                                <p class="card-text">Brief description about the build</p>
                                <p class="card-trainer-gender fw-light">Price: $5000</p>
                                <p class="card-trainer-location fw-light">Size: ATX Desktop</p>
                                <p class="card-trainer-exp fw-light">Intel 11900K</p>
                                <p class="card-trainer-exp fw-light">GTX3090</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builds