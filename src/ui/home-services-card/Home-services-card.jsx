import { Link } from "react-router-dom";
import "./Home-services-card.css";

function HomeServicesCard({ img, title, description }) {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <li className="services__card__item">
      <img className="services__item__img" src={img} alt="services-card-img" />
      <h3 className="services__item__title">{title}</h3>
      <p className="services__item__description">{description}</p>
      <Link onClick={scrollTo} to="/" className="services__item__btn">Learn more</Link>
    </li>
  )
}

export default HomeServicesCard;