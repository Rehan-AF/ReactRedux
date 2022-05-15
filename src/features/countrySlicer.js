import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { fetchAsyncDetails } from "./actions";

const initialState = {
  darkMode: true,
  favouriteData: [],
};

const Slicer = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleAction: (state, { payload }) => {
      state.darkMode = payload;
    },
    addToFavourite: (state, action) => {
      state.favouriteData.push(action.payload);
    },
  },
  extraReducers: {
    [fetchAsyncDetails.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, products: payload };
    },
    [fetchAsyncDetails.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { toggleAction, addToFavourite } = Slicer.actions;
export default Slicer.reducer;
