import styles from "./Button.module.css";

const Button = (props) => {
  const buttonName = props.name;
  const buttonType = props.type;
  const buttonEvent = props.event;
  return (
    <div className={styles.main}>
      <button
        className={"btn btn-outline-primary btn-block"}
        type={buttonType}
        onClick={buttonEvent}
      >
        <i className={props.emo}></i>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
