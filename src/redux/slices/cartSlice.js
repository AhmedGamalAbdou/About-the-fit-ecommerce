import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  user: null,
  error: null,
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (product) => product._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      toast.info("Product added to cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    incrementQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      );
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product._id !== action.payload
        );
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product._id !== action.payload
      );
    },
    clearCart: (state, action) => {
      return { cartItems: [] };
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
