import React from "react";
import styles from "../styles/reception.module.css";
import OllieP1 from "../assets/pngs/pw2.jpg";
import OllieP2 from "../assets/pngs/pw3.jpg";

const Reception = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sec1}>
          <div className={styles.imgWrapper}>
            <img src={OllieP1} alt="" className={styles.img} />
          </div>

          <div className={styles.headerText}>Ceremony</div>
          <p className={styles.para}>
            Saturday,
            April 6, <br />
            - : - am.
          </p>
        </div>

        <div className={styles.sec2}>
          <div className={styles.imgWrapper}>
            <img src={OllieP2} alt="" className={styles.img} />
          </div>

          <div className={styles.headerText}>Reception</div>
          <p className={styles.para}>
          Saturday,
            April 6, <br />
            - : - am. <br />
            (After the Ceremony)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reception;
