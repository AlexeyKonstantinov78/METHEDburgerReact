import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productsReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import modalReducer from "./ModalDelivery/ModalDeliverySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    order: orderReducer,
    modal: modalReducer,
  },

  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});