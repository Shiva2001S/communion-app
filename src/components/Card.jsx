import React from 'react'
import styles from '../styles/Card.module.css';
const Card = ({ title, desc, date, loc, cat }) => {
  return (
    <div className={styles.first}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>
        Date : <h3>{date}</h3>
      </div>
      <div>
        Location : <h3>{loc}</h3>
      </div>
      <h3>{cat}</h3>
    </div>
  )
}

export default Card
