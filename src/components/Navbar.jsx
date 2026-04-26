import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navigationbar = () => {
    const total = 25000;
    const token = false;
    return(
        <Navbar variant="dark" expand="lg" className="mi-navbar">
        <Container>
            <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                {token ? (
                    <>
                        <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                        <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                    </>
                )}
            </Nav>
            
            {/* Usando la lógica de expresiones de JavaScript de la guía */}
            <Nav.Link as={Link} to="/cart" className="text-info">
                🛒 Total: ${total.toLocaleString()}
            </Nav.Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
};

export default Navigationbar;