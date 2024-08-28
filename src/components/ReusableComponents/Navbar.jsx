import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/img/tcf-logo.jpg'
import BasicModal from './model';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className='navbar-logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
            <Nav className="me-auto gap-5">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Cource</Nav.Link>
            <Nav.Link href="#deets">Internship</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               Contact
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="#memes">
                <BasicModal />
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;