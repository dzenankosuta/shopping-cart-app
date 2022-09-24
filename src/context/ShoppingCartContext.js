import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  return (
    <ShoppingCartContext.Provider value={{ cart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
