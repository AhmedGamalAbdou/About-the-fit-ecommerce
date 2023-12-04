import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
	orderItems: new Array(),
	user: null,
	error: null,
};

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.orderItems.push({ ...action.payload, image: action.payload.images[0], id: action.payload._id });
			state.orderItems = [...new Map(state.orderItems.map((item) => [item.id, item])).values()];
			toast.info('Product added to cart', {
				position: 'top-right',
				autoClose: 1000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		},

		deleteFromCart: (state, action) => {
			toast.info('Product removed from cart', {
				position: 'top-right',
				autoClose: 1000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			return { ...state, orderItems: state.orderItems.filter((product) => product.id !== action.payload) };
		},
		clearCart: (state, action) => {
			return { orderItems: [] };
		},
	},
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
