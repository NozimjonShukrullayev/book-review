import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooksLists } from "../../slice/books-list-slice";
import { getBookCurrentList } from "../../slice/books-list-slice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Current-books-list.css";

function CurrentBooksList() {
  const { isbn } = useParams();
  const dispatch = useDispatch();
  const { booksCurrentData, isLoading } = useSelector(state => state.booksLists);
  
  const asyncGetData = async () => {
    await dispatch(getBooksLists());
    dispatch(getBookCurrentList(isbn));
  } 
  
  useEffect(() => {
    asyncGetData()
  }, [isbn])

  return (
    <section id="current-books">
      <div className="container">
        <div className="current__books__grid">
          <div className="current__books__img">
            {isLoading ? <SkeletonTheme height={"350px"}><Skeleton /></SkeletonTheme> 
            : <>
              <img src={booksCurrentData?.book_image} alt="book-img" />
            </>}
          </div>
          <div className="current__books__content">
            {isLoading ? <SkeletonTheme width={"100%"}><Skeleton /></SkeletonTheme>
            : <>
              <span className="current__books__author">{booksCurrentData?.author}</span>
              <span className="current__books__title">{booksCurrentData?.title}</span>
              <p className="current__books__description">{booksCurrentData?.description}</p>
            </>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentBooksList;