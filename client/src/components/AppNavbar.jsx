import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));
const loggedIn = [initialStateSaved][0][0].loggedIn
const user = [initialStateSaved][0][0].user
let href = `my-inventory/${user.id}`

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Warehouse Inventory Register</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="register">Register</Nav.Link>
        <Nav.Link href="inventory">Inventory</Nav.Link>
        <Nav.Link href={href}>My Inventory</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default AppNavbar;