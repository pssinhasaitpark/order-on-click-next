// redux/slices/homeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://myelectrocare.com/electrocare/index.php/WebApp/fetchHomeData"
      );
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    flashSale: [],
    bestSelling: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.flashSale = action.payload.flashSale;
        state.bestSelling = action.payload.bestSelling;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homeSlice.reducer;
