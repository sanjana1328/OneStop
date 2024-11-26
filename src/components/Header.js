// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        navigate('/'); // Navigate to Home
        setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the Home section
            }
        }, 100); // Delay to ensure navigation completes
    };

    const handleAboutClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        navigate('/'); // Navigate to Home
        setTimeout(() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the About section
            }
        }, 100); // Delay to ensure navigation completes
    };

    return (
        <header className="header">
            <div className="logo"></div>
            <nav className="navs">
                <a href="/" id="links" onClick={handleHomeClick}>Home</a> {/* Smooth scroll to Home */}
                <a href="/about" id="links" onClick={handleAboutClick}>About</a> {/* Smooth scroll to About */}
                <a href="/contact" id="links" onClick={handleAboutClick}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
