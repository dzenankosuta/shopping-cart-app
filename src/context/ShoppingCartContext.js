import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

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
    setProducts((prevProducts) => {
      return prevProducts.map((artikal) => {
        if (artikal.id === product.id) {
          return { ...artikal, quantity: artikal.quantity - 1 };
        } else {
          return artikal;
        }
      });
    });
    console.log(products);
    toast.success("Successfully added to cart!");
  };

  const removeFromCart = (id) => {
    toast.success("The product was deleted from the cart!");
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id && item.qtyInCart === 1)) {
        toast.success("The product was deleted from the cart!");
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
    setProducts((prevProducts) => {
      return prevProducts.map((artikal) => {
        if (artikal.id === id) {
          return { ...artikal, quantity: artikal.quantity + 1 };
        } else {
          return artikal;
        }
      });
    });
    console.log(products);
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
    setProducts((prevProducts) => {
      return prevProducts.map((artikal) => {
        if (artikal.id === id) {
          return { ...artikal, quantity: artikal.quantity - 1 };
        } else {
          return artikal;
        }
      });
    });
    console.log(products);
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    products,
    setProducts,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
