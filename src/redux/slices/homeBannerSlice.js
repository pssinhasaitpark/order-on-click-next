// src/redux/slices/homeBannerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchHomeBanners = createAsyncThunk(
  "homeBanner/fetchHomeBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://myelectrocare.com/electrocare/index.php/WebApp/fetchSliders",
        qs.stringify({}),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch banners");
    }
  }
);

const homeBannerSlice = createSlice({
  name: "homeBanner",
  initialState: {
    banners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchHomeBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homeBannerSlice.reducer;
