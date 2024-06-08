import { configureStore } from "@reduxjs/toolkit";
import bestSellerListSlice from "../slice/best-seller-list-slice";
import booksListsSlice from "../slice/books-list-slice";
import footerSubscribeSlice from "../slice/footer-subscribe-slice";
import reviewsSlice from "../slice/home-review-slice";
import searchBookSlice from "../slice/search-book-slice";

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
    subscribe: footerSubscribeSlice,
    booksLists: booksListsSlice,
    bestBooksLists: bestSellerListSlice,
    searchBooks: searchBookSlice,
  },
});