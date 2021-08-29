import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Progress from "./Components/Progress/Progress";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userIsAuth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/", {
        method: "GET",
        mode: "cors",
        headers: {
          auth: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            document.location("/");
          } else {
            return (res = res.json);
          }
        })
        .then((user) => {
          dispatch({
            type: "login",
            userIsAuth: true,
            username: user.username,
            progressData: [
              { title: "2022", startDate: "01-01-2021", endDate: "01-01-2022" },
              { title: "2023", startDate: "01-01-2021", endDate: "01-01-2023" },
              { title: "2024", startDate: "01-01-2021", endDate: "01-01-2024" },
            ],
          });
        });
    }
  }, []);

  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          {isAuth ? <Progress></Progress> : <Login></Login>}
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Fragment>
    </Router>
  );
}

export default App;
