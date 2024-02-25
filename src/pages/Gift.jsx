import React from "react";
import styles from "../styles/gift.module.css";
const Gift = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gift}>
          <div>Gift Registry</div>
          <p>
            At our wedding, we kindly ask that if you would like to give a gift,
            please consider a cash registry. Any wedding gifts should be
            converted to cash gift through our registry link below. We thank you
            for your generosity and support of our special day. Please click the
            link below for more information.{" "}
          </p>

          <button className={styles.giftButton}>Gift the Couple</button>
        </div>
      </div>
    </div>
  );
};

export default Gift;
