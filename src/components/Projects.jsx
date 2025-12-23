import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: "Real-time Heart Rate & SPO2 Monitoring",
        description: "IoT-based health system utilizing ESP32 to transmit vital signs to Firebase in real-time, accessible via a custom web dashboard.",
        tags: ["ESP32", "Firebase", "React", "IoT"],
        link: "https://github.com/krishikeshan"
    },
    {
        title: "Sign Language Recognition App",
        description: "Deep learning application capable of recognizing 36 distinct sign language classes with high accuracy using a custom CNN model.",
        tags: ["Deep Learning", "Python", "TensorFlow", "OpenCV"],
        link: "https://github.com/krishikeshan"
    },
    {
        title: "AI-Powered Automated Pen Plotter",
        description: "A precision robotics project that converts digital vector graphics into physical drawings using custom path-planning algorithms.",
        tags: ["Robotics", "Arduino", "C++", "Algorithm Design"],
        link: "https://github.com/krishikeshan"
    },
    {
        title: "Smart Agriculture Automation",
        description: "Poly-tunnel environment control system that regulates temperature and humidity automatically for optimal crop growth.",
        tags: ["Automation", "Sensors", "IoT", "Embedded Systems"],
        link: "https://github.com/krishikeshan"
    },
    {
        title: "Medical Diagnostic Chatbot",
        description: "Rule-based expert system designed to assist in preliminary medical diagnosis based on symptom analysis.",
        tags: ["AI", "NLP", "Expert Systems", "Web"],
        link: "https://github.com/krishikeshan"
    }
];

const Projects = () => {
    return (
        <section className="projects-section section-padding" id="projects">
            <motion.div
                className="section-header-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Selected Works</h2>
                <div className="section-line"></div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card glass-panel"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a href={project.link} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><FaGithub /></a>
                            <a href={project.link} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
