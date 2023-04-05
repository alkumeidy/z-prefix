import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#login">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="inventory">Inventory</Nav.Link>
        <Nav.Link href="accounts">Account Management</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default AppNavbar;