import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  subscribers: [],
  loading: false,
  error: null,
};

export const createSubscriber = createAsyncThunk(
  "subscribers/create",
  async (email, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/subscribers", { email }, config);
      toast("Congrats, you subscribed to our website", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getSubscribers = createAsyncThunk(
  "subscribers/get",
  async (_, thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        };
        const { data } = await axios.get("/api/subscribers", config);
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

const subscriberSlice = createSlice({
  name: "subscribers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create new messages
      .addCase(createSubscriber.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createSubscriber.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createSubscriber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get subscribers
      .addCase(getSubscribers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload;
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriberSlice.reducer;
