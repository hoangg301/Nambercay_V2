import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero-img.webp";

function Home() {
  return (
    <main>
      <section className="hero">
        <img 
          src={heroImg} 
          alt="Hero Image"
          className="hero-img"  
        />
        <div className="hero-overlay" />
        <h1 className="intro">Nature's Art</h1>
        <div className="hero-content">
          <h2 className="hero-heading">
            Có những thế giới không cần bản đồ để khám phá
          </h2>
          <p className="hero-sub">
            Some worlds need no map to explore
          </p>
          <a 
            href="#features"
            className="hero-btn"
          >
            Khám phá ngay
          </a>
        </div>
      </section>

      <section
        id="features"
        className="features"
      >
        <p>Coming soon...</p>
      </section>
    </main>
  );
}
export default Home;
