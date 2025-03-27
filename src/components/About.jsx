// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* Behind Cre8sphere Creative Section */}
            <div className="behind-section">
                <h2>Behind Cre8sphere Creative</h2>
                <p>
                    We are a team of innovators, designers, and storytellers dedicated to delivering exceptional creative solutions. Our passion for design and storytelling fuels everything we do.
                </p>
            </div>

            {/* Meet the Team Section */}
            <div className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-scroll">
                    <div className="team-member">
                        <img src="/images/design3.png" alt="Meet the Team - 1" className="team-image" />
                        <p className="team-name">Team Member 1</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/design3.png" alt="Meet the Team - 2" className="team-image" />
                        <p className="team-name">Team Member 2</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/design3.png" alt="Meet the Team - 3" className="team-image" />
                        <p className="team-name">Team Member 3</p>
                    </div>
                </div>
            </div>

            {/* What We Stand For Section */}
            <div className="values-section">
                <h2>What We Stand For</h2>
                <p>We believe in creativity, innovation, and making a lasting impact through design and storytelling.</p>
                <div className="values-grid">
                    <div className="value-item">
                        <div className="value-icon">✔</div>
                        <h3>Creativity</h3>
                        <p>Bringing fresh ideas to life.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">✔</div>
                        <h3>Quality</h3>
                        <p>Attention to detail in every project.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">✔</div>
                        <h3>Innovation</h3>
                        <p>Staying ahead of trends.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">✔</div>
                        <h3>Collaboration</h3>
                        <p>Working closely with clients for the best results.</p>
                    </div>
                </div>
            </div>

            {/* Your Brand, Our Creativity Section */}
            <div className="cta-section">
                <div className="cta-content">
                    <div className="cta-text">
                        <h2>Your Brand, Our Creativity!</h2>
                        <p>Innovate, design, and grow with us.</p>
                    </div>
                    <button className="cta-btn">Start Your Journey</button>
                </div>
            </div>
        </div>
    );
};

export default About;