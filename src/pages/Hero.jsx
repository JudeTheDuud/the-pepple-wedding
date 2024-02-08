import React from 'react'
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heroContainer}>
            <h1 className={styles.headerText}>IT`S TODAY</h1>
            <div className={styles.bridegroom}>JASMINE <br />
            & MICHAEL</div>
           <p className={styles.hashtag}>#THEPEPPLEWEDDING</p>

           <div className={styles.dateContainer}>
            <div className={styles.dateWrapper}>
            Saturday, <br /> April 6, 2024
            </div>
            <div className={styles.vl}></div>

            <div className= {styles.state}>Port-Harcourt, <br /> Nigeria.</div>

           </div>
        </div>

        
    </div>
  )
}

export default Hero