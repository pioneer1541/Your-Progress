import { useState } from "react";
import { useDispatch } from "react-redux";
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
    fetch(process.env.REACT_APP_BACKEND_URL + "/task/new-task", {
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
        if (result.state) {
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
        } else {
          setMessageData({
            title: "Failed!",
            content: result.message,
          });
          setMessage(true);
          setShowNewTaskModal(false);
        }
      });
  };
  return (
    <div className={"nav-item mx-auto"}>
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
        <a
          className="text-white btn-lg btn btn-dark"
          onClick={newProgressHandler}
        >
          <i className="fas fa-plus-circle"></i> New Task
        </a>
      </div>
    </div>
  );
};

export default ProgressAdd;
