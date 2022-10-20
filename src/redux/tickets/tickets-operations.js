import { createAsyncThunk } from "@reduxjs/toolkit";

// import { axiosLiqPay } from "../../api/apiLiqPay";

export const getTicketsOperations = createAsyncThunk(
  "/LiqPay/Tickets",
  async (formData, { rejectWithValue }) => {
    try {
      // console.log(formData);
      //   const data = await axiosLiqPay(formData);
      //   return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
