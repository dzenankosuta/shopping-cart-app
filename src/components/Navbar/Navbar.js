import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    backgroundColor: "rgb(255 237 213)",
  };
  let classicStyle = {
    backgroundColor: "rgb(203 213 225)",
  };
  return (
    <header className="w-full h-24 bg-slate-500 flex justify-end items-center gap-10 sticky top-0 z-50 shadow-md shadow-slate-600">
      <NavLink
        to="/"
        className="absolute left-3 text-slate-600 text-3xl p-1 rounded-lg"
        style={classicStyle}
      >
        HOMEPAGE
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
      >
        <img
          src={require("../../images/logo.png")}
          alt="Logo"
          className="w-16 h-12"
        />
      </NavLink>
    </header>
  );
};

export default Navbar;
