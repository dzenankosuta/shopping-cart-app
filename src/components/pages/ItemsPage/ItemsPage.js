import React, { useContext, useEffect, useState } from "react";
import ItemCard from "../../cards/ItemCard/ItemCard";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

const ItemsPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  let id = 1;
  let image =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5288e289ec7246dca5c3ae360134ceeb_9366/Arsenal_Condivo_22_Track_Jacket_Blue_HA5284_41_detail.jpg";
  let name = "Gym suit";
  let price = 79;
  // let quantity = 49;

  const [quantity, setQuantity] = useState(49);

  const clickHandler = (id) => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="m-auto w-11/12 grid grid-cols-4 gap-4">
      <ItemCard
        image={image}
        name={name}
        price={price}
        quantity={quantity}
        onClick={clickHandler}
      />
    </div>
  );
};

export default ItemsPage;
