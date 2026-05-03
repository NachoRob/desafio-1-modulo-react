import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const url = "https://api-backend-pizza-mama-mia.onrender.com/api/pizzas"

  const getPizzas = () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(()=>{
    getPizzas();
  },[]);

  return <PizzaContext.Provider value={{}}>{children}</PizzaContext.Provider>;
};
