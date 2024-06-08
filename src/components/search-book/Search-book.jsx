import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBooksLists } from "../../slice/books-list-slice";
import { filterBooksHandler, getAllBooksHandler } from "../../slice/search-book-slice";
import "./Search-book.css";

function SearchBook() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { booksListsData } = useSelector(state => state.booksLists);
  const { filteredData } = useSelector(state => state.searchBooks);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    dispatch(getBooksLists());
    dispatch(getAllBooksHandler(booksListsData));
  }, [])

  const searchInputHandler = (e) => {
    e.preventDefault();
    dispatch(filterBooksHandler(searchValue));
    console.log(filteredData);
    setSearchValue("");
  } 

  return (
    <section id="search-book">
      <div className="container">
        <div className="best__books__grid books__grid">
          <div className="best__books__content books__content">
          <span className="best__books__suptitle books__suptitle">BOOK REVIEW</span>
            <h2 className="best__books__title books__title">Search books</h2>
            <p className="best__books__description books__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="search-book__grid">
          <div className="search-book__form__box">
            <form action="#" id="search-book-form" onSubmit={searchInputHandler}>
              <div>
              <input type="text" required value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" id="search" />
              <button className="primary__btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="search__book__list">
            {filteredData.map(book => (
              <Link className="search__book__item" key={book?.primary_isbn13} onClick={scrollTo} to={`/current-books-item/${book?.primary_isbn13}`}>
                <img className="books__list__img" src={book?.book_image} alt="books-list-img" />
                <span className="books__list__author">Author: {book?.author}</span>
                <span className="books__list__title">Title: {book?.title}</span>
                <span className="books__list__isbn">Isbn: {book?.primary_isbn13}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBook;