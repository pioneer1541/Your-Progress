import ProgressItem from "./ProgressItem";
import styles from "./ProgressList.module.css";
import { useSelector } from "react-redux";

const ProgressList = () => {
  const userProgress = useSelector((state) => state.progressData);
  let num = 1
  const data = userProgress.map((progress) => {
    return (
        <ProgressItem key={num} title={progress.title} startDate={progress.startDate} endDate={progress.endDate}></ProgressItem>
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
