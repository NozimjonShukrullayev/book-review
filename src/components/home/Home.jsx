import { HomeHero, HomeServices, HomeReviews, HomeCollection, HomeGallery } from "../";


function Home() {
  return (
    <div id="home">
      <HomeHero />
      <HomeServices />
      <HomeReviews />
      <HomeCollection />
      <HomeGallery />
    </div>
  )
}

export default Home;