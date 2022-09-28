import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {};

  const values = { cartItems };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
