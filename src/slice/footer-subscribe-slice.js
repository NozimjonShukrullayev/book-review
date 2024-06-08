import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendToTelegramBot = createAsyncThunk(
  "subscribe/sendToTelegramBot",
  async (email, { rejectWithValue }) => {
    try {
      const chatId = 962709515;
      const message = `Email: ${email}`;
      const response = await axios.post("https://api.telegram.org/bot7050168568:AAG4UDnhTen6HVUc4gnb5yZp45GLX-fjGvM/sendMessage", {
        chat_id: chatId,
        text: message,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    success: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendToTelegramBot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(sendToTelegramBot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
       })
      .addCase(sendToTelegramBot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default subscribeSlice.reducer;