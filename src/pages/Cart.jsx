import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { pizzas } from "../pizzas";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cart, aumentarCantidad, disminuirCantidad, total } =
    useContext(CartContext);

  return (
    <div className="container mt-5">
      <h4>Detalles del pedido:</h4>
      <div className="p-3 bg-white rounded shadow-sm">
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-between py-2 border-bottom"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "50px", marginRight: "10px" }}
              />
              <h6 className="mb-0 text-capitalize">{item.name}</h6>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-3 fw-bold">
                ${item.price.toLocaleString()}
              </span>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => disminuirCantidad(item.id)}
              >
                {" "}
                -{" "}
              </Button>
              <b className="mx-3">{item.count}</b>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => aumentarCantidad(item.id)}
              >
                {" "}
                +{" "}
              </Button>
            </div>
          </div>
        ))}

        <div className="mt-4">
          <h2 className="fw-bold">Total: ${total.toLocaleString()}</h2>
          <Button variant="dark" className="mt-2">
            Pagar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
