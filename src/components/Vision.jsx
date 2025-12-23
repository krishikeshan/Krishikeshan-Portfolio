import React from 'react';
import { motion } from 'framer-motion';
import './Vision.css';

const Vision = () => {
    return (
        <section className="vision-section section-padding">
            <motion.div
                className="vision-content glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="vision-label neon-text">The Vision</span>
                <h2 className="vision-heading">
                    Engineering the <br />
                    <span className="gradient-text">Autonomous Future</span>
                </h2>
                <p className="vision-text">
                    We are standing on the precipice of a new era. Artificial Intelligence is no longer just software;
                    it is becoming the nervous system of our physical world.
                </p>
                <p className="vision-text">
                    My mission is to bridge the gap between <strong>intelligent algorithms</strong> and <strong>tactile reality</strong>.
                    I build systems that don't just compute—they act, sense, and improve.
                </p>
                <div className="vision-goals">
                    <div className="goal-item">
                        <span className="goal-number">01</span>
                        <h4>AI-Driven Hardware</h4>
                    </div>
                    <div className="goal-item">
                        <span className="goal-number">02</span>
                        <h4>Scalable Automation</h4>
                    </div>
                    <div className="goal-item">
                        <span className="goal-number">03</span>
                        <h4>Social Impact</h4>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Vision;
