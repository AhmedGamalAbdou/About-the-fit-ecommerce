// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   user: null,
//   error: null,
// };

// export const registerUser = createAsyncThunk(
//   "user/register",
//   async ({ phonenumber, password }, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     const phoneNumber = phonenumber;

//     try {
//       const { config } = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       // make request to backend
//       let { data } = await axios.post(
//         "/api/users/login",
//         { phoneNumber, password },
//         config
//       );
//       localStorage.setItem("userToken", data.token);
//       return data;
//     } catch (error) {
//       // return custom error message from API if any
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state, action) => {
//         state.isLoading = true;
//         state.error = null;
//       })

//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;
