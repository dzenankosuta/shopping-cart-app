import React from "react";

const CartCard = () => {
  return (
    <div className="m-auto my-1.5 w-3/6 h-14 text-slate-900 text-lg flex justify-between items-center border-2 border-dashed border-orange-300 rounded-xl relative">
      <p className="px-4">Item_name</p>
      <p className="px-4">Quantity * Price = Amount</p>
      <button className="h-8 cursor-pointer bg-orange-500 px-1 rounded-lg absolute -right-20">
        DELETE
      </button>
    </div>
  );
};

export default CartCard;
