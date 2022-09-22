import React from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  let activeStyle = {
    backgroundColor: "rgb(255 237 213)",
  };
  let classicStyle = {
    backgroundColor: "rgb(203 213 225)",
  };
  return (
    <>
      <div className="App">
        <header className="w-full h-24 bg-slate-500 flex justify-end items-center gap-10 sticky top-0 shadow-md shadow-slate-600">
          <NavLink to="/">
            <img
              src={require("./images/logo.png")}
              alt="Logo"
              className="w-32 h-24 absolute left-3 top-0"
            />
          </NavLink>
          <NavLink
            to="items"
            className="text-slate-600 text-3xl relative top-0 right-10 p-1 rounded-lg"
            style={({ isActive }) => (isActive ? activeStyle : classicStyle)}
          >
            ITEMS
          </NavLink>
          <NavLink
            to="cart"
            className="text-slate-600 text-3xl relative top-0 right-10 p-1 rounded-lg"
            style={({ isActive }) => (isActive ? activeStyle : classicStyle)}
          >
            CART
          </NavLink>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-bold underline">Pocetna stranica</h1>
            }
          ></Route>
          <Route
            path="/items"
            element={<h1 className="text-3xl font-bold underline">Artikli</h1>}
          ></Route>
          <Route
            path="/cart"
            element={<h1 className="text-3xl font-bold underline">Korpa</h1>}
          ></Route>
        </Routes>
        <footer className="w-full h-14 bg-slate-500 text-xl font-bold cursor-pointer flex justify-center items-center gap-10 fixed bottom-0 ">
          <h4>
            2022 <em>Copyright</em> Dženan Košuta
          </h4>
        </footer>
      </div>
    </>
  );
}

export default App;
