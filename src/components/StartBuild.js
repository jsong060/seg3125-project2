import React from 'react';
// import { View } from "react-native";
import { Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, ListGroup} from 'react-bootstrap';


function StartBuild() {
    const navigate = useNavigate(); 
    return (
        <>
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
                  <Row className='mt-2 justify-content-md-center '>
                      <Col>
                          <Button variant="primary" onClick={() => {
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
                  
                  <ListGroup className='mt-5 mx-2'>
                    <ListGroup.Item> CPU <Button className='float-right'  variant="secondary"onClick={() => {
                              navigate("/Parts")
                          }} > Add</Button> </ListGroup.Item>
                    <ListGroup.Item> CPU Cooler <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Motherboard <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Memory <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Storage <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Video Card <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Power Supply <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Case <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Monitor <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Mouse <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Keyboard <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                    <ListGroup.Item> Other accessories <Button className='float-right' variant="secondary" onClick={() => {
                              navigate("/Parts")
                          }}> Add</Button> </ListGroup.Item>
                </ListGroup>
          </Container>
        </>
  )
}

export default StartBuild