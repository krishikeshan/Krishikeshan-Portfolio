import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="about-section section-padding" id="about" ref={ref}>
            <motion.div
                className="about-header"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.6 }}
            >
                <span className="section-number neon-text">01</span>
                <h2 className="section-title">The Narrative</h2>
            </motion.div>

            <div className="about-content">
                <motion.div
                    className="about-text glass-panel"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="highlight-text">
                        I am not just writing code; I am engineering digital evolution.
                    </p>
                    <p>
                        Based in Kandy, Sri Lanka, I am a 3rd-year Computer Science student with a deep focus on
                        <span className="text-white"> Artificial Intelligence</span> and <span className="text-white">Software Development</span>.
                    </p>
                    <p>
                        My journey is defined by a relentless curiosity—from automating smart agriculture systems to training
                        deep learning models for sign language recognition. I view technology as a tool to solve real-world problems.
                    </p>
                    <p>
                        I operate with an entrepreneurial mindset. Whether it's a medical chatbot or a real-time health monitoring system,
                        my goal is always the same: <span className="neon-text">Build meaningful technology.</span>
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-value">CS</span>
                            <span className="stat-label">Major</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">AI</span>
                            <span className="stat-label">Focus</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">SL</span>
                            <span className="stat-label">Location</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-visual"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="cube-container">
                        <div className="cube">
                            <div className="face face-front"></div>
                            <div className="face face-back"></div>
                            <div className="face face-right"></div>
                            <div className="face face-left"></div>
                            <div className="face face-top"></div>
                            <div className="face face-bottom"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
