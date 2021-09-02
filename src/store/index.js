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

    case "taskAddOne":
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: [...state.taskList, action.task],
      };

    case "taskUpdateAll":
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: action.taskList,
      };
    case "taskUpdateOne":
      let newTaskList = state.taskList.map((task) => {
        if (task._id === action.task._id) {
          return action.task;
        } else {
          return task;
        }
      });
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: newTaskList,
      };
    default:
      break;
  }

  return state;
};
const store = createStore(userReducer);

export default store;
