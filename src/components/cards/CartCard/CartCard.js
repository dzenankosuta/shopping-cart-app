import React from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../store";

const CartCard = ({ id, name, quantity, price, currency, percent }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  return (
    <div className="m-auto my-1.5 w-3/6 h-14 text-slate-900 text-lg flex justify-between items-center border-2 border-dashed border-orange-300 rounded-xl relative">
      <p className="px-4">{name}</p>
      <p className="px-4">
        <span className="absolute right-48">
          <button
            className="h-8 w-8 cursor-pointer bg-orange-200 px-1 rounded-lg"
            onClick={() => dispatch(actions.decreaseQuantity(id))}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            // disabled={products.find((item) => item.id === id).quantity === 0}
            className="h-8 w-8 cursor-pointer bg-orange-200 px-1 rounded-lg"
            onClick={() => {
              if (products.find((item) => item.id === id).quantity === 0) {
                return toast.error("This product is no longer in stock.");
              } else {
                return dispatch(actions.increaseQuantity(id));
              }
            }}
          >
            +
          </button>
        </span>
        * {Math.floor((price * (100 - percent)) / 100)} {currency} ={" "}
        {quantity * Math.floor((price * (100 - percent)) / 100)} {currency}
      </p>
      <button
        className="h-8 cursor-pointer bg-orange-300 px-1 rounded-lg absolute -right-20"
        onClick={() => dispatch(actions.removeFromCart(id))}
      >
        DELETE
      </button>
    </div>
  );
};

export default CartCard;
