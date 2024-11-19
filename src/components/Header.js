// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="logo">LOGO</div>
        <nav className="navs">
                <Link to="/" id="links">Home</Link>
                <Link to="/about" id="links">About</Link>
                <Link to="/contact" id="links">Contact</Link>
        </nav>
    </header>
);

export default Header;