import React from "react";
import CartCard from "../../cards/CartCard/CartCard";

const CartPage = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-center text-slate-800 font-bold underline">
        Your Cart is Empty :(
      </h1> */}
      <CartCard />
      <p className="m-auto w-3/6 text-end text-xl font-bold relative right-9">
        Total Amount = total
      </p>
    </>
  );
};

export default CartPage;
