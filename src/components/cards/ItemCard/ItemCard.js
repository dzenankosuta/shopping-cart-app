import React, { useContext } from "react";
import toast from "react-hot-toast";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

const ItemCard = ({
  id,
  image,
  name,
  price,
  currency,
  quantity,
  buyProduct,
  discount,
  percent,
}) => {
  const { products, cartItems } = useContext(ShoppingCartContext);
  const classPrice = discount
    ? "absolute bottom-1 left-1 z-20 px-2 cursor-default text-slate-800 bg-orange-400/[.6] rounded-lg"
    : "absolute bottom-1 left-1 z-20 px-2 cursor-default text-white bg-slate-800/[.5] rounded-lg";
  return (
    <div className="w-72 h-96 border-solid border-2 border-orange-200 relative rounded-lg">
      <img
        src={image}
        alt="item_image"
        className="w-full h-full absolute top-0 z-10 object-cover rounded-lg"
      />
      {discount && (
        <div className="w-16 h-8 absolute top-0 left-0 z-20 text-slate-900 bg-orange-400 bg-opacity-60 border-orange-200 rounded-tl-md rounded-br-2xl rounded-tr-sm flex justify-center items-center">
          -{percent}%
        </div>
      )}
      {!cartItems.find((item) => item.id === id) ? (
        <div>
          <p className="absolute bottom-10 left-1 right-1 z-20 px-2 cursor-default text-white bg-slate-800/[.5] rounded-lg">
            {name}
          </p>
          <p className={classPrice}>
            {price} {currency}
          </p>
          <p className="absolute bottom-1 left-20 z-20 px-1 cursor-default text-white bg-slate-800/[.5] rounded-lg">
            {quantity} remains
          </p>
          <button
            className="absolute bottom-1 right-1 z-20 cursor-pointer text-white uppercase bg-slate-800/[.7] p-1 rounded-lg"
            onClick={() => {
              if (products.find((item) => item.id === id).quantity === 0) {
                return toast.error("This product is no longer in stock.");
              } else {
                return buyProduct();
              }
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
