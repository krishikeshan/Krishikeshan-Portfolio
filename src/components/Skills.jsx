import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaPhp, FaDatabase, FaMicrochip } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiFirebase, SiArduino, SiOpencv, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
    {
        title: "Artificial Intelligence",
        skills: [
            { name: "Python", icon: <FaPython />, color: "#3776AB" },
            { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
            { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
            { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" }
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "React", icon: <FaReact />, color: "#61DAFB" },
            { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
            { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
            { name: "SQL", icon: <FaDatabase />, color: "#4479A1" }
        ]
    },
    {
        title: "IoT & Embedded",
        skills: [
            { name: "ESP32", icon: <FaMicrochip />, color: "#E7352C" }, // Generic chip for ESP
            { name: "Arduino", icon: <SiArduino />, color: "#00979D" },
            { name: "C++", icon: <SiCplusplus />, color: "#00599C" }
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
