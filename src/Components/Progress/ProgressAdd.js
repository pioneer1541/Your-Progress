import Button from "../Layout/Button"
import styles from './ProgressAdd.module.css'

const ProgressAdd =() => {
    return (
        <div className={styles.main}>
            <div></div>
            <div>
                <Button name='New Progress'></Button>
            </div>
            <div></div>
        </div>
    )
}

export default ProgressAdd;