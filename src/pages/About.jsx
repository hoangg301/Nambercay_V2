import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import studioImg from "../assets/studio.webp";
import beforeImg from "../assets/before.webp";
import afterImg from "../assets/after.webp";
import "../styles/About.css";


function About() {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  useEffect(() => {
    if (fullscreenImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [fullscreenImg])
  
  return (
    <main className="about">
      
      {/* Hero */}

      <section className="about-debut">
        <h1 className="section-title">
          Nambercay
        </h1>
        <p className="about-subtitle">
          Một góc xanh trong phòng - tạo nên từ những hệ sinh thái thu nhỏ.
        </p>
        <div className="debut-img">
          <img 
            src={studioImg}
            alt="Studio Nambercay"
            loading="lazy"
            onClick={() => setFullscreenImg(studioImg)}
          />
        </div>
      </section>

      {/* Story */}

      <section className="about-story">
        <h2 className="section-title">
          Khởi Nguồn
        </h2>
        <div className="story-container">
          <div className="story-text">
            <p>
              Mọi thứ bắt đầu từ một suy nghĩ: mang thêm một chút thiên nhiên vào không gian sống.
            </p>
            <p>
              Những thử nghiệm đầu tiên với cây, đá và rêu, sở thích ấy dần trở thành niềm vui mỗi ngày.
            </p>
            <p>
              Qua thời gian, góc nhỏ ấy phát triển thành nơi để sáng tạo, chăm sóc và tạo nên thiên nhiên thu nhỏ bằng tay.
            </p>
          </div>
          <div className="debut-img-desktop">
            <img 
              src={studioImg}
              alt="Studio Nambercay"
              loading="lazy"
              onClick={() => setFullscreenImg(studioImg)}
            />
          </div>
        </div>
      </section>

      {/* D1 - 1D */}

      <section className="journey">
        <h2 className="section-title">
          Một Hành Trình Nhỏ
        </h2>
        <p className="journey-text">
          Từ một mong muốn đơn giản, đến niềm đam mê được nuôi dưỡng qua nhiều năm.
        </p>
        <div className="journey-grid">
          <div className="journey-card">
            <button
              className="journey-img-btn"
              onClick={() => setFullscreenImg(beforeImg)}
            >
              <img
                src={beforeImg}
                alt="Day One"
                loading="lazy"
              />
            </button>
            <span className="journey-label">
              Day One
            </span>
          </div>

          <div className="journey-arrow">
            ⟶
          </div>


          <div className="journey-card">
            <button
              className="journey-img-btn"
              onClick={() => setFullscreenImg(afterImg)}
            >
              <img
                src={afterImg}
                alt="One Day"
                loading="lazy"
              />
            </button>
            <span className="journey-label">
              One Day
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-cta">
        <h2 className="section-title">
          Khám Phá Thêm
        </h2>
        <p>
          Xem những tác phẩm Terrarium đang được giới thiệu hoặc liên hệ với Nambercay để được tư vấn.
        </p>
        <div className="cta-actions">
          <Link
            to="/collection"
            className="cta-btn"
          >
            Xem Bộ Sưu Tập
          </Link>
          <Link
            to="/contact"
            className="cta-btn"
          >
            Liên Hệ
          </Link>
        </div>
      </section>

      {fullscreenImg && (
        <div 
          className="fullscreen-overlay"
          onClick={() => setFullscreenImg(null)}
        >
          <button
            className="fullscreen-close"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImg(null)}
            }
          >
            ✕
          </button>
          <img
            src={fullscreenImg}
            alt=""
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default About;
