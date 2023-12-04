import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';
import subscriberSlice from './slices/subscriberSlice';
import messageSlice from './slices/messageSlice';
import categorySlice from './slices/categorySlice';
import utilsSlice from './slices/utilsSlice';
import ordersSlice from './slices/ordersSlice';
const store = configureStore({
	reducer: {
		products: products,
		cart: cartSlice,
		user: userSlice,
		subscribers: subscriberSlice,
		messages: messageSlice,
		categories: categorySlice,
		orders: ordersSlice,
		utils: utilsSlice,
	},
});

export default store;
