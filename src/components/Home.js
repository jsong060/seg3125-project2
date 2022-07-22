import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function Home() {
    const navigate = useNavigate();
    
    var divStyle = {
        background: "#eee",
        padding: "30px",
        margin: "20px",
        
        justifyContent: "center",
        alignContent: "center"
    };

    return (
        <>
            <Container fluid>
                <div>
                    
                </div>
                <Row className='mt-5 mx-4'>
                    <Col style={divStyle}>
                        <p style={{fontSize: 30}}> Builds By Community</p>
                        <Button onClick={() => {
                            navigate("/Builds")
                        }}>See more</Button>
                    </Col>  
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title> White Knight</Card.Title>
                                <Card.Img variant="top" src={require('./examples/examplebuild.jpg')}  className='photo' />
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() => {
                                    navigate("/ExampleBuild")
                                }}>Go to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Refrigerator V4</Card.Title>
                                <Card.Img variant="top" src={require('./examples/pcbuild2.png')}   className='photo'/>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() => {
                                    navigate("/Builds")
                                }}>Go to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Cuteness overflow</Card.Title>
                                <Card.Img variant="top" src={require('./examples/pcbuild3.png')}  className='photo'/>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() => {
                                    navigate("/Builds")
                                }}>Go to build</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
           
    )
}

export default Home