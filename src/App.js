import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ItemsPage from "./components/pages/ItemsPage/ItemsPage";
import CartPage from "./components/pages/CartPage/CartPage";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ShoppingCartContext } from "./context/ShoppingCartContext";
import products from "./common/items.json";

function App() {
  const { setProducts } = useContext(ShoppingCartContext);
  useEffect(() => {
    setProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <main
          className="mt-6 mb-20 relative z-10"
          style={{ minHeight: "calc(59vh)" }}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/items" element={<ItemsPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
