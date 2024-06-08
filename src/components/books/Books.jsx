import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksLists } from "../../slice/books-list-slice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Books.css";
import { BooksLists } from "../";

function Books() {
  const dispatch = useDispatch();
  const { isLoading, booksListsData } = useSelector(state => state.booksLists);
  
  useEffect(() => {
    dispatch(getBooksLists());
  }, [])

  return (
    <div id="books">
      <div className="container">
        <div className="books__grid">
          <div className="books__content">
          <span className="books__suptitle">BOOK REVIEW</span>
            <h2 className="books__title">All Books Lists</h2>
            <p className="books__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="books__lists__box">
          {isLoading ? <SkeletonTheme height={"250px"}><Skeleton /></SkeletonTheme> 
          : booksListsData?.map((list) => (
            <div key={list?.list_id}>
              <span className="books__list__names__title">{list?.list_name}</span>
              <BooksLists key={list?.list_id + 5} books={list?.books} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books;