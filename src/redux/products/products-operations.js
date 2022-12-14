import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGetProducts, axiosGetProductsByCategory } from "../../api/apiProducts";

export const getProducts = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetProducts();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "products/category",
  async (category, { rejectWithValue }) => {
    try {
      const data = await axiosGetProductsByCategory(category);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
