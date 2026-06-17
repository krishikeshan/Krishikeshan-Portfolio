import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: "Health Assessment System",
        description: "Web-based health monitoring and analysis platform for students. Built with ReactJS and Node.js to collect and evaluate key health parameters, providing administrators insight and reporting.",
        tags: ["React", "Node.js", "Firebase", "Health"],
        repo: "",
        demo: ""
    },
    {
        title: "Card Managing System",
        description: "Card payment management dashboard for tracking physical and virtual cards with clear status badges and streamlined creation and management workflows.",
        tags: ["Dashboard", "Payments", "React", "UI"],
        repo: "",
        demo: ""
    },
    {
        title: "Personal Portfolio",
        description: "Responsive personal portfolio website showcasing projects, skills, case studies, and contact information. Optimized for accessibility and performance.",
        tags: ["React", "Accessibility", "SEO", "Design"],
        repo: "",
        demo: ""
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
                            {project.repo ? (
                                <a href={project.repo} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><FaGithub /></a>
                            ) : (
                                <span className="icon-link disabled" aria-hidden="true"><FaGithub /></span>
                            )}

                            {project.demo ? (
                                <a href={project.demo} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                            ) : (
                                <span className="icon-link disabled" aria-hidden="true"><FaExternalLinkAlt /></span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
