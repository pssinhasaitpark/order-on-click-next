// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice.js";
import groceryReducer from "./slices/grocerySlice.js";
import rentalItemListReducer from "./slices/rentalItemListSlice.js";
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    grocery: groceryReducer,
    rental: rentalItemListReducer,
  },
});

export default store;
