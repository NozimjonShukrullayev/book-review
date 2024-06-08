import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import "./Books-lists.css";
import "swiper/css";
import "swiper/css/pagination";

function BooksLists({ books }) {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Swiper className="books__list" 
      slidesPerView={2}
      breakpoints={{ 768: { slidesPerView: 3 }, 991: { slidesPerView: 4 }, 1200: { slidesPerView: 5 } }}
      spaceBetween={50}
      modules={[Pagination]}
      pagination={{ clickable: true }}>
      {books?.map(book => (
        <SwiperSlide className="books__list__item" key={book?.rank}>
          <Link onClick={scrollTo} to={`/current-books-item/${book?.primary_isbn13}`}>
            <img className="books__list__img" src={book?.book_image} alt="books-list-img" />
            <span className="books__list__author">Author: {book?.author}</span>
            <span className="books__list__title">{book?.title}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BooksLists;