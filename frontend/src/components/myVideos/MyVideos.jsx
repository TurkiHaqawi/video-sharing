import "./myVideos.css";
import AddVideo from "../addVideo/AddV";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

const MyVideos = () => {
  const { user } = useContext(Context);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVidios() {
      try {
        if (user) {
          const res = await axios.get(`/posts?user=${user.username}`);
          // console.log(res.data);
          setVideos(res.data);
        } else {
          console.log("no user");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getVidios();
  }, [user]);

  return (
    <div className="myVideos">
      <div>
        <h1 className="sectionTitle">My Videos</h1>
        <div className="add">
          <Link to="/addVideoPage">
            <AddVideo />
          </Link>
        </div>
      </div>

      {user && (
        <div className="trendingVideos">
          {videos.map((ele, index) => {
            return (
              <video
                className="video"
                src={ele.video}
                autoPlay={false}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyVideos;
