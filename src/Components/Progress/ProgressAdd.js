import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import MessageModal from "../UI/MessageModal";
import TaskCard from "../UI/TaskCard";
import styles from "./ProgressAdd.module.css";

const ProgressAdd = (props) => {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [message, setMessage] = useState(false);
  const newProgressHandler = () => {
    setShowNewTaskModal(true);
  };
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [messageData, setMessageData] = useState({
    title: "",
    content: "",
  });
  const fetchNewTask = (task) => {
    fetch("http://localhost:5000/task/new-task", {
      method: "POST",
      mode: "cors",
      headers: {
        auth: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => (res = res.json()))
      .then((result) => {
        dispatch({
          type: "taskAddOne",
          task: result,
        });
        setMessageData({
          title: "Success!",
          content: "You have created a new Task: [ " + result.title + " ]",
        });
        setMessage(true);
        setShowNewTaskModal(false);
      });
  };
  return (
    <div className={styles.main}>
      <div></div>
      <div className={styles.actions}>
        {message && (
          <MessageModal
            closeHandler={setMessage}
            title={messageData.title}
            content={messageData.content}
          ></MessageModal>
        )}
        {showNewTaskModal && (
          <TaskCard
            action="Create"
            confirmHandle={fetchNewTask}
            changeModalHandler={setShowNewTaskModal}
          ></TaskCard>
        )}
        <h4>would you like to start a new progress task?</h4>
        <Button name="New Progress" event={newProgressHandler}></Button>
      </div>
      <div></div>
    </div>
  );
};

export default ProgressAdd;
