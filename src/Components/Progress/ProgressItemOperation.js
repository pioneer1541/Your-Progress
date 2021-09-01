import { useState } from "react";
import Button from "../Layout/Button";
import TaskCard from "../UI/TaskCard";
import styles from "./ProgressItemOperation.module.css";

const ProgressItemOperation = (props) => {
  const [updateShow, setUpdateShow] = useState(false);
  const getDMY = (dateValue) => {
    dateValue = new Date(dateValue)
    return {
      day: dateValue.getDate() < 10 ? '0'+ dateValue.getDate():dateValue.getDate(),
      month:dateValue.getMonth()+1 < 10 ? '0' + (dateValue.getMonth()+1):dateValue.getMonth()+1,
      year:dateValue.getFullYear()
    }
  }

  const startDate = getDMY(props.startDate)
  const endDate = getDMY(props.endDate)
  const updateEventHandler = () => {
    setUpdateShow(true);
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.operation}>
        {updateShow && (
          <TaskCard
            id={props.id}
            title={props.title}
            startDate={startDate}
            endDate={endDate}
            changeModalHandler={setUpdateShow}
          ></TaskCard>
        )}
        <Button name="Edit" event={updateEventHandler}></Button>
        <Button name="Delete"></Button>
      </div>
    </div>
  );
};

export default ProgressItemOperation;
