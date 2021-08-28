import styles from './Button.module.css'


const Button =(props) => {
    const buttonName = props.name;
    const buttonType = props.type;
    const buttonEvent = props.event;
    return (
        <button className={styles.main} type={buttonType} onClick={buttonEvent}>{buttonName}</button>
    )
}

export default Button;