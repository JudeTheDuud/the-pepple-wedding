import React, { useEffect, useRef } from "react";
import styles from "../styles/celebration.module.css";
import Ring from "../assets/svgs/ring2.svg";
import { useInView, motion, useAnimation } from "framer-motion";
const Celebration = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 100px -70px 0px" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
    
      className={styles.container}>
      <motion.div 
      
      variants={{
        hidden: {opacity: 0 } ,
        visible: {opacity: 1 }
      }}
  
      initial = "hidden"
      animate = {mainControls}
      transition={{ duration: 0.8, delay: 1}}
       ref={ref}
      
      
      className={styles.wrapper}>
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
            We are delighted to invite you to <br /> the celebration of our
            marriage
          </div>
          <p className={styles.para}>
            Join us for the happiest day of our lives as Mickey & Ollie tie the
            knot! We can't wait to celebrate with you and share our love and
            joy. RSVP soon and let the party begin
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Celebration;
