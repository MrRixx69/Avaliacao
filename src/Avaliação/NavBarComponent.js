import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="/1" className="FontNav">Henrique S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home" className="FontNav">Home</Nav.Link>
            <Nav.Link href="/Contato" className="FontNav">Contato</Nav.Link>
            <Nav.Link href="/Sobre" className="FontNav">Sobre</Nav.Link>
            
          </Nav>

          <Nav>
            
            <Nav.Link eventKey={2} href="/login" className="FontNav">
              Login
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;