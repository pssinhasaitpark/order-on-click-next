import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.post(
    "https://myelectrocare.com/electrocare/index.php/WebApp/fetchVideos"
  );
  return response.data.result; // API returns "result" array
});

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
