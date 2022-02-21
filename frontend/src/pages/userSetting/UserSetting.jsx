import "./userSetting.css";
import NavBar from "../../components/navBar/NavBar";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

const UserSetting = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updateState, setUpdateState] = useState(false);
  const [msg, setMsg] = useState(false);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      await axios.put("/user/" + user._id, updatedUser);
      setMsg(true);
    } catch (err) {}
  };

  const hnadleCancle = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setUpdateState(false);
  };

  return (
    <div className="userSetting">
      <NavBar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">My Account</span>
            <span
              className="settingsTitleDelete"
              style={{ color: "green" }}
              onClick={() => setUpdateState(true)}
            >
              Update Account
            </span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
              required
              value={username}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
            {updateState && (
              <div>
                <button className="settingsSubmitButton" type="submit">
                  Update
                </button>
                <button
                  className="settingsSubmitButton cancle"
                  onClick={hnadleCancle}
                >
                  Cancle
                </button>
              </div>
            )}
          </form>
          {msg && (
            <div style={{ color: "green", fontSize: "20px" }}>
              Update Succssfuly...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
