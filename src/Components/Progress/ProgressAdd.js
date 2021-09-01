import Button from "../Layout/Button"
import styles from './ProgressAdd.module.css'

const ProgressAdd =props => {
    const dummyData = {
        username:"Pioneer1541",
        title:"2022",
        startDate:new Date("2021-01-01"),
        endDate:new Date("2022-01-01"),
    }
    const newProgressHandler =()=>{
        props.newTaskAdd(dummyData)
    }
    return (
        <div className={styles.main}>
            <div></div>
            <div>
                <Button name='New Progress' event={newProgressHandler}></Button>
            </div>
            <div></div>
        </div>
    )
}

export default ProgressAdd;