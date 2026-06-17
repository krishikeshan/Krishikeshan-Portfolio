import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  'Professional Programming Certificate (Python) — Coursera',
  'IBM Generative AI Engineering Professional Certificate — Coursera',
  'Front-End Web Development — University of Moratuwa'
];

const Certifications = () => {
  return (
    <section className="certifications-section section-padding" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header-center"
      >
        <h2 className="section-title">Certifications</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="cert-list">
        {certifications.map((c, i) => (
          <motion.div key={i} className="cert-item glass-panel" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <span className="cert-text">{c}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
