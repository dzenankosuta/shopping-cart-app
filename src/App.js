import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ItemsPage from "./components/pages/ItemsPage/ItemsPage";
import CartPage from "./components/pages/CartPage/CartPage";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartContextProvider>
        <div className="App">
          <Toaster position="top-right" reverseOrder={false} />
          <Navbar />
          <main
            className="mt-6 mb-20 relative z-10"
            style={{ minHeight: "calc(65vh)" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/items" element={<ItemsPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </ShoppingCartContextProvider>
    </>
  );
}

export default App;
