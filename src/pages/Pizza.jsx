import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams(); // [cite: 17]

  useEffect(() => {
    // [cite: 9, 11, 18]
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, [id]);

  if (!pizza) return <div>Cargando...</div>;

  return (
    <div className="d-flex justify-content-center p-5">
      {/* Aquí puedes reutilizar tu componente CardPizza o maquetar la vista de detalle */}
      <div className="card" style={{ width: "25rem" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">Pizza {pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p>Precio: ${pizza.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
