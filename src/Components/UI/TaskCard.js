import Button from "./Button";
import styles from "./TaskCard.module.css";
import ReactDOM from "react-dom";
import { Fragment, useState } from "react";

const TaskCard = (
  props = {
    id: "",
    title: "",
    startDate: "",
    endDate: "",
  }
) => {
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  let task = props;
  let newTask = {
    id: props.id,
    title: props.title,
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const getInput = (event) => {
    switch (event.target.name) {
      case "title":
        newTask.title = event.target.value;
        break;
      case "startDate":
        newTask.startDate = event.target.value;
        break;
      case "endDate":
        newTask.endDate = event.target.value;
        break;
      default:
        break;
    }
  };

  const inputIsValid = () => {
    if (newTask.title.length < 1) {
      setWarningMessage("The title can not be empty!");
      setWarning(true);
      return false;
    }
    if (newTask.startDate > newTask.endDate) {
      setWarningMessage("The Start Date must be early than End Dte!");
      setWarning(true);
      return false;
    }
    if (new Date(newTask.endDate) < Date.now()) {
      setWarningMessage("The End Date must be later than today!");
      setWarning(true);
      return false;
    }
    return true;
  };

  const closeButtonHandler = () => {
    props.changeModalHandler((prevState) => !prevState);
  };
  const confirmButtonHandle = () => {
    if (inputIsValid()) {
      console.log(12321)
      props.confirmHandle(newTask);
    }
  };
  const Modal = (props) => {
    return (
      <div className={styles.card}>
        <div className={styles.backdrop}></div>
        <div className={styles.modal} id="modal">
          <div className={styles.header}>
            <h2>{props.action} Task</h2>
          </div>
          <div className={styles.content}>
            <form className={styles.form}>
              <label className="my-2">Title: </label>
              <input
                type="text"
                name="title"
                defaultValue={props.task.title}
                onChange={getInput}
              ></input>
              <label className="my-2">Start Date: </label>
              <input
                defaultValue={props.task.startDate}
                name="startDate"
                type="date"
                onChange={getInput}
              ></input>
              <label className="my-2">End Date: </label>
              <input
                defaultValue={props.task.endDate}
                name="endDate"
                type="date"
                onChange={getInput}
              ></input>
            </form>
          </div>
          <div className={styles.actions}>
            <Button name="Close" event={closeButtonHandler}></Button>
            <Button name={props.action} event={confirmButtonHandle}></Button>
          </div>
          {warning && (
            <div className="alert alert-danger">
              <strong>Failed!</strong> {warningMessage}
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal task={task} action={props.action} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default TaskCard;
