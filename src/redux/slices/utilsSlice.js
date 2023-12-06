import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	images: [],
	loading: false,
	error: null,
};

export const uploadImages = createAsyncThunk('images/upload', async (file, thunkAPI) => {
	try {
		const userToken = localStorage.getItem('userToken');
		if (userToken) {
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${userToken}`,
				},
			};
			const { data } = await axios.post('/api/utils/upload_images/db', { file }, config);
			return data;
		}
		return thunkAPI.rejectWithValue('Please Login Again!!');
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response ? error.response.data.message : error.message);
	}
});

const utilsSlice = createSlice({
	name: 'utils',
	initialState,
	reducers: {
		clearList: (state) => {
			state.images = [];
		},
	},
	extraReducers: (builder) => {
		builder
			// upload images
			.addCase(uploadImages.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})

			.addCase(uploadImages.fulfilled, (state, action) => {
				state.loading = false;
				state.images.push(action.payload.url);
			})
			.addCase(uploadImages.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});
export const { clearList } = utilsSlice.actions;

export default utilsSlice.reducer;
