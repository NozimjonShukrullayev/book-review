import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooksLists = createAsyncThunk(
  "booksLists/getBooksLists",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=8Y08odVYfbdwy1ct6buMIdjIA6zSB8rj");
      return response?.data?.results?.lists;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksListsSlice = createSlice({
  name: "booksLists",
  initialState: {
    booksListsData: [],
    booksCurrentData: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getBookCurrentList: (state, action) => {
      const arr = state.booksListsData.map(item => {
        const arr2 = item?.books.filter(book => book.primary_isbn13 === action.payload);
        return arr2.length > 0 && arr2;
      })
      state.booksCurrentData = arr.find(currentIsbn => currentIsbn.length > 0)[0]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksLists.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooksLists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksListsData = action.payload;
      })
      .addCase(getBooksLists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { getBookCurrentList } = booksListsSlice.actions;
export default booksListsSlice.reducer;