import React from "react";
import CartCard from "../../components/cards/CartCard/CartCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
  // const { cartItems } = useContext(ShoppingCartContext);
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      {/* <h1 className="text-3xl text-center text-slate-800 font-bold underline">
        Your Cart is Empty :(
      </h1> */}
      {cartItems.length === 0 ? (
        <div className="m-auto w-4/12 flex flex-col items-center gap-8">
          <img
            src={require("../../assets/cart_empty.png")}
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
            <Link to="../items" onClick={() => window.scrollTo(0, 0)}>
              START SHOPPING
            </Link>
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              quantity={item.qtyInCart}
              price={item.price}
              id={item.id}
              currency={item.currency}
              percent={item.percent}
            />
          ))}
          <p className="m-auto w-3/6 text-end text-xl font-bold relative right-2">
            Total Amount =
            {cartItems
              .map(
                (item) =>
                  item.qtyInCart *
                  Math.floor((item.price * (100 - item.percent)) / 100)
              )
              .reduce((prevQty, currQty) => (prevQty += currQty))}
            {cartItems[0].currency}
          </p>
        </>
      )}
    </>
  );
};

export default CartPage;
