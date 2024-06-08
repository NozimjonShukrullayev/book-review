import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBestBooksByFilter, getBestBooksLists } from "../../slice/best-seller-list-slice";
import { BooksLists } from "../";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Best-seller-books.css";

function BestSellerBooks() {
  const dispatch = useDispatch();
  const { isLoading, filteredBooks, bestBooksCurrentData } = useSelector(state => state.bestBooksLists);
  
  useEffect(() => {
    dispatch(getBestBooksLists());
    dispatch(getBestBooksByFilter());
  }, [])

  const changeFilterHandler = (listName) => {
    dispatch(getBestBooksByFilter(listName));
  }

  return (
    <div id="best-seller-books">
      <div className="container">
        <div className="best__books__grid books__grid">
          <div className="best__books__content books__content">
          <span className="best__books__suptitle books__suptitle">BOOK REVIEW</span>
            <h2 className="best__books__title books__title">All Best Seller Books Lists</h2>
            <p className="best__books__description books__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="best__books__body__grid">
          <div className="best__books__lists__box">
            {isLoading ? <SkeletonTheme height={"250px"}><Skeleton /></SkeletonTheme>
            : filteredBooks?.map(list => (
              <div key={list?.list_id}>
                <span className="books__list__names__title">{list?.list_name}</span>
                <BooksLists key={list?.list_id + 10} books={list?.books} />
              </div>
            ))}
          </div>
          <div className="filterbar">
            <button type="button" onClick={() => changeFilterHandler("all")}><p className="filterbar__name">All <span>{}</span></p></button>
            {bestBooksCurrentData?.map(list => (
              <button key={list?.list_id} onClick={() => changeFilterHandler(list?.list_name)} type="button"><p className="filterbar__name">{list?.list_name} <span>{}</span></p></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellerBooks;