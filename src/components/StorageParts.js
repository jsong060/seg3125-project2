import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, Pagination} from 'react-bootstrap';

function StorageParts(){

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
                                <Card.Title><a href='ExampleStorage'>Storage 1</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 1')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 2</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 2')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 3</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 3')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 4</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 4')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='mt-5 mx-4'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 5</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 5')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 6</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 6')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 7</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 7')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleStorage'>Storage 8</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() =>  addToBuild('storage', 'Storage 8')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div style={{ display: "flex", justifyContent: "center" }} className='mt-4'><Pagination>{items}</Pagination></div>
        </div>
    )
}

export default StorageParts