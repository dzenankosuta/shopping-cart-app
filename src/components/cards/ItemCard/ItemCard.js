import React, { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

const ItemCard = ({ id, image, name, price, currency, onClick }) => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="w-72 h-96 border-solid border-2 border-orange-200 relative rounded-lg">
      <img
        src={image}
        alt="item_image"
        className="w-full h-full absolute top-0 z-10 object-cover rounded-lg"
      />
      {!cartItems.find((item) => item.id === id) ? (
        <div>
          <p className="absolute bottom-10 left-4 right-4 z-20 px-2 cursor-default text-white bg-slate-800/[.5] rounded-lg">
            {name}
          </p>
          <p className="absolute bottom-1 left-4 z-20 px-2 cursor-default text-white bg-slate-800/[.5] rounded-lg">
            {price} {currency}
          </p>
          <button
            className="absolute bottom-1 right-4 z-20 cursor-pointer text-white uppercase bg-slate-800/[.7] p-1 rounded-lg"
            onClick={() => {
              onClick();
            }}
          >
            ADD TO CART
          </button>
        </div>
      ) : (
        <div>
          <button className="absolute bottom-1 left-4 right-4 z-20 cursor-default text-white uppercase bg-slate-800/[.7] p-1 rounded-lg">
            you already have this product in your cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
