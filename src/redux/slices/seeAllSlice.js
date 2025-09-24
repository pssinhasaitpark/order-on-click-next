import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsByType = createAsyncThunk(
  "seeAll/fetchProductsByType",
  async ({ type, categoryId, page_no = 1, limit = 12 }, { rejectWithValue }) => {
    try {
      let params = {
        page_no,
        limit,
      };
      if (type === "category" && categoryId) {
        params.category_id = categoryId;
      } else if (type) {
        params.type = type;
      }
      const response = await axios.post(
        "https://myelectrocare.com/electrocare/index.php/WebApp/fetchGrocery",
        new URLSearchParams(params),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const seeAllSlice = createSlice({
  name: "seeAll",
  initialState: {
    products: [],
    loading: false,
    error: null,
    totalCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByType.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.result || [];
        state.totalCount = action.payload.total_count || 0;
      })
      .addCase(fetchProductsByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default seeAllSlice.reducer;
