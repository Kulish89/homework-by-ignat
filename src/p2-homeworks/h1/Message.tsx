import React from "react";
import styles from "./Message.module.css";
export type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};
function Message({ avatar, name, message, time }: MessagePropsType) {
  return (
    <div className={styles.message}>
      <div className={styles.message_avatar}>
        <img src={avatar} alt="User photo" />
      </div>
      <div className={styles.message_content}>
        <div className={styles.message_userInfo}>
          <h5>{name}:</h5>
          <p>{message}</p>
        </div>
        <div className={styles.message_time}>
          <span>
            {new Date().getHours()}:
            {new Date().getMinutes() < 10
              ? `0${new Date().getMinutes()}`
              : new Date().getMinutes()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
