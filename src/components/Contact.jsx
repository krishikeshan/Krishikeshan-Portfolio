import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = `mailto:krishikeshanragunathan@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact-section section-padding" id="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="contact-container"
            >
                <h2 className="section-title text-center">Initiate Protocol</h2>
                <p className="contact-subtitle text-center">Ready to build something meaningful?</p>

                <div className="contact-actions">
                    <a href="mailto:krishikeshanragunathan@gmail.com" className="email-button">
                        <FaEnvelope /> Send Transmission
                    </a>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/krishikeshan" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    </div>
                </div>

                <form className="contact-form glass-panel" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Input parameters..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn primary">Execute</button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
