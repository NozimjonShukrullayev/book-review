import { Link } from "react-router-dom";
import homeCollectionImg from "../../assets/images/home-collection-img.jpg";
import "./Home-collection.css";

function HomeCollection() {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section id="home-collection">
      <div className="container">
        <div className="home__collection__grid">
          <div className="home__collection__img">
            <img src={homeCollectionImg} alt="home-collection-img" />
          </div>
          <div className="home__collection__content">
            <span className="collection__content__suptitle">The New Wilderness</span>
            <h3 className="collection__content__title">The Journey Of Dreams</h3>
            <p className="collection__content__description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <Link onClick={scrollTo} to={"/books"} className="collection__content__btn primary__btn">See Books</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCollection;