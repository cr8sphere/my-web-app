// src/components/Services.jsx
import React from 'react';
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h2>How can we help you?</h2>
                <p>We offer a full spectrum of creative solutions to help your brand stand out.</p>
            </div>

            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">📐</div>
                    <h3>Graphic & Motion Design</h3>
                    <p>Eye-catching graphics, social media creatives, and motion designs for impact.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">🖥️</div>
                    <h3>Website & UI/UX Design</h3>
                    <p>Custom, user-friendly websites with intuitive designs for a great online experience.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">📣</div>
                    <h3>Marketing & Advertising</h3>
                    <p>Social media, SEO, and ad campaigns tailored to boost reach and engagement.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">💡</div>
                    <h3>Branding & Identity</h3>
                    <p>We craft logos, brand guidelines, and visual identity that define your business.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">📚</div>
                    <h3>Content & Digital Publishing</h3>
                    <p>Blogs, eBooks, and digital content that inform, inspire, and connect audiences.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">🛠️</div>
                    <h3>Help & Support</h3>
                    <p>Dedicated support to ensure smooth execution and assistance whenever needed.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;