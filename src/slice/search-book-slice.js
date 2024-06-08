import { createSlice } from "@reduxjs/toolkit";

const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState: {
    allSearchBooksData: [],
    filteredData: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getAllBooksHandler: (state, action) => {
      if (action.payload) {
        let arr2 = [];
        action.payload.forEach(item => {
          item?.books.forEach(book => {
            arr2.push(book);
          })
        })
        state.allSearchBooksData = arr2;
      }
    },
    filterBooksHandler: (state, action) => {
      const arr = state.allSearchBooksData.filter(book => (
        book?.primary_isbn13.toLowerCase().includes(action.payload.toLowerCase()) || 
        book?.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        book?.author.toLowerCase().includes(action.payload.toLowerCase())
      ))
      state.filteredData = arr;
    },
  },
});

export const { filterBooksHandler, getAllBooksHandler } = searchBooksSlice.actions;
export default searchBooksSlice.reducer;