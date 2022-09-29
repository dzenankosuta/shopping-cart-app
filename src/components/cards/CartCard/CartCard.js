import React, { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

const CartCard = ({ id, name, quantity, price }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(ShoppingCartContext);
  return (
    <div className="m-auto my-1.5 w-3/6 h-14 text-slate-900 text-lg flex justify-between items-center border-2 border-dashed border-orange-300 rounded-xl relative">
      <p className="px-4">{name}</p>
      <p className="px-4">
        <span className="absolute right-40">
          <button
            className="h-8 w-8 cursor-pointer bg-orange-200 px-1 rounded-lg"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="h-8 w-8 cursor-pointer bg-orange-200 px-1 rounded-lg"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </span>
        * {price} = {quantity * price}
      </p>
      <button
        className="h-8 cursor-pointer bg-orange-300 px-1 rounded-lg absolute -right-20"
        onClick={() => removeFromCart(id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default CartCard;
