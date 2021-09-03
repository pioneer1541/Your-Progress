import { useState } from "react";
import Button from "../UI/Button";
import TaskCard from "../UI/TaskCard";
import styles from "./ProgressItemOperation.module.css";
import { useDispatch } from "react-redux";
import MessageModal from "../UI/MessageModal";
import ConfirmationModal from "../UI/ConfirmationModal";

const ProgressItemOperation = (props) => {
  const [updateShow, setUpdateShow] = useState(false);
  const [message, setMessage] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [messageData, setMessageData] = useState({
    title: "",
    content: "",
  });
  const getDMY = (dateValue) => {
    dateValue = new Date(dateValue);
    return {
      day:
        dateValue.getDate() < 10
          ? "0" + dateValue.getDate()
          : dateValue.getDate(),
      month:
        dateValue.getMonth() + 1 < 10
          ? "0" + (dateValue.getMonth() + 1)
          : dateValue.getMonth() + 1,
      year: dateValue.getFullYear(),
    };
  };
  const dateToString = (dateValue) => {
    return dateValue.year + "-" + dateValue.month + "-" + dateValue.day;
  };
  let startDate = getDMY(props.startDate);
  let endDate = getDMY(props.endDate);

  startDate = dateToString(startDate);
  endDate = dateToString(endDate);
  const updateEventHandler = () => {
    setUpdateShow(true);
  };

  const deleteEventHandler = () => {
    setMessageData({
      title: "Delete!",
      content:
        "Would you really like to delete the task: [ " +
        props.title +
        " ]?",
    });
    setDeleteShow(true);
  };

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const fetchUpdatedTask = (task) => {
    fetch("http://localhost:5000/task/update-task", {
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
          type: "taskUpdateOne",
          task: props.id,
        });
        setMessageData({
          title: "Success!",
          content: "You have updated the task: [ " + props.title + " ]",
        });
        setMessage(true);
        setUpdateShow(false);
      });
  };

  const fetchDeleteTask = () => {
    console.log('aaa ' + props.id)

    fetch("http://localhost:5000/task/delete-task", {
      method: "DELETE",
      mode: "cors",
      headers: {
        auth: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({_id:props.id}),
    })
      .then((res) => (res = res.json()))
      .then((result) => {
        
        dispatch({
          type: "taskDeleteOne",
          task: props.id,
        });
        setMessageData({
          title: "Success!",
          content: "You have delete the task: [ " + props.title + " ]",
        });
        setMessage(true);
        setUpdateShow(false);
      });
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.operation}>
        {deleteShow && (
          <ConfirmationModal
            closeHandler={setDeleteShow}
            yesHandler={fetchDeleteTask}
            title={messageData.title}
            content={messageData.content}
          ></ConfirmationModal>
        )}
        {message && (
          <MessageModal
            closeHandler={setMessage}
            title={messageData.title}
            content={messageData.content}
          ></MessageModal>
        )}
        {updateShow && (
          <TaskCard
            id={props.id}
            title={props.title}
            startDate={startDate}
            endDate={endDate}
            confirmHandle={fetchUpdatedTask}
            changeModalHandler={setUpdateShow}
            action="Update"
          ></TaskCard>
        )}
        <Button name="Edit" event={updateEventHandler}></Button>
        <Button name="Delete" event={deleteEventHandler}></Button>
      </div>
    </div>
  );
};

export default ProgressItemOperation;
