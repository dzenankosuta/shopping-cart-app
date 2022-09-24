import React from "react";
import CartCard from "../../cards/CartCard/CartCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useContext(ShoppingCartContext);
  let items = cart.items;
  let total = cart.total;
  return (
    <>
      {/* <h1 className="text-3xl text-center text-slate-800 font-bold underline">
        Your Cart is Empty :(
      </h1> */}
      {items.length === 0 ? (
        <div className="m-auto my-24 w-4/12 flex flex-col items-center gap-8">
          <img
            src={require("../../../images/cart_empty.png")}
            alt="Logo"
            className="w-24 h-18"
          />
          <h1 className="text-lg text-slate-900 font-semibold bg-slate-200 p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-md text-slate-900 text-center font-light w-4/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-slate-800 text-center bg-orange-400 p-2 rounded-xl">
            <Link to="../items">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <>
          <CartCard />
          <p className="m-auto w-3/6 text-end text-xl font-bold relative right-9">
            Total Amount = {total}
          </p>
        </>
      )}
    </>
  );
};

export default CartPage;
