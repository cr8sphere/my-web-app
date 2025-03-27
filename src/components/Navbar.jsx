// src/components/Navbar.jsx
// Importing React library to enable JSX syntax and component functionality
import React from 'react';
// Importing CSS file to apply styles specific to the Navbar component
import '../styles/Navbar.css';

// Defining a functional component named Navbar using arrow function syntax
const Navbar = () => {
    // Returning JSX that defines the navigation bar structure
    return (
        // Navigation element with class name for styling the navbar
        <nav className="navbar">

            <div className="navbar-logo">

                <img src="/logo.png" alt="Digital Agency Logo" />

                <span>Digital Agency</span>
            </div>

            <ul className="navbar-links">

                <li><a href="/">Home</a></li>

                <li><a href="/about">About</a></li>

                <li><a href="/services">Services</a></li>

                <li><a href="/contact">Contact</a></li>

                <li>

                    <button className="request-quote-btn">Request Quote</button>
                </li>
            </ul>
        </nav>
    );
};

// Exporting the Navbar component as default export for use in other files
export default Navbar;