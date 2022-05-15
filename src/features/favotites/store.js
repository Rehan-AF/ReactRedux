import { configureStore } from "@reduxjs/toolkit";
import Slicer from "../countrySlicer";

const store = configureStore({
  reducer: Slicer,
});

export default store;
