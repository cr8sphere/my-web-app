// src/components/Home.jsx
// Importing React library to use JSX and component functionality
import React from 'react';
// Importing CSS file to style the Home component
import '../styles/Home.css';

// Defining a functional component named Home using arrow function syntax
const Home = () => {
    // Returning JSX that represents the component's UI
    return (
        // Outer div with class name for styling the entire container
        <div className="home-container">

            <div className="home-content">

                <h2>House of Cre8sphere Creative</h2>

                <h1>Where Creativity Meets Strategy</h1>

                <p>
                    At Cre8sphere Creative, we are more than just a creative agency, we are the in-house creative powerhouse of Cre8sphere Media, bringing innovation, storytelling, and design together. From branding to digital experiences, we craft solutions that elevate businesses and media platforms alike.
                </p>

                <p className="subtext">
                    A part of Cre8sphere Media – a leading digital media network exploring tomorrow’s technology today.
                </p>

                <button className="create-btn">Let's Create</button>
            </div>
        </div>
    );
};

// Exporting the Home component as default export to be used in other files
export default Home;