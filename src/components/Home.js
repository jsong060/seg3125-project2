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
                                <Card.Title>Build title</Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                Some descriptive text about the computer build 
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
                                <Card.Title>Build title</Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                Some descriptive text about the computer build 
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
                                <Card.Title>Build title</Card.Title>
                                <Card.Img variant="top" src="some Image" />
                                <Card.Text>
                                Some descriptive text about the computer build 
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
    )
}

export default Home