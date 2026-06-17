import React from 'react';
// eslint-disable-next-line no-unused-vars
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
                        Undergraduate — BSc in Computer Science with Artificial Intelligence (NIBM, 2023–Present)
                    </h3>
                </motion.div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Motivated, analytical, and eager to begin a career as a Software Engineer — focused on machine learning, web development, and delivering efficient solutions.
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
