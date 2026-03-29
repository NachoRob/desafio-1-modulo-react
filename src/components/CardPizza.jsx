import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="mx-auto my-3">
      <Card.Img variant="top" src={img} />
      
      <Card.Body>
        <Card.Title className="fw-bold fs-4">Pizza {name}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>
          <p className="text-muted mb-1">Ingredientes:</p>
          <p className="fs-6">
            🍕 {ingredients.join(", ")}
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4 className="fw-bold">Precio: ${price.toLocaleString()}</h4>
          <div className="d-flex justify-content-around mt-3">
            {/* Botones que por ahora no hacen nada */}
            <Button variant="outline-dark" size="sm">
              Ver Más 👀
            </Button>
            <Button variant="dark" size="sm">
              Añadir 🛒
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardPizza;