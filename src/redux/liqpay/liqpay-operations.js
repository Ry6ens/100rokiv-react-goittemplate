import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosLiqPay } from "../../api/apiLiqPay";

export const getLiqPayOperations = createAsyncThunk(
  "/liqpay",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await axiosLiqPay(formData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);