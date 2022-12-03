import React, { useContext } from "react";
import ItemCard from "../../components/cards/ItemCard/ItemCard";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
// import products from "../../../common/items.json";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

const ItemsPage = () => {
  // const { addToCart, products } = useContext(ShoppingCartContext);
  const productss = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const addToCart = actions.addToCart();
  return (
    <div className="m-auto w-11/12 grid grid-cols-4 grid-flow-row gap-8">
      {productss.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          image={product.imgUrl}
          name={product.name}
          price={product.price}
          currency={product.currency}
          quantity={product.quantity}
          buyProduct={() => dispatch(actions.addToCart(product))}
          discount={product.discount}
          percent={product.percent}
        />
      ))}
    </div>
  );
};

export default ItemsPage;
