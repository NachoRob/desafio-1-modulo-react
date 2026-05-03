import Header from "../components/Header.jsx";
import CardPizza from "./CardPizza.jsx";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const [pizzaCard, setPizzaCard] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
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
      <div className="pizza-cards-container">
        {pizzaCard.map((data) => (
          <CardPizza key={data.id} {...pizza} onAdd={() => addToCart(data)} />
        ))}
      </div>
    </>
  );
};

export default Home;
