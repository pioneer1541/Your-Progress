import Button from "./Button";
import styles from "./MessageModal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const MessageModal = (props) => {
  const closeButtonHandler = () => {
    props.closeHandler(false)
  };

  const Modal = (props) => {
    return (
      <div>
        <div className={styles.backdrop}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.content}>
            <h4 className={styles.message}>{props.content}</h4>
          </div>
          <div className={styles.actions}>
            <Button name="OK" event={closeButtonHandler}></Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal title={props.title} content={props.content} />,
        document.getElementById("message")
      )}
    </Fragment>
  );
};

export default MessageModal;
