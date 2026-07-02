import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero-img.webp";
import useCanonical from "../data/canonical";
import heroImgDesktop from "../assets/hero-img-desktop.webp";


const highlights = [
  {
    id: 1,
    name: "Tịnh Độ Linh Hoa",
    slug: "tinh-do-linh-hoa",
    category: "reu-bao-ton",
    categoryLabel: "Rêu Bảo Tồn",
    img: new URL('../assets/products/reu-bao-ton/r1-a.webp', import.meta.url).href
  },
  { 
    id: 2, 
    name: "Linh Mộc Viên",
    slug: "linh-moc-vien",
    category: "tu-giac",
    categoryLabel: "Tứ Giác",
    img: new URL('../assets/products/tu-giac/t1-a.webp', import.meta.url).href
  },
  { 
    id: 3, 
    name: "Lục Nguyên Tuyền Đạo",
    slug: "luc-nguyen-tuyen-dao",
    category: "da-giac",
    categoryLabel: "Đa Giác", 
    img: new URL('../assets/products/da-giac/d1-a.webp', import.meta.url).href 
  },
  { 
    id: 4, 
    name: "Vạn Gia Đăng Hỏa",
    slug: "van-gia-dang-hoa",
    category: "ban-can",
    categoryLabel: "Bán Cạn",
    img: new URL('../assets/products/ban-can/b1-a.webp', import.meta.url).href 
  }
];

function Home() {
  useCanonical("/");  

  const [activeId, setActiveId] = useState(1);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1200);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "Terrarium Thủ Công | Nambercay";
  }, []);
  
  return (
    <main>
      
      {/* Hero Section */}
      
      <section className="hero">
        <div className="hero-img-wrap">
          <img 
            src={heroImg} 
            alt="Terrarium"
            className="hero-img"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src={heroImgDesktop}
            alt="Terrarium"
            className="hero-img-desktop"
            loading="eager"
            fetchPriority="high"
          />
        </div>
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
                behavior: "smooth",
                block: "start"
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

        {/* Feature 1 */}
        
        <div className="feature-block">
          <div className="feature-header">
            <h2 className="feature-title">Tác phẩm nổi bật</h2>
            <Link to="/collection" className="feature-link">
              Xem tất cả →
            </Link>
          </div>

          <div className="card-container">
            {highlights.map((highlight) => {
              const isOpen = isDesktop || activeId === highlight.id;

              return (
                <div key={highlight.id} className="card-item">
                  <div className={`card-img-wrap ${isOpen ? "open" : ""}`}>
                    <Link to={`/collection/${highlight.category}/${highlight.slug}`}>
                      <img
                        src={highlight.img}
                        alt={highlight.name}
                        className="card-img"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  
                  {isOpen && (
                    <span className="card-category">- {highlight.categoryLabel} -</span>
                  )}

                  <button
                    className={`card-btn ${isOpen ? "active" : ""}`}
                    onClick={() => {
                      if (isDesktop) return;  
                      
                      setActiveId(activeId === highlight.id ? 0 : highlight.id)}
                    }
                  >
                    <span>{highlight.name}</span>
                    <span className="card-arrow">
                      {activeId === highlight.id ? '▲' : '▼'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature 2 */}
        
        <div className="feature-block">
          <div className="feature-header">
            <h2 className="feature-title">Điều Làm Nên Nambercay</h2>
          </div>

          <div className="why-card-container">
            <div className="why-card">
              <div className="why-card-top">
                <span className="why-icon">🤲</span>
                <span className="why-card-title">Thủ Công</span>
              </div>
              <p className="why-card-body">
                  Không có sản phẩm thứ hai.<br />
                  Vì mỗi thế giới thu nhỏ ấy đều là độc nhất.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-top">
                <span className="why-icon">✏️</span>
                <span className="why-card-title">Thiết Kế</span>
              </div>
              <p className="why-card-body">
                  Bạn chỉ cần một ý tưởng.<br />
                  Dù mơ hồ - Nambercay sẽ biến nó thành thật.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-top">
                <span className="why-icon">🌱</span>
                <span className="why-card-title">Chất Liệu</span>
              </div>
              <p className="why-card-body">
                  Đất thật, đá thật, rêu thật.<br />
                  Không có gì giả tạo ở đây.<br />
                  Chỉ có thiên nhiên là đang thực sự sống.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}

        <div className="feature-block">
          <div className="feature-header">
            <h2 className="feature-title">
              Cách Đặt Hàng
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <p>
                  Lựa chọn tác phẩm yêu thích của bạn
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <p>
                  Bấm nút "Liên hệ về tác phẩm này"
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <p>
                  Thông tin tác phẩm sẽ được tự động sao chép
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <p>
                  Dán thông tin vào tin nhắn rồi nhấn gửi
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <p>
                  Trao đổi trực tiếp với Nambercay
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}

export default Home;
