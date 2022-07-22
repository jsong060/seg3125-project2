import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, Pagination } from 'react-bootstrap';


function VideoCardParts(){

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
                                <Card.Title><a href='ExampleVideoCard'>Videocard 1</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 1')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 2</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 2')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 3</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 3')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 4</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 4')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='mt-5 mx-4'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 5</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 5')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 6</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 6')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 7</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 7')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><a href='ExampleVideoCard'>Videocard 8</a></Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                    description
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                <Button onClick={() =>  addToBuild('videoCard', 'VideoCard 8')}>add to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div style={{ display: "flex", justifyContent: "center" }} className='mt-4'><Pagination>{items}</Pagination></div>
                
        </div>
    )
}

export default VideoCardParts