import styles from "./Login.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const usernameHandler = (event) => {
    const username = event.target.value;
    setLoginError(false);
    setUsername(username);
  };

  const passwordHandler = (event) => {
    const passwd = event.target.value;
    setLoginError(false);
    setPassword(passwd);
  };

  useEffect(() => {
    if (!loginError) {
      if (user.token) {
        localStorage.setItem("token", user.token);
        dispatch({
          type: "login",
          userIsAuth: true,
          username: user.username,
        });
        setLoginError(true)
      }
    }
  }, [user]);

  const loginHandler = (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    fetch(process.env.REACT_APP_BACKEND_URL + "/user/login", {
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
          throw Error
        } else {
          return (res = res.json());
        }
      })
      .then((data) => setUser(data))
      .catch((err) => {
        setLoginError(true);
        setErrorMessage("username or password is incorrect!")
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.border}>
        <div className={styles.title  + " text-white"}>
          <h1>Login</h1>
        </div>
        <div className={styles.title + " text-white"}>
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
              {errorMessage}
            </div>
          )}
          <div className={styles.actions + ' my-3'}>
          <Button name="Sign in" type="submit"></Button>
          </div>
          
        </form>
      </div>
      <div className={styles.register + ' text-white'}>
        <p>
          New to Your Progress?{" "}
          <span>
            <a className="text-warning" href="/register">Sign on!</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
