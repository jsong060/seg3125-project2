import React , { useEffect, useState , useNavigate}from 'react'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { Container , Nav, Navbar, Button, NavDropdown, Form} from 'react-bootstrap';

function NavMenu() {

  let lang = localStorage.getItem('lang')
  
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  const changeLang = () => {
    if(lang =="English" || ''){
      localStorage.setItem('lang', 'French');
    }else{
      localStorage.setItem('lang', 'English');
    }
    window.location.reload(false);
  }
  
  if (lang === "French") {
    return (
      <div>
      <Navbar collapseOnSelect className="justify-content-center" bg="black" variant="dark">
        <Container fluid className="mx-3">
          <Navbar.Brand href="/">PC Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/StartBuild">Construire un PC</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Builds">Constructions terminée</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Parcourir les pièces" href="/Parts" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/CpuParts">CPU</NavDropdown.Item>
                  <NavDropdown.Item href="/CpuCoolerParts">Refroidisseurs de processeur</NavDropdown.Item>
                  <NavDropdown.Item href="/MotherboardParts">Cartes mères</NavDropdown.Item>
                  <NavDropdown.Item href="/MemoryParts">Mémoire</NavDropdown.Item>
                  <NavDropdown.Item href="/StorageParts">Stockage</NavDropdown.Item>
                  <NavDropdown.Item href="/VideoCardParts">Carte vidéo</NavDropdown.Item>
                  <NavDropdown.Item href="/PowerSupplyParts">Alimentations</NavDropdown.Item>
                  <NavDropdown.Item href="/CompCaseParts">Cas</NavDropdown.Item>
                  <NavDropdown.Item href="/MonitorParts">Moniteurs</NavDropdown.Item>
                  <NavDropdown.Item href="/MouseParts">Souris</NavDropdown.Item>
                  <NavDropdown.Item href="/KeyboardParts">Clavier</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                  <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Recherche"
                        />
                        <Button variant="outline-success">Recherche</Button>
                      </Form>
                </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/Community">Communauté</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/ContactUs">Nous rejoindre</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AboutUs">Qui sommes-nous</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Login">Se connecter/S'inscrire</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><p onClick={changeLang}>English/Francais</p></Nav.Link>
              </Nav.Item>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
  }
  
  return (
    <div>
      <Navbar collapseOnSelect className="justify-content-center" bg="black" variant="dark">
        <Container fluid className="mx-3">
          <Navbar.Brand href="/">PC Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/StartBuild">Start New Build</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Builds">Browse finished Builds</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Browse Components" href="/Parts" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/CpuParts">CPU</NavDropdown.Item>
                  <NavDropdown.Item href="/CpuCoolerParts">CPU Cooler</NavDropdown.Item>
                  <NavDropdown.Item href="/MotherboardParts">Motherboard</NavDropdown.Item>
                  <NavDropdown.Item href="/MemoryParts">Memory</NavDropdown.Item>
                  <NavDropdown.Item href="/StorageParts">Storage</NavDropdown.Item>
                  <NavDropdown.Item href="/VideoCardParts">Video Card</NavDropdown.Item>
                  <NavDropdown.Item href="/PowerSupplyParts">Power Supply</NavDropdown.Item>
                  <NavDropdown.Item href="/CompCaseParts">Case</NavDropdown.Item>
                  <NavDropdown.Item href="/MonitorParts">Monitor</NavDropdown.Item>
                  <NavDropdown.Item href="/MouseParts">Mouse</NavDropdown.Item>
                  <NavDropdown.Item href="/KeyboardParts">Keyboard</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                  <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/Community">Community</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AboutUs">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Login">Sign in/up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><p onClick={changeLang}>English/Francais</p></Nav.Link>
              </Nav.Item>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavMenu