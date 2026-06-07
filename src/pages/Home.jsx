import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero-img.webp";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.webp";
import feature3 from "../assets/feature3.webp";

const highlights = [
  { id: 1, name: "Cổ Mộc Trận", img: feature1 },
  { id: 2, name: "Huyết Liên Thánh Địa", img: feature2 },
  { id: 3, name: "Ảo Cảnh Thiền Tự", img: feature3 },
];

function Home() {
  const [activeId, setActiveId] = useState(1);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src={heroImg} 
          alt="Hero Image"
          className="hero-img"
          loading="eager"
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
          <button 
            className="hero-btn"
            onClick={() => {
              document.getElementById('features').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Khám phá ngay
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="features"
      >
        <div className="feature-block">
          <div className="feature-header">
            <h2 className="feature-title">Tác phẩm nổi bật</h2>
            <Link to="/collection" className="feature-link">
              Xem tất cả →
            </Link>
          </div>

          <div className="card-container">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="card-item">
                <div className={`card-img-wrap ${activeId === highlight.id ? "open" : ""}`}>
                  <img
                    src={highlight.img}
                    alt={highlight.name}
                    className="card-img"
                    loading="lazy"
                  />
                </div>
                <button
                  className={`card-btn ${activeId === highlight.id ? "active" : ""}`}
                  onClick={() => setActiveId(activeId === highlight.id ? 0 : highlight.id)}
                >
                  <span>{highlight.name}</span>
                  <span className="card-arrow">
                    {activeId === highlight.id ? '▲' : '▼'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
