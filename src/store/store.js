import { configureStore } from "@reduxjs/toolkit";
import dragonsReducer from "./components/dragonsSlice";

export default configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});