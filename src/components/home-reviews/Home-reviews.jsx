import { useEffect } from "react";
import { HomeReviewsBook } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsData } from "../../slice/home-review-slice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home-reviews.css";

function HomeReviews() {
  const dispatch = useDispatch();
  const { isLoading, reviewsBook } = useSelector(state => state.reviews);
  
  useEffect(() => {
    dispatch(getReviewsData());
  }, [])

  return (
    <section id="home-reviews">
      <div className="container">
        <div className="home__reviews__grid">
          <div className="home__reviews__content">
            <span className="home__reviews__suptitle">BOOK REVIEW</span>
            <h2 className="home__reviews__title">Latest reviews</h2>
            <p className="home__reviews__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <ul className="home__reviews__list">
          {isLoading ? (reviewsBook?.map((_, index) => <SkeletonTheme key={index} height={"320px"}><Skeleton /></SkeletonTheme>))
          : (reviewsBook?.map(book => (
            <HomeReviewsBook key={book?.rank} author={book?.author} img={book?.book_image} />
          )))}
        </ul>
      </div>
    </section>
  )
}

export default HomeReviews;