import heroImg from "./assets/hero.svg"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Cronut hashtag JOMO craft beer master cleanse fashion axe tote bag
            skateboard polaroid coloring book kombucha man braid cloud bread
            selvage sus. Affogato mustache four dollar toast, same ennui
            solarpunk bodega boys drinking vinegar actually raclette try-hard
            master cleanse big mood mixtape poke.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Contentful CMS" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
