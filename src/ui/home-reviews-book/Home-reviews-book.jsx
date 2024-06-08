import "./Home-reviews-book.css";
import { Link } from "react-router-dom";

function HomeReviewsBook({ author, img }) {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <li className="home__reviews__item">
      <img className="home__reviews__item__img" src={img} alt="reviews-img" />
      <span className="home__reviews__item__author">{author}</span>
      <Link onClick={scrollTo} to={"/books"} className="home__reviews__item__btn primary__btn">See more</Link>
    </li>
  )
}

export default HomeReviewsBook;