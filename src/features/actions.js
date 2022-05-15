import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncDetails = createAsyncThunk(
  "product/getProduct",
  async () => {
    try {
      const data = await axios.get("https://restcountries.com/v3.1/all");
      return data.data;
    } catch (error) {
      throw error;
    }
  }
);
