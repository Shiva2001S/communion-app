import React from 'react'
import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router';
const Hero = () => {
    const navigate = useNavigate();
    const handle = () => {
        navigate('/event');
    }
    return (
        <div>
            <h1>
                Connecting People Across Faiths & Interests
            </h1>
            <p className={styles.second}>Communion App is a platform designed to connect people of all faiths through meaningful events and community engagement. Whether you're looking for religious gatherings, social meetups, or charity events, Communion App helps you discover, filter, and add events effortlessly. Join us in fostering inclusivity, connection, and shared experiences.</p>
            <button className={styles.navigates} onClick={handle}>Explore Events</button>
        </div>
    )
}

export default Hero
