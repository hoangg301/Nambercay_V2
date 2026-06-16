import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import "../styles/Collection.css";

function Collection() {
  console.log(products);

  return (
    <main className="collection">
      <section className="collection-header">
        <h1 className="collection-title">
          Bộ Sưu Tập
        </h1>

        <p className="collection-subtitle"></p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
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
