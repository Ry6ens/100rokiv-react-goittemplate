import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosTelegram } from "../../api/apiTelegram";

export const getTelegramOperations = createAsyncThunk(
  "/telegram",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await axiosTelegram(formData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
