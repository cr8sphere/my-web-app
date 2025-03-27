// src/components/Designs.jsx
import React from 'react';
import '../styles/Designs.css';

const Designs = () => {
    return (
        <div className="designs-container">
            <h2>Our In-House Designs</h2>
            <div className="designs-scroll">
                <div className="design-image">
                    <img src="/images/design1.png" alt="Design 1 - Wall with sketches" />
                </div>
                <div className="design-image">
                    <img src="/images/design2.png" alt="Design 2 - Desk with phone and plant" />
                </div>
                <div className="design-image">
                    <img src="/images/design3.png" alt="Design 3 - Laptop with code" />
                </div>
                <div className="design-image">
                    <img src="/images/design4.png" alt="Design 4 - Desk with laptop and monitor" />
                </div>
            </div>
            <button className="explore-btn">Explore More</button>
        </div>
    );
};

export default Designs;