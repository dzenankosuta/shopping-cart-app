import { createContext, useState } from "react";
import products from "../common/items.json";
import { toast } from "react-hot-toast";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, { ...product, qtyInCart: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, qtyInCart: item.qtyInCart + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id && item.qtyInCart === 1)) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, qtyInCart: item.qtyInCart - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, qtyInCart: item.qtyInCart + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
