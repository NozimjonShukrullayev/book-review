import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBestBooksLists = createAsyncThunk(
  "bestBooksLists/getBestBooksLists",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=yRWV6SsLkIMgG0fOaGMrxOV3KgiC9ssk");
      return response?.data?.results?.lists;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bestBooksListsSlice = createSlice({
  name: "bestBooksLists",
  initialState: {
    bestBooksCurrentData: [],
    filteredBooks: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getBestBooksByFilter: (state, action) => {
      if(action.payload === "all") {
        state.filteredBooks = state.bestBooksCurrentData;
      } else if(action.payload) {
        state.filteredBooks = state.bestBooksCurrentData.filter(list => list?.list_name === action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBestBooksLists.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBestBooksLists.fulfilled, (state, action) => {
        state.bestBooksCurrentData = action.payload;
        state.filteredBooks = action.payload;
        state.isLoading = false;
      })
      .addCase(getBestBooksLists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { getBestBooksByFilter } = bestBooksListsSlice.actions;
export default bestBooksListsSlice.reducer;