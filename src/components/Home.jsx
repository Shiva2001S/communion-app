import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css';
import Hero from './Hero';
import { toast, ToastContainer } from 'react-toastify';
const Home = () => {
    useEffect(() => {
        document.title = 'Communion';
        toast.success("Welcome to Communion App.");
    }, []);
    return (
        <div>
            <div className={styles.first}>
                <Hero/>
            </div>
            <div className={styles.images}>
                <img src="https://photos.peopleimages.com/picture/202304/2684953-business-people-portrait-smile-and-team-collaboration-in-meeting-strategy-or-planning-at-office.-diverse-group-of-happy-employees-working-together-in-teamwork-for-corporate-plan-or-goal-at-workplace-fit_400_400.jpg" alt="" />
                <img src="https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=" alt="" />
                <img src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=" alt="" />
                <img src="https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=dojtkf9ItX21j3jtlGOGpbKDs320TTAuofoGnNSZD8Y=" alt="" />
            </div>
            <ToastContainer className={styles.toast} theme="colored" position="top-right" />
        </div>
    )
}

export default Home
