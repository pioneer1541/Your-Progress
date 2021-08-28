import {createStore} from 'redux'

const userReducer = (state = {}, action) => {
  if (action.type === "login") {
    return {
      userIsAuth: action.userIsAuth,
      username: action.username,
      token: action.token,
      progressData: action.progressData
    };
  }

  return state
};
const store = createStore(userReducer);

export default store
