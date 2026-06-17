import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const schools = [
    {
      degree: 'BSc in Computer Science with Artificial Intelligence',
      school: 'NIBM',
      period: '2023 – Present'
    },
    {
      degree: 'GCE Ordinary & Advanced Level',
      school: 'Trinity College, Kandy',
      period: '2009 – 2023'
    }
  ];

  return (
    <section className="education-section section-padding" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header-center"
      >
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="education-list">
        {schools.map((s, i) => (
          <motion.div
            key={i}
            className="education-item glass-panel"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="edu-degree">{s.degree}</h3>
            <div className="edu-school">{s.school} • <span className="edu-period">{s.period}</span></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
