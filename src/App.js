import React from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header class="w-full h-24 bg-slate-500 flex justify-end items-center gap-10 sticky top-0 shadow-md shadow-slate-600">
          <NavLink>
            <img
              src={require("./images/logo.png")}
              alt="Logo"
              class="w-32 h-24 absolute left-3 top-0"
            />
          </NavLink>
          <NavLink class="text-slate-200 text-3xl relative top-0 right-10">
            ITEMS
          </NavLink>
          <NavLink class="text-slate-200 text-3xl relative top-0 right-10">
            CART
          </NavLink>
        </header>
      </div>
    </>
  );
}

export default App;
