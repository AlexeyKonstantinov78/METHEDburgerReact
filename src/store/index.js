import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productsReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import modalReducer from "./ModalDelivery/ModalDeliverySlice";
import formReducer from "./form/formSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formReducer,
  },

  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});