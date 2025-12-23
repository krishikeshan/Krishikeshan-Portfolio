import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMicrochip, FaBrain } from 'react-icons/fa';
import './DailyWork.css';

const activities = [
    {
        type: 'Building',
        title: 'Real-time Heart Rate & SPO2 System',
        icon: <FaMicrochip />,
        time: 'Now',
        status: 'active'
    },
    {
        type: 'Learning',
        title: 'Advanced Deep Learning Architectures',
        icon: <FaBrain />,
        time: '2h ago',
        status: 'completed'
    },
    {
        type: 'Refactoring',
        title: 'Portfolio Design System',
        icon: <FaCode />,
        time: '4h ago',
        status: 'completed'
    }
];

const DailyWork = () => {
    return (
        <section className="daily-work-section section-padding">
            <div className="daily-work-container glass-panel">
                <div className="daily-header">
                    <h3 className="section-subtitle">Live Activity Log</h3>
                    <div className="live-indicator">
                        <span className="pulsing-dot"></span>
                        Online
                    </div>
                </div>

                <div className="activity-feed">
                    {activities.map((item, index) => (
                        <motion.div
                            className={`activity-item ${item.status === 'active' ? 'active-item' : ''}`}
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="activity-icon">
                                {item.icon}
                            </div>
                            <div className="activity-details">
                                <span className="activity-type">{item.type}</span>
                                <h4 className="activity-title">{item.title}</h4>
                            </div>
                            <span className="activity-time">{item.time}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DailyWork;
