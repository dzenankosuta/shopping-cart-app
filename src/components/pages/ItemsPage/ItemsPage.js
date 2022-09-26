import React from "react";
import ItemCard from "../../cards/ItemCard/ItemCard";

const ItemsPage = () => {
  const image =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5288e289ec7246dca5c3ae360134ceeb_9366/Arsenal_Condivo_22_Track_Jacket_Blue_HA5284_41_detail.jpg";
  const name = "Gym suit";
  const price = 79;
  const quantity = 49;
  return (
    <div className="m-auto w-11/12 grid grid-cols-4 gap-4">
      <ItemCard image={image} name={name} price={price} quantity={quantity} />
    </div>
  );
};

export default ItemsPage;
