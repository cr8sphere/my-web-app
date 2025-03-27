// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Company Logo and Description */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <span>Digital Agency</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">🌐</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼</a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Business Links */}
                <div className="footer-column">
                    <h3>Business</h3>
                    <ul>
                        <li><a href="/project">Project</a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/facts">Facts</a></li>
                        <li><a href="/customers">Customers</a></li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className="footer-column">
                    <h3>Get in Touch</h3>
                    <p>1111 Vadodara, Gujarat</p>
                    <p>Vadodara, Gujarat</p>
                    <p>akshay@cr8sphere.in</p>
                    <p>+001 987-654-3210</p>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="footer-bottom">
                <p>Copyright © 2025 Cre8sphere Creative | Akshay Nair, Founder and CEO</p>
            </div>
        </footer>
    );
};

export default Footer;