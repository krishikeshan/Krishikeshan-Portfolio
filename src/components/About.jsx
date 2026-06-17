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
                        Motivated individual with strong analytical and communication skills, eager to begin a career in the IT industry as a Software Engineer.
                    </p>
                    <p>
                        Proficient in data analysis, problem-solving, and handling complex information with integrity. A quick learner with a keen interest in machine learning, artificial intelligence, and web development.
                    </p>
                    <p>
                        Committed to delivering efficient solutions and contributing to the success of a forward-thinking tech organization.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-value">BSc</span>
                            <span className="stat-label">Computer Science</span>
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
