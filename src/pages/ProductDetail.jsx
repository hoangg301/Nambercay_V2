import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import "../styles/ProductDetail.css";
import { CONTACT } from "../data/contact";


function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = products.find((item) => item.slug === slug);
    const [currentIndex, setCurrentIndex] = useState(2);
    const [touchStartX, setTouchStartX] = useState(null);
    const goPrev = () => {
        setCurrentIndex((prev) => prev === 0 ? product.images.length - 1 : prev - 1)
    };
    const goNext = () => {
        setCurrentIndex((prev) => prev === product.images.length - 1 ? 0 : prev + 1)
    };
    const handleContact = async () => {
        const message = `Xin chào, tôi muốn hỏi thêm về sản phẩm này:
            
            - ${product.name} -
        
            Link tham khảo:
            ${window.location.href}`;
        
        try {
            await navigator.clipboard.writeText(message);
            
            window.open(
                CONTACT.messenger,
                "_blank"
            )
        } catch {
            alert("Không thể sao chép nội dung")
        }
    };
    const [isFullscreen, setIsFullscreen] = useState(false);
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isFullscreen]);

    if (!product) {
        return (
            <main className="product-detail">
                <h1>Không tìm thấy sản phẩm</h1>;
            </main>
        )
    }

    return (
        <main className="product-detail">
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                ← Bộ Sưu Tập
            </button>

            <section className="detail-header">
                <h1 className="detail-title">
                    {product.name}
                </h1>
                <p className="detail-category">
                    Thể loại bể: {product.categoryLabel}
                </p>
            </section>

            <section className="detail-gallery">
                <div 
                    className="main-image"
                    onClick={() => setIsFullscreen(true)}
                >
                    <img
                        src={product.images[currentIndex]}
                        alt={product.name}
                    />
                </div>

                <div className="thumbnail-list">
                    {[2, 0, 1].map((index) => (
                        <button
                            key={index}
                            className={`thumbnail-btn ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img
                                src={product.images[index]}
                                alt={`${product.name} ${index + 1}`}
                            />
                        </button>
                    ))}
                </div>
            </section>

            <section className="detail-info">
                <p className="detail-description">
                    - Mỗi bể Terrarium đều được chế tác thủ công.
                </p>
                <p className="detail-description">
                    - Sản phẩm thực tế có thể khác đôi chút so với hình ảnh mẫu.
                </p>
                <p className="detail-description">
                    - Vui lòng liên hệ Nambercay để biết thêm thông tin về kích thước, giá thành hoặc thiết kế theo yêu cầu riêng.
                </p>
                
                <p className="contact-note">
                    Nhấn nút bên dưới để mở Messenger. Thông tin sản phẩm sẽ được sao chép sẵn, bạn chỉ cần dán và gửi.
                </p>
                <button 
                    className="contact-btn"
                    onClick={handleContact}
                >
                    Liên hệ về tác phẩm này
                </button>
            </section>

            {isFullscreen && (
                <div
                    className="fullscreen-overlay"
                    onClick={() => setIsFullscreen(false)}
                >
                    <button
                        className="fullscreen-close"
                        onClick={() => setIsFullscreen(false)}
                    >
                        ✕
                    </button>
                    <button
                        className="fullscreen-nav-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                    >
                        ‹
                    </button>
                    <button
                        className="fullscreen-nav-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                    >
                        ›
                    </button>
                    <img
                        src={product.images[currentIndex]}
                        alt={product.name}
                        className="fullscreen-image"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => {setTouchStartX(e.touches[0].clientX)}}
                        onTouchEnd={(e) => {
                            const touchEndX = e.changedTouches[0].clientX;

                            if (touchStartX - touchEndX > 50) {
                                goNext();
                            }
                            if (touchEndX - touchStartX > 50) {
                                goPrev();
                            }
                        }}
                    />
                </div>
            )}
        </main>
    )
}

export default ProductDetail;
