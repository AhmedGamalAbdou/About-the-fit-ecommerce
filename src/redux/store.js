import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import subscriberSlice from "./slices/subscriberSlice";
import messageSlice from "./slices/messageSlice";
import categorySlice from "./slices/categorySlice";
import utilsSlice from "./slices/utilsSlice";
import ordersSlice from "./slices/ordersSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    products: products,
    cart: cartSlice,
    subscribers: subscriberSlice,
    messages: messageSlice,
    categories: categorySlice,
    orders: ordersSlice,
    utils: utilsSlice,
    auth: authSlice,
  },
});

export default store;
