import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCookie from "./useCookie"



function AppNavbar() {
  const [cookie, updateCookie] = useCookie("userId", null )
  const href = `/my-inventory/${cookie}`

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Warehouse Inventory Register</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/inventory">Inventory</Nav.Link>
        {cookie > 0 && <Nav.Link href={href}> My Inventory</Nav.Link>}
      </Nav>
    </Container>
  </Navbar>
  );
}

export default AppNavbar;