import { configureStore, createSlice } from "@reduxjs/toolkit";
import products from "../common/items.json";

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
  },
  reducers: {},
});

export const actions = discountSlice.actions;

const store = configureStore({
  reducer: discountSlice.reducer,
});

export default store;
