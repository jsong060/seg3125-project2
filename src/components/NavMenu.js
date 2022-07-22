import React , { useEffect, useState}from 'react'
import { BrowserRouter as Router, Route, Link , useNavigate} from 'react-router-dom';
import { Container , Nav, Navbar, Button, NavDropdown, Form} from 'react-bootstrap';

function NavMenu() {

  let lang = localStorage.getItem('lang')
  const navigate = useNavigate();
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
                <Nav.Link onClick={() => {navigate('/StartBuild')}}>Construire un PC</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/Builds')}}>Constructions terminée</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Parcourir les pièces" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavDropdown.Item onClick={() => {navigate('/CpuParts')}}>CPU</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/CpuCoolerParts')}}>Refroidisseurs de processeur</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MotherboardParts')}}>Cartes mères</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MemoryParts')}}>Mémoire</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/StorageParts')}}>Stockage</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/VideoCardParts')}}>Carte vidéo</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/PowerSupplyParts')}}>Alimentations</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/CompCaseParts')}}>Cas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MonitorParts')}}>Moniteurs</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MouseParts')}}>Souris</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/KeyboardParts')}}>Clavier</NavDropdown.Item>
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
                <Nav.Link onClick={() => {navigate('/Community')}}>Communauté</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/ContactUs')}}>Nous rejoindre</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/AboutUs')}}>Qui sommes-nous</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/Login')}}>Se connecter/S'inscrire</Nav.Link>
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
                <Nav.Link onClick={() => {navigate('/StartBuild')}}>Start New Build</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/Builds')}}>Browse finished Builds</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Browse Components" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavDropdown.Item onClick={() => {navigate('/CpuParts')}}> CPU</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/CpuCoolerParts')}} >CPU Cooler</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MotherboardParts')}}>Motherboard</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MemoryParts')}}>Memory</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/StorageParts')}}>Storage</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/VideoCardParts')}}>Video Card</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/PowerSupplyParts')}}>Power Supply</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/CompCaseParts')}}>Case</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MonitorParts')}}>Monitor</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/MouseParts')}}>Mouse</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {navigate('/KeyboardParts')}}>Keyboard</NavDropdown.Item>
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
                <Nav.Link onClick={() => {navigate('/Community')}}>Community</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/ContactUs')}}>Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/AboutUs')}}>About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {navigate('/Login')}}>Sign in/up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={changeLang}>English/Francais</Nav.Link>
              </Nav.Item>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavMenu