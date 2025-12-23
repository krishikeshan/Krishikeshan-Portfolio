import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="hero-intro neon-text">System Online</h2>
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                >
                    Krishikeshan
                </motion.h1>

                <motion.div
                    className="hero-title-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <h3 className="hero-title gradient-text">
                        AI Technologist <span className="separator">/</span> Entrepreneur <span className="separator">/</span> Builder
                    </h3>
                </motion.div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Forging the future with Artificial Intelligence and Embedded Systems.
                    <br />Currently building real-world solutions in Kandy, Sri Lanka.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <a href="#projects" className="cta-button primary" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Explore Data</a>
                    <a href="#contact" className="cta-button secondary" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Initiate Contact</a>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Scroll to Decrypt</span>
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
