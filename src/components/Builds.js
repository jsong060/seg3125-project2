import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Builds() {
    const navigate = useNavigate();
    
    return (
        <Container fluid>
            <Row>
                <Link to="/">Home</Link>
            </Row>
            <Row className='mt-2 justify-content-md-center border '>
                <Col>
                    <Button onClick={() => {
                        navigate("/StartBuild")
                    }}  > Start Build</Button>
                </Col>
                <Col>
                <Button onClick={() => {
                        navigate("/parts")
                    }}  > Browse Parts</Button>
                </Col>
                <Col>
                <Button onClick={() => {
                        navigate("/builds")
                    }}  > Browse Builds</Button>
                </Col>
                <Col>
                <Button onClick={() => {
                        navigate("/Community")
                    }}  > Community</Button>
                </Col>
                <Col>
                <Button onClick={() => {
                        navigate("/ContactUs")
                    }}  > Contact Us</Button>
                </Col>
                <Col>
                <Button onClick={() => {
                        navigate("/Help")
                    }}  > Help </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Builds