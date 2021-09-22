import { useDispatch, useSelector } from "react-redux";
import ProgressAdd from "../Progress/ProgressAdd";


const Nav = (props) => {
    const username = useSelector(state=>state.username)
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const logoutEventHandler =() =>{
      localStorage.removeItem('token');
      dispatch({
        type: "logout",
      })
    }

    const newTaskAdd = (task) => {
      fetch(process.env.REACT_APP_BACKEND_URL + "/task/new-task", {
        method: "POST",
        mode: "cors",
        headers: {
          auth: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: task.username,
          title: task.title,
          startDate: task.startDate,
          endDate: task.endDate,
        }),
      })
        .then((res) => (res = res.json()))
        .then((result) => {
          dispatch({
            type: "taskAddOne",
            task: result,
          });
        });
    };
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand mr-auto" href="/"><i class="fas fa-home"></i></a>
      <ProgressAdd newTaskAdd={newTaskAdd}></ProgressAdd>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            {username}
          </a>
          <div className="dropdown-menu ">
            <a className="dropdown-item" onClick={logoutEventHandler} href="#">
              Sign out
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
