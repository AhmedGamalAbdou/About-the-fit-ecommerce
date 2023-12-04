import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	singleProduct: [],
	isLoading: false,
	error: null,
};
export const getProduct = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;

	try {
		const { data } = await axios.get('/api/products');
		return data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

const productSlice = createSlice({
	name: 'productslice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProduct.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})

			.addCase(getProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default productSlice.reducer;
