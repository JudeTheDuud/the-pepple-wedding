import React from "react";
import styles from "../styles/message.module.css";
import MsgImg from '../assets/pngs/pw4.jpg'
const Message = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sec1}>
          <div className={styles.msgWrapper}>
            <div className={styles.msgHeader}>
              <h5>Say something to us</h5>
              <p>
                A Prayer, a Psalm, a Scripture, an Advice <br /> or whatever God puts
                in your heart
              </p>
            </div>
            <form action="" className={styles.msgForm}>
              <label htmlFor="name">your name is... *</label>
              <input type="text" />

              <label htmlFor="message" className={styles.msgBoxHeader}>...go on, we are reading *</label>
              <textarea name="message" id="message" cols="30" rows="5" >

              </textarea>

              <button type="submit" className={styles.msgButton}>Submit</button>
            </form>
          </div>
        </div>

        <div className={styles.sec2}>
          <img src={MsgImg} alt=""  className={styles.MsgImg}/>
        </div>
      </div>
    </div>
  );
};

export default Message;
