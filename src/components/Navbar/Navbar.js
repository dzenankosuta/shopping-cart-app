import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems);

  let visibility = cartItems.length === 0 ? false : true;

  let activeStyle = {
    backgroundColor: "rgb(255 237 213)",
  };
  let classicStyle = {
    backgroundColor: "rgb(203 213 225)",
  };
  return (
    <header
      style={{ height: "15vh" }}
      className="w-full bg-slate-500 flex justify-end items-center gap-10 sticky top-0 z-50 shadow-md shadow-slate-600"
    >
      <NavLink
        to="/"
        className="absolute left-3 text-slate-600 text-3xl p-1 rounded-lg"
        style={classicStyle}
        onClick={() => window.scrollTo(0, 0)}
      >
        HOMEPAGE
      </NavLink>
      <NavLink
        to="items"
        className="text-slate-600 text-3xl relative top-0 right-10 p-1 rounded-lg"
        style={({ isActive }) => (isActive ? activeStyle : classicStyle)}
        onClick={() => window.scrollTo(0, 0)}
      >
        ITEMS
      </NavLink>
      <NavLink
        to="cart"
        className="text-slate-600 text-3xl relative top-0 right-10 p-1 rounded-lg"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={require("../../assets/logo.png")}
          alt="Logo"
          className="w-16 h-12"
        />
        {visibility && (
          <div className="w-5 h-5 absolute top-0 right-0 bg-orange-400 rounded-full  flex justify-center items-center">
            <p className="text-base">{cartItems.length}</p>
          </div>
        )}
      </NavLink>
    </header>
  );
};

export default Navbar;
