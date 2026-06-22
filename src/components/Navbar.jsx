import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.webp';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} alt="Nambercay Logo" className="logo" />
                <span className="brand-name">Nambercay</span>
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
        </nav>
    );
}

export default Navbar;
