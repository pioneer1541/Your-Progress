import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

import Progress from "./Components/Progress/Progress";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {

  const isAuth = useSelector(state=>state.userIsAuth)
  console.log(isAuth)

  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          {isAuth ? (
            <Progress></Progress>
          ) : (
            <Login></Login>
          )}
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Fragment>
    </Router>
  );
}

export default App;
