// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice.js";
import groceryReducer from "./slices/grocerySlice.js";
import rentalItemListReducer from "./slices/rentalItemListSlice.js";
import rentalItemReducer from "./slices/rentalPageSlice.js";
import videoReducer from "./slices/videoSlice.js";
import homeReducer from "./slices/homeSlice.js";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    grocery: groceryReducer,
    rental: rentalItemListReducer,
    rentalPage: rentalItemReducer,
    videos: videoReducer,
    home: homeReducer,
  },
});

export default store;
