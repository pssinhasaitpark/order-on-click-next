// src/redux/slices/grocerySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchGroceryData = createAsyncThunk(
  "grocery/fetchGroceryData",
  async ({ category_id, search, page_no, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://myelectrocare.com/electrocare/index.php/Grocery/getGroceryProduct",
        qs.stringify({
          category_id: category_id || "",
          search: search || "",
          page_no: page_no || 1,
          limit: limit || 25,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return {
        ...response.data,
        page_no: page_no || 1,
        search_query: search || "",
        category_id: category_id || "",
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    data: {},
    allPagesData: {}, // Store data for all pages
    currentFilters: {
      search: "",
      category_id: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    clearAllPagesData: (state) => {
      state.allPagesData = {};
    },
    updateCurrentFilters: (state, action) => {
      state.currentFilters = { ...state.currentFilters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroceryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGroceryData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        // Create a unique key for current filters
        const filterKey = `${action.payload.search_query || "no-search"}_${
          action.payload.category_id || "no-category"
        }`;

        // Initialize the filter key if it doesn't exist
        if (!state.allPagesData[filterKey]) {
          state.allPagesData[filterKey] = {};
        }

        // Store data for the current page
        state.allPagesData[filterKey][action.payload.page_no] =
          action.payload.grocery || [];

        // Update current filters
        state.currentFilters = {
          search: action.payload.search_query,
          category_id: action.payload.category_id,
        };
      })
      .addCase(fetchGroceryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAllPagesData, updateCurrentFilters } = grocerySlice.actions;
export default grocerySlice.reducer;
