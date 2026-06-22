import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/NotFound.css";
import useCanonical from "../data/canonical";

function NotFound() {
    useCanonical("/404");

    useEffect(() => {
        document.title = "404 | Nambercay";
    }, []);

    return (
        <main className="not-found">
            <h1>ERROR: 404</h1>
            <h3>Trang bạn đang tìm kiếm không tồn tại.</h3>
            <Link 
                to="/"
                className="back-home"    
            >
                Quay về trang chủ
            </Link>
        </main>
    )
}

export default NotFound;
