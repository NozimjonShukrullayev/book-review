import { Routes, Route } from "react-router-dom";
import { Header,  Footer, Home, MediaMenu, Books, CurrentBooksList, BestSellerBooks, SearchBook } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/current-books-item/:isbn" element={<CurrentBooksList />} />
        <Route path="/best-seller-books" element={<BestSellerBooks />} />
        <Route path="/search-books" element={<SearchBook />} />
      </Routes>
      <MediaMenu />
      <Footer />
    </div>
  )
}

export default App;