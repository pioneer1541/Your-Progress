import ProgressList from "./ProgressList";
import styles from "./Progress.module.css";
import Nav from "../Layout/Nav";
import ProgressAdd from "./ProgressAdd";
import { useEffect, useState } from "react";
import TaskCard from "../UI/TaskCard";
import { useDispatch, useSelector } from "react-redux";

const Progress = (props) => {
  const token = localStorage.getItem("token");
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/task/get-tasks", {
      method: "GET",
      mode: "cors",
      headers: {
        auth: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => (res = res.json()))
      .then((result) => {
        dispatch({
          type: "taskUpdateAll",
          taskList: result,
        });
      });
  }, []);

  const newTaskAdd = (task) => {
    fetch("http://localhost:5000/task/new-task", {
      method: "POST",
      mode: "cors",
      headers: {
        auth: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: task.username,
        title: task.title,
        startDate: task.startDate,
        endDate: task.endDate,
      }),
    })
      .then((res) => (res = res.json()))
      .then((result) => {
        dispatch({
          type: "taskAddOne",
          task: result,
        });
      });
  };

  return (
    <div className={styles.main}>
      <Nav></Nav>
      <ProgressAdd newTaskAdd={newTaskAdd}></ProgressAdd>
      <ProgressList taskList={taskList}></ProgressList>
    </div>
  );
};

export default Progress;
