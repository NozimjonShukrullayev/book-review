import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewsData = createAsyncThunk(
  "reviews/getReviewsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8Y08odVYfbdwy1ct6buMIdjIA6zSB8rj");
      return response?.data?.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviewsData: [],
    isLoading: false,
    error: null,
    reviewsBook: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviewsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviewsData = action.payload;
        state.reviewsBook = [action.payload?.books[0], action.payload?.books[1], action.payload?.books[2]];
      })
      .addCase(getReviewsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default reviewsSlice.reducer;