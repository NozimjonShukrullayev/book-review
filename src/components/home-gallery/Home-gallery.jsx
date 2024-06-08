import galleryImgOne from "../../assets/images/gallery-img-one.jpg";
import galleryImgTwo from "../../assets/images/gallery-img-two.jpg";
import galleryImgThree from "../../assets/images/gallery-img-three.jpg";
import galleryImgFour from "../../assets/images/gallery-img-four.jpg";
import galleryImgFive from "../../assets/images/gallery-img-four.jpg";
import galleryImgSix from "../../assets/images/gallery-img-three.jpg";
import galleryImgSeven from "../../assets/images/gallery-img-two.jpg";
import galleryImgEight from "../../assets/images/gallery-img-one.jpg";
import "./Home-gallery.css";

const images = [galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour, galleryImgFive, galleryImgSix, galleryImgSeven, galleryImgEight];

function HomeGallery() {
  return (
    <section id="home-gallery">
      <div className="container">
        <div className="home__gallery__grid">
          {images.map((img, index) => (
            <img key={index} className="home__gallery__img" src={img} alt="home-gallery-img" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeGallery;