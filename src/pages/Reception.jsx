import React, { useRef, useEffect } from "react";
import styles from "../styles/reception.module.css";
import OllieP1 from "../assets/pngs/pw2.jpg";
import OllieP2 from "../assets/pngs/pw3.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
const Reception = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 100px 700px 0px"} );

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sec1}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={ref}
            className={styles.imgWrapper}
          >
            <img src={OllieP1} alt="" className={styles.img} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.8 }}
            ref={ref}
            className={styles.headerText}
          >
            Ceremony
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.8 }}
            ref={ref}
            className={styles.para}
          >
            Saturday, April 6, <br />- : - am.
          </motion.p>
        </div>

        <div className={styles.sec2}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={ref}
            className={styles.imgWrapper}
          >
            <img src={OllieP2} alt="" className={styles.img} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 , delay: 0.8 }}
            ref={ref}
            className={styles.headerText}
          >
            Reception
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.8 }}
            ref={ref}
            className={styles.para}
          >
            Saturday, April 6, <br />
            - : - am. <br />
            (After the Ceremony)
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Reception;
