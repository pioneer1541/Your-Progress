import styles from "./Register.module.css";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameIsChanged, setUsernameIsChanged] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwd, setPasswd] = useState();
  const [passwdIsChanged, setPasswdIsChanged] = useState(false);
  const [passwdError, setPasswdError] = useState("");
  const [confirm_passwd, setConfirm_passwd] = useState();
  const [confirm_passwdIsChanged, setConfirm_passwdIsChanged] = useState(false);
  const [confirm_passwdError, setConfirm_passwdError] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (usernameIsChanged) {
      if (username.length < 8) {
        setUsernameIsChanged(false);
        setUsernameError("Username must be at least 8 letters");
      } else {
        setUsernameError("");
      }
    }
  }, [username]);

  useEffect(() => {
    const passwdCheckRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/;
    if (passwdIsChanged) {
      if (!passwdCheckRegExp.test(passwd)) {
        setPasswdIsChanged(false);
        setPasswdError(
          "Password must include 8-16 characters, one capital letter and one number!"
        );
      } else {
        setPasswdError("");
      }
    }
  }, [passwd]);

  useEffect(() => {
    if (confirm_passwdIsChanged) {
      if (confirm_passwd !== passwd) {
        setConfirm_passwdIsChanged(false);
        setConfirm_passwdError("Please confirm your password again!");
      } else {
        setConfirm_passwdError("");
      }
    }
  }, [confirm_passwd]);

  const usernameChangeHandler = () => {
    setUsernameIsChanged(true);
  };

  const passwdChangeHandler = () => {
    setPasswdIsChanged(true);
  };

  const confirm_passwordChangeHandler = () => {
    setConfirm_passwdIsChanged(true);
  };

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPasswd(event.target.value);
  };

  const confirm_passwordInputHandler = (event) => {
    setConfirm_passwd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = { username: username, password: passwd };

    fetch(process.env.REACT_APP_BACKEND_URL + "/user/new-user", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return (res = res.json());
        }
      })
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        setRegisterError(true);
        setErrorMessage(err.message);
        return
      })
      
  };
  return (
    <div className={styles.main}>
      <div className={styles.border}>
        <div className={styles.title + " text-white"}>
          <h1>Sign on</h1>
        </div>
        <form onSubmit={submitHandler} className={styles.form}>
          <label className={styles.control}>Username:</label>
          <input
            className={styles.control}
            type="text"
            name="username"
            onBlur={usernameInputHandler}
            onChange={usernameChangeHandler}
            required
          ></input>
          {usernameError !== "" ? (
            <p className={styles.error}>{usernameError}</p>
          ) : (
            ""
          )}
          <label className={styles.control}>Password:</label>
          <input
            className={styles.control}
            type="password"
            name="passwd"
            onBlur={passwordInputHandler}
            onChange={passwdChangeHandler}
            required
          ></input>
          {passwdError !== "" ? (
            <p className={styles.error}>{passwdError}</p>
          ) : (
            ""
          )}
          <label className={styles.control}>Confirm Password:</label>
          <input
            className={styles.control}
            type="password"
            name="confirm_passwd"
            onBlur={confirm_passwordInputHandler}
            onChange={confirm_passwordChangeHandler}
            required
          ></input>
          {confirm_passwdError !== "" ? (
            <p className={styles.error}>{confirm_passwdError}</p>
          ) : (
            ""
          )}
          <div className="my-3 d-flex flex-row justify-content-center">
            <Button
              name="Back"
              event={() => {
                history.push("/");
              }}
            ></Button>
            <Button name="Sign on" type="submit"></Button>
          </div>
        </form>
        {registerError && (
          <div className={styles.message}>
            <div className="alert alert-danger">{errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
