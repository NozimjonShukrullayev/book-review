import "./Home-services.css";
import cardImgOne from "../../assets/images/card-img-1.png";
import cardImgTwo from "../../assets/images/card-img-2.png";
import cardImgThree from "../../assets/images/card-img-3.png";
import { HomeServicesCard } from "../../ui";

const servicesCardArray = [
  {img: cardImgOne, title: "Book Reviews", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {img: cardImgTwo, title: "Top Picks", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {img: cardImgThree, title: "Book of Month", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function HomeServices() {
  return (
    <section id="home-services">
      <div className="container">
        <div className="services__grid">
          <div className="services__content">
            <h2 className="services__title">Welcome To Booktap</h2>
            <span className="services__subtitle">A MONTHLY BOOK REVIEW PUBLICATION</span>
            <p className="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <ul className="services__card__list">
          {servicesCardArray?.map(( card, index ) => (
            <HomeServicesCard key={index} img={card?.img} title={card?.title} description={card?.description} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomeServices;