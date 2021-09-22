import ProgressItem from "./ProgressItem";
import styles from "./ProgressList.module.css";

const ProgressList = (props) => {
  let userProgress = props.taskList;
  const data = userProgress.map((progress) => {
    return (
      <ProgressItem
        key={progress._id}
        id={progress._id}
        title={progress.title}
        startDate={progress.startDate}
        endDate={progress.endDate}
      ></ProgressItem>
    );
  });
  return (
    <div className={styles.main}>
      <div></div>
      <ul className={"card-deck " + styles.cardUl}>{data}</ul>
      <div></div>
    </div>
  );
};

export default ProgressList;
