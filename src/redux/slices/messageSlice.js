import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  messages: [],
  newMessages: 0,
  loading: false,
  error: null,
};

export const createMessage = createAsyncThunk(
  "messages/create",
  async (message, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/messages",
        { ...message },
        config
      );
      toast("Thanks For Your Feedback!", {
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

export const getMessagesNew = createAsyncThunk(
  "messages/number",
  async (thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        };
        const { data } = await axios.get("/api/messages/new", config);
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

export const getMessages = createAsyncThunk(
  "messages/get",
  async (thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        };
        const { data } = await axios.get("/api/messages", config);
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

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMessage.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createMessage.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get new messages number
      .addCase(getMessagesNew.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getMessagesNew.fulfilled, (state, action) => {
        state.loading = false;
        state.newMessages = action.payload.newMessages;
      })
      .addCase(getMessagesNew.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get all messages
      .addCase(getMessages.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default messageSlice.reducer;
