import React, { useContext } from "react";
import ItemCard from "../../components/cards/ItemCard/ItemCard";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
// import products from "../../../common/items.json";

const ItemsPage = () => {
  const { addToCart, products } = useContext(ShoppingCartContext);
  return (
    <div className="m-auto w-11/12 grid grid-cols-4 grid-flow-row gap-8">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          image={product.imgUrl}
          name={product.name}
          price={product.price}
          currency={product.currency}
          quantity={product.quantity}
          onClick={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ItemsPage;
