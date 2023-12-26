import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearList } from "./utilsSlice";
import { toast } from "react-toastify";
const initialState = {
  products: [],
  isLoading: false,
  error: null,
  userToken: null,
  productInfo: null,
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (categoryid = null, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      let url = "/api/products";
      console.log(categoryid);
      if (categoryid) {
        url = `/api/products/category/${categoryid}`;
      }
      const { data } = await axios.get(url);
      if (categoryid) {
        return { products: data };
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCheckProducts = createAsyncThunk(
  "products/getCheckProducts",
  async (productsNumber = 6, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`/api/products/limit/${productsNumber}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const userToken = localStorage.getItem("userToken");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      const { data } = await axios.post(
        "/api/products",
        { ...productData },
        config
      );
      toast.success("Product Created Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      thunkAPI.dispatch(clearList());
      return data;
    } catch (error) {
      thunkAPI.dispatch(clearList());
      toast.error("Unable to create product!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`/api/products/delete`, { id }, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      ///get limit

      .addCase(getCheckProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getCheckProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getCheckProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // getbyid

      .addCase(getProductById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productInfo = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      ///add product

      .addCase(addProduct.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      ///delete product
      .addCase(deleteProduct.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
