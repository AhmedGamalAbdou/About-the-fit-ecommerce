import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCart } from "./cartSlice";
import { toast } from "react-toastify";
const initialState = {
  orders: [],
  loading: false,
  error: null,
  orderDetails: null,
  success: false,
};

export const createorders = createAsyncThunk(
  "orders/createorders",
  async (order, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(order);

      const { data } = await axios.post("/api/orders", { ...order }, config);
      toast.success("Order Created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      thunkAPI.dispatch(clearCart());
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.order : error.message
      );
    }
  }
);

export const getorders = createAsyncThunk(
  "orders/getorders",
  async (thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        };
        const { data } = await axios.get("/api/orders", config);
        return data;
      } else {
        return thunkAPI.rejectWithValue("Pleas login again...");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createorders.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(createorders.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      .addCase(getorders.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default ordersSlice.reducer;
