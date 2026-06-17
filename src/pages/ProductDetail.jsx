import { useParams } from "react-router-dom";
import { products } from "../data/products";


function ProductDetail() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <h1>Không tìm thấy sản phẩm</h1>;
    }

    return (
        <main>
            <h1>{product.name}</h1>
        </main>
    )
}

export default ProductDetail;
