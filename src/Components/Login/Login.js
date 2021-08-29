import styles from "./Login.module.css";
import Button from "../Layout/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const usernameHandler = (event) => {
    const username = event.target.value;
    setUsername(username);
  };

  const passwordHandler = (event) => {
    const passwd = event.target.value;
    setPassword(passwd);
  };

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
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
    }
  }, [user]);

  const loginHandler = (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          setLoginError(false);
        } else {
          return res = res.json();
        }
        
      })
      .then((data) => setUser(data));
  };

  return (
    <div className={styles.main}>
      <div className={styles.border}>
        <div className={styles.title}>
          <h1>Login</h1>
        </div>
        <div className={styles.title}>
          <p>Welcome to Your Progress!</p>
        </div>
        <form onSubmit={loginHandler} className={styles.form}>
          <label className={styles.control}>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameHandler}
            className={styles.control}
          ></input>
          <label className={styles.control}>Password:</label>
          <input
            type="password"
            name="passwd"
            id="passwd"
            onChange={passwordHandler}
            className={styles.control}
          ></input>
          {loginError && (
            <div className="alert alert-danger">
              Username or Password is incorrect!
            </div>
          )}
          <Button name="Sign in" type="submit"></Button>
        </form>
      </div>
      <div className={styles.register}>
        <p>
          New to Your Progress?{" "}
          <span>
            <a href="/register">Sign on!</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
