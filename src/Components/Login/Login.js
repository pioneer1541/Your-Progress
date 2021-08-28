import styles from "./Login.module.css";
import Button from "../Layout/Button";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const loginHandler = () => {
      const username = document.getElementById('username').value;
    dispatch({
      type: "login",
      userIsAuth: true,
      username: username,
      token: "",
      progressData: [
        { title: "2022", startDate: "01-01-2021", endDate: "01-01-2022" },
        { title: "2023", startDate: "01-01-2021", endDate: "01-01-2023" },
        { title: "2024", startDate: "01-01-2021", endDate: "01-01-2024" },
      ],
    });
  };

  const buttonEvent = () => {
    loginHandler();
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
        <form className={styles.form}>
          <label className={styles.control}>Username:</label>
          <input type="text" name="username" id='username' className={styles.control}></input>
          <label className={styles.control}>Password:</label>
          <input
            type="password"
            name="passwd"
            id='passwd'
            className={styles.control}
          ></input>
          <Button name="Sign in" type="submit" event={buttonEvent}></Button>
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
