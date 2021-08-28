import ProgressList from "./ProgressList";
import styles from "./Progress.module.css";
import Nav from "../Layout/Nav";
import ProgressAdd from "./ProgressAdd";



const Progress = (props) => {
  return (
    <div className={styles.main}>
      <Nav></Nav>
      <ProgressAdd></ProgressAdd>
      <ProgressList></ProgressList>
    </div>
  );
};

export default Progress;
