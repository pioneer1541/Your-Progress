import ProgressList from "../Progress/ProgressList";
import styles from "./Layout.module.css";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Layout = (props) => {
  const token = localStorage.getItem("token");
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/task/get-tasks", {
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

  return (
    <div className={styles.main}>
      <Nav></Nav>
      {taskList.length > 0 ? (
        <ProgressList taskList={taskList}></ProgressList>
      ) : (
        <div className={styles.title_main}>
          <p className="bg-secondary">Sorry,you do not have any task!</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
