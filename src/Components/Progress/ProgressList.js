import ProgressItem from "./ProgressItem";
import styles from "./ProgressList.module.css";
import { useSelector } from "react-redux";

const ProgressList = props => {
  let userProgress =[];
  userProgress= props.taskList
  const data = userProgress.map((progress) => {
    return (
        <ProgressItem id={progress._id} title={progress.title} startDate={progress.startDate} endDate={progress.endDate}></ProgressItem>
    )
  });
  return (
    <div className={styles.main}>
      <div></div>
      <ul className={styles.list}>
        {data}
      </ul>
      <div></div>
    </div>
  );
};

export default ProgressList;
