import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features"
const store=configureStore({
    reducer: {
      habits: habitReducer,
    },
  });
  export default store;