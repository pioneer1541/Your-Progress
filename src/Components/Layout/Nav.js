import { useDispatch, useSelector } from "react-redux";


const Nav = (props) => {
    const username = useSelector(state=>state.username)
    const dispatch = useDispatch();
    const logoutEventHandler =() =>{
      localStorage.removeItem('token');
      dispatch({
        type: "logout",
      })
    }
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/">Your Progress</a>

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
            <a className="dropdown-item" href="#">
              Profit
            </a>
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
