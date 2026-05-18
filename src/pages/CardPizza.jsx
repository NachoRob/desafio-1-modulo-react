import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    // Ahora usamos addToCart, que coincide con tu Contexto
    addToCart({ id, name, price, ingredients, img });
  };
  return (
    <Card className="h-100 w-100">
      <Card.Img variant="top" src={img} />

      <Card.Body>
        <Card.Title className="fw-bold fs-4">Pizza {name}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>
          <p className="text-muted mb-1">Ingredientes:</p>
          <ul className="list-unstyled">
            {ingredients.map((ingrediente) => (
              <li key={ingrediente}>🍕 {ingrediente}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4 className="fw-bold">Precio: ${price.toLocaleString()}</h4>
          <div className="d-flex justify-content-around mt-3">
            {/* Botones que por ahora no hacen nada */}
            <Link to={`/pizza/${id}`}>
              <Button variant="outline-dark" size="sm">
                Ver Más 👀
              </Button>
            </Link>
            <Button variant="dark" size="sm" onClick={handleAdd}>
              Añadir 🛒
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardPizza;
