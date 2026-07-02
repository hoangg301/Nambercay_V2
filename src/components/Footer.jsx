import { Link } from "react-router-dom";
import { CONTACT } from "../data/contact";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import "../styles/Footer.css";


function Footer() {
  return (
    <footer className="footer">
        <h2 className="footer-logo">
          Nambercay · Hà Nội, Việt Nam
        </h2>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              Điều hướng
            </h3>
            <Link to="/collection">
              Bộ Sưu Tập
            </Link>
            <Link to="/about">
              Giới Thiệu
            </Link>
            <Link to="/contact">
              Liên Hệ
            </Link>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">
              Kết Nối
            </h3>
            <div className="footer-socials">
              <a
                href={CONTACT.messenger}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Messenger"
              >
                <FaFacebookMessenger className="footer-mess-icon" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="footer-fb-icon" />
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copyright">
          © 2026 Nambercay
        </p>
    </footer>
  );
}

export default Footer;
