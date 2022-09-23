import React from "react";

const CartPage = () => {
  return (
    <>
      <div className="m-auto w-11/12 grid grid-cols-4 gap-4">
        <div className="w-72 h-96 border-solid border-2 border-slate-200 relative rounded-lg">
          <img
            src={require(`../../../images/logo.png`)}
            alt="item_image"
            className="w-full h-full absolute top-0 z-10 object-cover"
          />
          <p className="absolute bottom-10 left-4 z-20 px-2 bg-slate-400/[.4] rounded-lg">
            Item_name
          </p>
          <p className="absolute bottom-1 left-4 z-20 px-2 bg-slate-400/[.4] rounded-lg">
            Price
          </p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
