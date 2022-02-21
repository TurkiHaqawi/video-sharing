import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import logo from "../../medie/h-logo.png";

const NavBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };
  return (
    <header>
      <img
        src={logo}
        alt="logo"
        className="brand logo"
        width="75"
        height="75"
      />

      {/* <div class="menu-btn">
                <i class="far fa-grip-horizontal"></i>
            </div> */}

      <div className="navigation">
        <div className="navigation-items">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/login">{!user && <span>LogIn</span>}</Link>
          <Link to="/register">{!user && <span>SignUp</span>}</Link>

          {user && <span onClick={handleLogout}>Logout</span>}
        </div>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Search by Title or Username..." />
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
};

export default NavBar;
