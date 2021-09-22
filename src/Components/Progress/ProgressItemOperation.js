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
        "Would you really like to delete the task: [ " + props.title + " ]?",
    });
    setDeleteShow(true);
  };

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const fetchUpdatedTask = (task) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/task/update-task", {
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
          setMessageData({
            title: "Success!",
            content: "You have updated the task: [ " + props.title + " ]",
          });
          setMessage(true);
          setUpdateShow(false);
          dispatch({
            type: "taskUpdateOne",
            task: props.id,
            taskNewData: result[0],
          });
        } else {
          setMessageData({
            title: "Failed!",
            content: result.message,
          });
          setMessage(true);
          setUpdateShow(false);
        }
      });
  };

  const fetchDeleteTask = () => {
    console.log("aaa " + props.id);

    fetch(process.env.REACT_APP_BACKEND_URL + "/task/delete-task", {
      method: "DELETE",
      mode: "cors",
      headers: {
        auth: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: props.id }),
    })
      .then((res) => (res = res.json()))
      .then((result) => {
        if (result.state) {
          setMessageData({
            title: "Success!",
            content: "You have delete the task: [ " + props.title + " ]",
          });
          setMessage(true);
          setUpdateShow(false);
          dispatch({
            type: "taskDeleteOne",
            task: props.id,
          });
        } else {
          setMessageData({
            title: "Failed!",
            content: result.message,
          });
          setMessage(true);
          setUpdateShow(false);
        }
      });
  };

  return (
    <div className={styles.main}>
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
        <Button
          name=" Edit"
          event={updateEventHandler}
          emo="fas fa-edit"
        ></Button>
        <Button
          name=" Delete"
          event={deleteEventHandler}
          emo="fas fa-trash-alt"
        ></Button>
      </div>
    </div>
  );
};

export default ProgressItemOperation;
