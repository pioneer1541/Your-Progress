import { createStore } from "redux";
const initState = {
  userIsAuth: false,
  username: "",
  taskList: [],
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "login":
      return {
        userIsAuth: action.userIsAuth,
        username: action.username,
        taskList: state.taskList,
      };
    case "logout":
      return {
        userIsAuth: action.userIsAuth,
        username: action.username,
        taskList: state.taskList,
      };
    case "taskAddOne":
      return initState;

    case "taskUpdateAll":
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: action.taskList,
      };
    case "taskUpdateOne":
      let newTaskListAfterUpdate = state.taskList.map((task) => {
        if (task._id === action.task) {
          console.log(task._id)
          return action.taskNewData;
        } else {
          return task;
        }
      });
      console.log(newTaskListAfterUpdate)
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: newTaskListAfterUpdate,
      };

    case "taskDeleteOne":
      console.log("task = " + action.task);
      let newTaskListAfterDelete = state.taskList.filter(
        (task) => task._id !== action.task
      );
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: newTaskListAfterDelete,
      };
    default:
      break;
  }

  return state;
};
const store = createStore(userReducer);

export default store;
