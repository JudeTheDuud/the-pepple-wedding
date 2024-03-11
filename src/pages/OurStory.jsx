import React, {useEffect, useRef} from "react";
import styles from "../styles/ourStory.module.css";
import OllieP from '../assets/pngs/pw1.jpg'
import { useInView, motion, useAnimation } from "framer-motion";

const OurStory = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.storyText}>
          <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 , delay: 0.8 }}
          
          >
            Our Love <br />
            Story
          </motion.div>
          <motion.p 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 , delay: 1.2 }}
          ref={ref}
          className={styles.dinner}>
            Take us out to dinner when we are in your city and we will entertain
            you with every  version of this beautiful love story😝
          </motion.p>

          <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0 , x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 , delay: 1.5 }}          
          className={styles.storyFacts}>
            Till then check out the facts we agree on{" "}
            <span className={styles.factLink}>here</span>
          </motion.p>
        </div>

        <div className={styles.storyImgWrapper}>
            <img src={OllieP} alt="" className={styles.storyImg}/>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
