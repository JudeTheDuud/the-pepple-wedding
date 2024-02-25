import React from 'react'
import styles from '../styles/colors.module.css'

const Colors = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.sec1}>
                <div className={styles.qaSect}>
                <h6>Have Some Questions?</h6>
                <button className={styles.qaButton}>Q&A</button>
                </div>
                
            </div>
            <div className={styles.sec2}>
                <div className={styles.colorSect}>
                <h6>Wedding Colors</h6>
                <p>The colors of the wedding are Black, Gold and Champagne.</p>
                <div className={styles.dotWrapper}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colors