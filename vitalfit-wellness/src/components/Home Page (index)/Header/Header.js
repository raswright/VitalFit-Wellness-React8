import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>VitalFit & Wellness</h1>
            <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <nav className="small-nav">
                <ul className="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;