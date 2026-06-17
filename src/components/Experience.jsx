import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer (Intern)',
      org: 'University of Peradeniya, Information Technology Centre',
      period: 'Jul 2025 – Jan 2026',
      details: 'Worked on internal tooling and web solutions to improve administrative workflows and reporting.'
    }
  ];

  return (
    <section className="experience-section section-padding" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header-center"
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="experience-list">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-item glass-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-org">{exp.org}</div>
            <p className="exp-details">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
