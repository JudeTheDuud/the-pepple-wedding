"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/hero.module.css";
import { useInView, motion, useAnimation } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <h1 className={styles.headerText}>IT`S TODAY</h1>
        <div className={styles.bridegroom}>
          JASMINE <br />& MICHAEL
        </div>
        <p className={styles.hashtag}>#THEPEPPLEWEDDING</p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.5 }}
          ref={ref}
          className={styles.dateContainer}
        >
          <div className={styles.dateWrapper}>
            Saturday, <br /> April 6, 2024
          </div>
          <div className={styles.vl}></div>

          <div className={styles.state}>
            Port-Harcourt, <br /> Nigeria.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
