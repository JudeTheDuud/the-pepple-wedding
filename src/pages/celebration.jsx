import React from "react";
import styles from "../styles/celebration.module.css";
import Ring from "../assets/svgs/ring2.svg";
const celebration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.date}>
          <h2>The Wedding Celebration</h2>
          <p>
            Saturday, <br />
            April 6, 2024
          </p>
        </div>

        <div className={styles.ringWrap}>
         <img src={Ring} alt="" className={styles.ring} />
        </div>

        <div className={styles.info}>
          <div className={styles.infoHeader}>
            We are delighted to invite you to <br /> the celebration of our marriage
          </div>
          <div className={styles.para}>
            Join us for the happiest day of our lives as Mickey & Ollie tie the
            knot! We can't wait to celebrate with you and share our love and
            joy. RSVP soon and let the party begin
          </div>
        </div>
      </div>
    </div>
  );
};

export default celebration;
