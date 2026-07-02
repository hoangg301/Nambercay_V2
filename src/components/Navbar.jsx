import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CONTACT } from "../data/contact";
import "../styles/Navbar.css";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import logo from "../assets/logo.webp";
import "@fontsource-variable/bodoni-moda/wght-italic.css";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="brand">
                <img
                    src={logo}
                    alt="Logo Nambercay"
                    loading="eager"
                    className="brand-logo"
                />
                <Link 
                    to="/"
                    className="brand-name"
                >
                    Nambercay
                </Link>
            </div>

            <button 
                className="menu"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink 
                    to="/" 
                    onClick={closeMenu}
                    className={({isActive}) => isActive ? "active" : ""}
                >
                    Khám Phá
                </NavLink>
                <NavLink 
                    to="/collection" 
                    onClick={closeMenu}
                    className={({isActive}) => isActive ? "active" : ""}
                >
                    Bộ Sưu Tập
                </NavLink>
                <NavLink 
                    to="/about" 
                    onClick={closeMenu}
                    className={({isActive}) => isActive ? "active" : ""}
                >
                    Giới Thiệu
                </NavLink>
                <NavLink 
                    to="/contact" 
                    onClick={closeMenu}
                    className={({isActive}) => isActive ? "active" : ""}
                >
                    Liên Hệ
                </NavLink>
            </div>

            <div className="nav-cta">
                <a
                    href={CONTACT.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Messenger"
                >
                    <FaFacebookMessenger className="nav-mess-icon" />
                </a>
                <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebook className="nav-fb-icon" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
