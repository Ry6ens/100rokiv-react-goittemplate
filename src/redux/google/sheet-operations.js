import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGoogleSheet } from "../../api/apiGoogleSheet";

export const getSheetOperations = createAsyncThunk(
  "/googleSheet",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await axiosGoogleSheet(formData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
