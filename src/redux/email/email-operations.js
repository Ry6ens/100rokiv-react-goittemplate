import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosSendGridMessage } from "../../api/apiSendGrid";

export const getEmailOperations = createAsyncThunk(
  "/email",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await axiosSendGridMessage(formData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
