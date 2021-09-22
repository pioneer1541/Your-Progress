import React ,{  Fragment, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

// import Progress from "./components/Layout/Layout";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";

const Progress = React.lazy(() => import("./components/Layout/Layout"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Register = React.lazy(() => import("./components/Register/Register"));
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userIsAuth);
  useEffect(() => {
    if (isAuth) {
      return;
    }
    const token = localStorage.getItem("token");
    if (token) {
      fetch(process.env.REACT_APP_BACKEND_URL + "/", {
        method: "GET",
        mode: "cors",
        headers: {
          auth: token,
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return (res = res.json());
          } else {
            throw res.json();
          }
        })
        .then((user) => {
          dispatch({
            type: "login",
            userIsAuth: true,
            username: user.username,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuth]);

  return (
    <Router>
      <Fragment>
        <Suspense
          fallback={
            <div class="spinner-border mx-auto" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          }
        >
          <Route exact path="/">
            {isAuth ? <Progress></Progress> : <Login></Login>}
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Suspense>
      </Fragment>
    </Router>
  );
}

export default App;
