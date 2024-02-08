import React from "react";
import styles from "../styles/ourStory.module.css";
import OllieP from '../assets/pngs/img5.jpg'
const OurStory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.storyText}>
          <div>
            Our Love <br />
            Story
          </div>
          <p className={styles.dinner}>
            Take us out to dinner when we are in your <br /> city and we will entertain
            you with every <br /> version of this beautiful love story😝
          </p>

          <p className={styles.storyFacts}>
            Till then check out the facts we agree on{" "}
            <span className={styles.factLink}>here</span>
          </p>
        </div>

        <div className={styles.storyImgWrapper}>
            <img src={OllieP} alt="" className={styles.storyImg}/>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
