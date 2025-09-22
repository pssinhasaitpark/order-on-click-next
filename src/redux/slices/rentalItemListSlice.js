import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchRentalItems = createAsyncThunk(
  "rental/fetchRentalItems",
  async ({ category_id, search, page_no, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://myelectrocare.com/electrocare/index.php/User/rentalItemList",
        qs.stringify({
          category_id: category_id || "",
          search: search || "",
          page_no: page_no || 1,
          limit: limit || 4,
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

const rentalItemListSlice = createSlice({
  name: "rental",
  initialState: {
    data: {},
    allPagesData: {},
    currentFilters: {
      search: "",
      category_id: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    clearRentalPagesData: (state) => {
      state.allPagesData = {};
    },
    updateRentalFilters: (state, action) => {
      state.currentFilters = { ...state.currentFilters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRentalItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        const filterKey = `${action.payload.search_query || "no-search"}_${
          action.payload.category_id || "no-category"
        }`;

        if (!state.allPagesData[filterKey]) {
          state.allPagesData[filterKey] = {};
        }

        state.allPagesData[filterKey][action.payload.page_no] =
          action.payload.result || [];

        state.currentFilters = {
          search: action.payload.search_query,
          category_id: action.payload.category_id,
        };
      })
      .addCase(fetchRentalItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRentalPagesData, updateRentalFilters } =
  rentalItemListSlice.actions;

export default rentalItemListSlice.reducer;
