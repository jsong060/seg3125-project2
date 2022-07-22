import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Badge , Row, Col, Tab, ListGroup, } from 'react-bootstrap';

function Community() {
    const navigate = useNavigate();
  return (
    <div className='mt-4 mx-4'>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={2}>
          <ListGroup>
            <ListGroup.Item action href="/////#link1" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Video Tutorials</div>
            </div>
            <Badge bg="primary" pill>
              5
            </Badge>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Product Discussion</div>
            </div>
            <Badge bg="primary" pill>
              18
            </Badge>
            </ListGroup.Item>
            <ListGroup.Item action href="#link3" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Tech News</div>
            </div>
            <Badge bg="primary" pill>
              54
            </Badge>
            </ListGroup.Item>
            <ListGroup.Item action href="#link4" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Questions</div>
            </div>
            <Badge bg="primary" pill>
              200
            </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <ListGroup>
                <ListGroup.Item><a href='https://www.youtube.com/watch?v=hK51upU5bkU'>Beginner's guide to PC building</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Overclocking Guide (CPU and GPU)</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Custom Watercooling Guide</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Fine tuning CPU and RAM for ultimate performance</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>How to make your setup look better with RGB lights</a></ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            <ListGroup>
                <ListGroup.Item><a href='#'>RTX 3090, is it worth it?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Logitech mice VS Razer mice</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Corsair LPX5000 DDR4 32GB, what do you think?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Holy Panda switches, are they really the best on the market right now?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>AIO or traditional air fan?</a></ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
            <ListGroup>
                <ListGroup.Item><a href='#'>NIVIDIA next generation GPU lineup </a></ListGroup.Item>
                <ListGroup.Item><a href='#'>VR technology, the future of the industry?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>AMD leaks specs for their new generation of CPUs</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>INTEL aims for a massive Q4 release</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>Is Netflix on the verge of bankruptcy?</a></ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
            <ListGroup>
                <ListGroup.Item><a href='#'>Can someone help me with my setup? It won't start</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>I'm getting this error, what does it mean?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>I can't decide between RTX 2080 and 2090</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>How do you set up your fan curve?</a></ListGroup.Item>
                <ListGroup.Item><a href='#'>What settings to you use to stream?</a></ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>


    
    </div>
  )
}

export default Community