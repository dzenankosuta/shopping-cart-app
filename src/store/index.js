import { configureStore, createSlice } from "@reduxjs/toolkit";
import products from "../common/items.json";
import { toast } from "react-hot-toast";

const discountSlice = createSlice({
  name: "discount",
  initialState: {
    products: products.map((product) => {
      const discount = !Math.round(Math.random());
      return {
        ...product,
        discount,
        percent: discount === false ? 0 : 30,
      };
    }),
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, qtyInCart: 1 });
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qtyInCart: item.qtyInCart + 1 };
          } else {
            return item;
          }
        });
      }
      state.products = state.products.map((artikal) => {
        if (artikal.id === action.payload.id) {
          return { ...artikal, quantity: artikal.quantity - 1 };
        } else {
          return artikal;
        }
      });
      toast.success("Successfully added to cart!");
    },
  },
});

export const actions = discountSlice.actions;

const store = configureStore({
  reducer: discountSlice.reducer,
});

export default store;
