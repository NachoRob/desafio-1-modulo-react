import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const found = cart.find((item) => item.id === pizza.id);

    if (found) {
      const newCart = cart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item,
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const aumentarCantidad = (id) => {
    const nuevoCarrito = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    setCart(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = cart
      .map((item) => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);

    setCart(nuevoCarrito);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, total, aumentarCantidad, disminuirCantidad }}
    >
      {children}
    </CartContext.Provider>
  );
};
