import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, Pagination} from 'react-bootstrap';

function CpuCoolerParts(){

    function addToBuild(type, value) {
        localStorage.setItem(type, value);
        navigate('/StartBuild')
    }

    const navigate = useNavigate(); 

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
    }

    return (
        <div>
            <Row className='mt-5 mx-4'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 1</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 1')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 2</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 2')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 3</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 3')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 4</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 4')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5 mx-4'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 5</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 5')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 6</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 6')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 7</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 7')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><a className='linkcss' onClick={()  => {navigate('/ExampleCooler')}}>CpuCooler 8</a></Card.Title>
                            <Card.Img variant="top" src={require('./examples/cooler.jpg')}  className='photo' />
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button onClick={() =>  addToBuild('cpuCooler', 'CpuCooler 8')}>add to build</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div style={{ display: "flex", justifyContent: "center" }} className='mt-4'><Pagination>{items}</Pagination></div>
        </div>
    )
}

export default CpuCoolerParts