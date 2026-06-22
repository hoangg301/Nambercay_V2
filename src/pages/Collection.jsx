import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { products, categories } from "../data/products.js";
import "../styles/Collection.css";
import useCanonical from "../data/canonical.js";


function Collection() {
  useCanonical("/collection");

  const { category } = useParams();
  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  useEffect(() => {
    if (category) {
      document.title = `${category} | Nambercay`;
    } else {
      document.title = "Bộ Sưu Tập | Nambercay";
    }
  }, [category]);

  return (
    <main className="collection">
      <section className="collection-header">
        <nav className="category-tabs">
          <Link
            to="/collection"
            className={`category-tab ${!category ? "active" : ""}`}
          >
            Tất Cả
          </Link>

          {categories.filter(item => item.id !== "all").map(item => (
            <Link
              key={item.id}
              to={`/collection/${item.id}`}
              className={`category-tab ${category === item.id ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <h1 className="collection-title">
          Bộ Sưu Tập
        </h1>
        <p className="collection-subtitle">
          Đây là những tác phẩm tiêu biểu được tuyển chọn từ Nambercay.
        </p> 
        <p className="collection-subtitle">  
          Nhiều mẫu Terrarium khác vẫn đang được lưu giữ và cập nhật trên Facebook, Instagram, Tiktok.
        </p>
      </section>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/collection/${product.category}/${product.slug}`}
            className="product-card"
          >
            <div className="product-img-wrap">
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-img"
                loading="lazy"
              />
            </div>

            <div className="product-info">
              <span className="product-category">
                - {product.categoryLabel} -
              </span>

              <h2 className="product-name">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Collection;
