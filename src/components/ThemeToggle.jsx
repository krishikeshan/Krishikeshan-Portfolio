import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    };

    return (
        <button
            className="theme-toggle-btn glass-panel"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
        </button>
    );
};

export default ThemeToggle;
