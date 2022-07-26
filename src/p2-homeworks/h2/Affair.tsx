import React from "react";
import { AffairType } from "./HW2";
import styles from "./Affairs.module.css";
import cross from "./cross.svg";

type AffairPropsType = {
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  return (
    <div className={styles.task}>
      <div className={styles.task_content}>
        <div className={styles.task_title}>{props.affair.name}</div>
        <div
          className={`${styles.task_priority} ${
            props.affair.priority === "high"
              ? styles.task_priorityRed
              : props.affair.priority === "middle"
              ? styles.task_priorityYellow
              : styles.task_priorityGreen
          }`}
        >
          {props.affair.priority}
        </div>
      </div>
      <button className={styles.task_btn} onClick={deleteCallback}>
        <img src={cross} alt="delete button" />
      </button>
    </div>
  );
}

export default Affair;
