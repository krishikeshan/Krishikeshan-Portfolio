import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaPhp, FaDatabase, FaMicrochip } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiFirebase, SiArduino, SiOpencv, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
    {
        title: "Web & Frameworks",
        skills: [
            { name: "MERN Stack", icon: <FaDatabase />, color: "#4DB33D" },
            { name: "Next.js", icon: <FaReact />, color: "#000000" },
            { name: "TypeScript", icon: <FaReact />, color: "#3178C6" },
            { name: "JavaScript", icon: null, color: "#F0DB4F" },
            { name: "HTML/CSS", icon: null, color: "#E34F26" }
        ]
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "ML Models", icon: <SiTensorflow />, color: "#FF6F00" },
            { name: "Python", icon: <FaPython />, color: "#3776AB" }
        ]
    },
    {
        title: "Languages & Tools",
        skills: [
            { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
            { name: "C", icon: null, color: "#A8B9CC" },
            { name: "Java", icon: null, color: "#007396" },
            { name: "PHP", icon: <FaPhp />, color: "#777BB4" }
        ]
    }
];

const Skills = () => {
    return (
        <section className="skills-section section-padding" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-header-center"
            >
                <h2 className="section-title">Technical Arsenal</h2>
                <div className="section-line"></div>
            </motion.div>

            <div className="skills-grid">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="category-skills">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-card glass-panel"
                                    whileHover={{ y: -5, borderColor: skill.color }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 + catIndex * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
