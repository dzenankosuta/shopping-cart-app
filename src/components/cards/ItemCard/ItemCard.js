import React from "react";
import { toast } from "react-hot-toast";

const ItemCard = ({ image, name, price, quantity, currency, onClick }) => {
  return (
    <div className="w-72 h-96 border-solid border-2 border-orange-200 relative rounded-lg">
      <img
        src={image}
        alt="item_image"
        className="w-full h-full absolute top-0 z-10 object-cover rounded-lg"
      />
      <p className="absolute bottom-10 left-4 z-20 px-2 cursor-default text-slate-900 bg-orange-300/[.4] rounded-lg">
        {name}
      </p>
      <p className="absolute bottom-1 left-4 z-20 px-2 cursor-default text-slate-900 bg-orange-300/[.4] rounded-lg">
        {price} {currency}
      </p>
      <button
        className="absolute bottom-8 right-2 z-20 cursor-pointer text-slate-900 bg-orange-400/[.5] p-1 rounded-lg"
        onClick={() => {
          quantity > 0
            ? toast.success("Successfully added to cart!") && onClick()
            : toast.error(
                "The selected item is out of stock. Please choose another one."
              );
        }}
      >
        ADD TO CART
      </button>
      <p className="absolute bottom-1 right-2 z-20 px-2 cursor-default text-slate-900 bg-orange-300/[.4] rounded-lg">
        {quantity} remains
      </p>
    </div>
  );
};

export default ItemCard;
