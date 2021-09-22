import Button from "./Button";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const styles = require("./ConfirmationModal.module.css");

const ConfirmationModal = (props) => {
  const closeButtonHandler = () => {
    props.closeHandler(false);
  };

  const yesButtonHandler = () => {
    props.yesHandler();
    props.closeHandler(false);
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
            <p className={styles.message}>{props.content}</p>
          </div>
          <div className={styles.actions}>
            <Button name="No" event={closeButtonHandler}></Button>
            <Button name="Yes" event={yesButtonHandler}></Button>
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

export default ConfirmationModal;
