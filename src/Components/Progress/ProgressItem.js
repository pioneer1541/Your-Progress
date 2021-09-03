import styles from "./ProgressItem.module.css";
import ProgressItemOperation from "./ProgressItemOperation";

const ProgressItem = (props) => {
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);
  const today = new Date(Date.now());

  const differenceDaysFromBegin =
  Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

  const differenceDaysFromNow =
  Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

    const progress = ((((differenceDaysFromBegin - differenceDaysFromNow) / differenceDaysFromBegin)*100).toFixed(2)).toString() + '%';


  return (
    <li className={styles.main} id={props.id}>
      <div>
        <div>
          <ProgressItemOperation id={props.id} title={props.title} startDate={props.startDate} endDate={props.endDate}></ProgressItemOperation>
        </div>
      </div>
      <div>
        <p><strong>{differenceDaysFromNow}</strong> days to {props.title}</p>
      </div>
      <div className={"progress " + styles.item} style={{ height: "30px" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: progress, height: "30px" }}
        >
          {progress}
        </div>
      </div>
    </li>
  );
};

export default ProgressItem;
