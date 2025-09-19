// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice.js";
import groceryReducer from "./slices/grocerySlice.js";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    grocery: groceryReducer,
  },
});

export default store;
