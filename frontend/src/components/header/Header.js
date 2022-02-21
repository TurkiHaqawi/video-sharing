import "./header.css";
import NavBar from "../navBar/NavBar";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(Context);
  return (
    <div className="header">
      <NavBar />
      <section className="home">
        <video
          className="video-slide"
          src="https://player.vimeo.com/external/552854092.sd.mp4?s=83eda3eaf18e3dc649cf03ec6619684a69585eea&profile_id=164&oauth2_token_id=57447761"
          autoPlay={true}
          muted
          loop
        ></video>
        <div className="content">
          <h1>hype</h1>
        </div>
        <div className="media-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          {user && (
            <Link to="/userSetting">
              <div className="userSettingPage">
                <i className="fas fa-user"></i>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;
