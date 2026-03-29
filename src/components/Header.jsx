import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar variant="dark" className="bg-transparent w-100 flex-column p-0">
        <Navbar.Brand href="#home">
          ¡Pizzería Mamma Mia!
        </Navbar.Brand>
        <Navbar.Text>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </Navbar.Text>
        <hr className="w-75 border-light my-2" />
    </Navbar>
  );
}

export default Header;