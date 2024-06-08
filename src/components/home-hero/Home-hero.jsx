import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import Typewriter from "typewriter-effect";
import "./Home-hero.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function HomeHero() {
  return (
    <section id="home-hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__suptitle">{`For Author & Writter`}</span>
            <h1 className="hero__title">Meet Your Next 
              <Typewriter
               options={{
                strings: ["Favorite Book", "Best book", "Very Good Book"], 
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 20,
               }}
              />
            </h1>
            <p className="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#home-services" className="hero__btn primary__btn">Let's go</a>
          </div>
          <Swiper
            className="hero__slider"
            slidesPerView={1}
            autoplay={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="slider__item">
              <img src="https://tehsen.waheeddev.com/wo-author/wp-content/uploads/2023/08/slider-01-1.png" alt="slide-img" />
            </SwiperSlide>
            <SwiperSlide className="slider__item">
              <img src="https://tehsen.waheeddev.com/wo-author/wp-content/uploads/2023/08/slider-01-2.png" alt="slide-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HomeHero