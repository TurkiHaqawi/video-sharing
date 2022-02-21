import React, { useContext, useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regiser from "./pages/register/Register";
import VideoPage from "./pages/videoPage/VideoPage";
import { Context, VideoTypeContext, AllVideos } from "./Context/Context";
import Login from "./pages/login/Login";
import UserSetting from "./pages/userSetting/UserSetting";
import VideoType from "./pages/videoType/VideoType";
import axios from "axios";

function App() {
  const { user } = useContext(Context);

  const [videoType, setVideoType] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    async function getAllVideos() {
      try {
        const res = await axios.get("/posts");
        setAllVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllVideos();
  }, []);

  return (
    // Routes
    <VideoTypeContext.Provider value={{ videoType, setVideoType }}>
      <AllVideos.Provider value={{ allVideos, setAllVideos }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Regiser />} />
            <Route
              path="/addVideoPage"
              element={user ? <VideoPage /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/userSetting" element={<UserSetting />} />
            <Route path="/videoType/:text" element={<VideoType />} />
          </Routes>
        </Router>
      </AllVideos.Provider>
    </VideoTypeContext.Provider>
  );
}

export default App;
