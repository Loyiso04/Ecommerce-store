import "./Hero.css";
import heroImage from "../../assets/images/Hero-Image.avif";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content flex container">
        <div>
          <h3>Summer Fashion</h3>
          <h1>New Collection</h1>
          <h4>
            Big sale of this week up to <span>25%</span>
          </h4>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
