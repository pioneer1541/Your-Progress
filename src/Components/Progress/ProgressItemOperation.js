import Button from "../Layout/Button";
import styles from "./ProgressItemOperation.module.css";

const ProgressItemOperation = (props) => {
  return (
    <div className={styles.main}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.operation}>
          <div className={styles.button}><Button name="Edit"></Button></div>
          <div className={styles.button}><Button name="Delete"></Button></div>
      </div>
    </div>
  );
};

export default ProgressItemOperation;
