import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, } from 'react-bootstrap';

function Community() {
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
                    <Button variant="primary" onClick={() => {
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
        </Container>
  )
}

export default Community