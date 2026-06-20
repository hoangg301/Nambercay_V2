import { useState } from 'react';
import { Link } from 'react-router-dom';
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

            {menuOpen && (
                <div className="nav-links">
                    <Link to="/" onClick={closeMenu}>Khám Phá</Link>
                    <Link to="/collection" onClick={closeMenu}>Bộ Sưu Tập</Link>
                    <Link to="/about" onClick={closeMenu}>Giới Thiệu</Link>
                    <Link to="/contact" onClick={closeMenu}>Liên Hệ</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
