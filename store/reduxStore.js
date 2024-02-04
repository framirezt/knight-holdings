import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export default Store;
