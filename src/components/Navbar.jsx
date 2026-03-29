import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navigationbar = () => {
    const total = 25000;
    const token = false;
    return(
        <Navbar variant="dark" expand="lg" className="mi-navbar">
        <Container>
            <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">🍕 Home</Nav.Link>
                {token ? (
                    <>
                        <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                        <Nav.Link href="#logout">🔒 Logout</Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link href="#login">🔐 Login</Nav.Link>
                        <Nav.Link href="#register">🔐 Register</Nav.Link>
                    </>
                )}
            </Nav>
            
            {/* Usando la lógica de expresiones de JavaScript de la guía */}
            <Navbar.Text className="text-info">
                🛒 Total: ${total.toLocaleString()}
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
};

export default Navigationbar;