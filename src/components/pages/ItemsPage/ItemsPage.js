import React, { useContext, useEffect, useState } from "react";
import ItemCard from "../../cards/ItemCard/ItemCard";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import products from "../../../common/items.json";

const ItemsPage = () => {
  const { cartItems, addToCart } = useContext(ShoppingCartContext);

  return (
    <div className="m-auto w-11/12 grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          image={product.imgUrl}
          name={product.name}
          price={product.price}
          currency={product.currency}
          onClick={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ItemsPage;
