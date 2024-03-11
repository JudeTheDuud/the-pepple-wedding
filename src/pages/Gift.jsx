import React, {useRef, useEffect} from "react";
import styles from "../styles/gift.module.css";
import { useInView, motion, useAnimation } from "framer-motion";
const Gift = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,  margin: "0px 100px -50px 0px" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 , delay: 1.2 }}
        className={styles.gift}>
          <div>Gift Registry</div>
          <p>
            At our wedding, we kindly ask that if you would like to give a gift,
            please consider a cash registry. Any wedding gifts should be
            converted to cash gift through our registry link below. We thank you
            for your generosity and support of our special day. Please click the
            link below for more information.{" "}
          </p>

          <button className={styles.giftButton}>Gift the Couple</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gift;
