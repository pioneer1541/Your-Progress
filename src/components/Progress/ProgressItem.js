import styles from "./ProgressItem.module.css";
import ProgressItemOperation from "./ProgressItemOperation";

const ProgressItem = (props) => {
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);
  const today = new Date(Date.now());

  const dateDescription =
    props.startDate.toString().slice(0, 10) +
    " To " +
    props.endDate.toString().slice(0, 10);

  const differenceDaysFromBegin = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  const differenceDaysFromNow = Math.ceil(
    (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );
  const progress =
    Math.max(
      0,
      Math.min(
        100,
        ((differenceDaysFromBegin - differenceDaysFromNow +1) /
          differenceDaysFromBegin) *
          100
      )
    )
      .toFixed(2)
      .toString() + "%";

  return (
    <li className="container p-3 my-3" id={props.id}>
      <div className={"card " + styles.card}>
        <div className="card-body bg-light">
          <div>
            <h4 className="card-title my-3">{props.title}</h4>
          </div>
          <div>
            <p className="card-text my-3">
              <strong>{differenceDaysFromNow}</strong> days far from{" "}
              {props.title}
            </p>
          </div>

          <div>
            <div className={"progress  my-3"} style={{ height: "30px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: progress, height: "30px" }}
              >
                {progress}
              </div>
            </div>
          </div>

          <div className="text-left">
            <p className="card-text">{dateDescription}</p>
          </div>
          <div>
            <ProgressItemOperation
              id={props.id}
              title={props.title}
              startDate={props.startDate}
              endDate={props.endDate}
            ></ProgressItemOperation>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProgressItem;
