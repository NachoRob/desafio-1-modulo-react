import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./context/PizzaContext"; // Ajusta la ruta si es necesario
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  </StrictMode>,
);
