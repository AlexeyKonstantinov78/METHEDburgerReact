import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productsReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
  },

});