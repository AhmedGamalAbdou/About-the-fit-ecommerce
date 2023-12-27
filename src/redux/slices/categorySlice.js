import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const createCategory = createAsyncThunk(
  "categories/create",
  async (category, thunkAPI) => {
    try {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/catalogs",
          { ...category },
          config
        );
        toast.success("Category Created Successfully", {
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
      }

      return thunkAPI.rejectWithValue("Pleas login again...");
    } catch (error) {
      toast.error("Unable to create Category!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/catalogs/delete",
          { id },
          config
        );
        toast.success("Category deleted Successfully", {
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
      }

      return thunkAPI.rejectWithValue("Pleas login again...");
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const getCategories = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    try {
      if (localStorage.getItem("userToken")) {
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.get("/api/catalogs", config);
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

export const getCategoryById = createAsyncThunk(
  "categories/getCategoryById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`/api/categories/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create new messages
      .addCase(createCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get subscribers
      .addCase(getCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // getbyid

      .addCase(getCategoryById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload.id
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
