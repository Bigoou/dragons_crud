import { configureStore } from "@reduxjs/toolkit";
import dragonsReducer from "../components/DragonSlice";

export default configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});