import Header from "../components/Header.jsx";
import CardPizza from "./CardPizza.jsx";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const [pizzaCard, setPizzaCard] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);
  const consultarApi = async () => {
    try {
      const url = "https://api-backend-pizza-mama-mia.onrender.com/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setPizzaCard(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      <div className="hero-pizza">
        <Header />
      </div>
      <div className="container my-5">
        <div className="row g-4">
          {pizzaCard.map((pizza) => (
            <CardPizza
              key={pizza.id}
              {...pizza}
              onAdd={() => addToCart(pizza)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
