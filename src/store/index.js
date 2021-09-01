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
      break;
    case "taskAddOne":
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: [...state.taskList, action.task],
      };
      break;
    case "taskUpdateAll":
      return {
        userIsAuth: state.userIsAuth,
        username: state.username,
        taskList: action.taskList,
      };
      break;
      default:
        break;
  }

  return state;
};
const store = createStore(userReducer);

export default store;
