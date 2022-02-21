import "./cats.css";
import { useContext } from "react";
import { VideoTypeContext } from "../../Context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const videoTypeContext = useContext(VideoTypeContext);

  const handlClic = async (text) => {
    try {
      const res = await axios.get(`/posts?cat=${text}`);
      console.log(res.data);
      videoTypeContext.setVideoType(res.data);
      localStorage.setItem("videoType", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cats">
      <div className="eachCat art">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/art">
          <div className="catSection" onClick={() => handlClic("art")}>
            <img
              src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="rounded-2xl"
              autoPlay={false}
            />
            <span className="text-8xl text-white font-extrabold">ART</span>
          </div>
        </Link>
      </div>
      <div className="eachCat music">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/music">
          <div className="catSection" onClick={() => handlClic("music")}>
            <img
              src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="rounded-2xl"
              autoPlay={false}
            />
            <span className="text-8xl text-white font-extrabold">MUSIC</span>
          </div>
        </Link>
      </div>
      <div className="eachCat dance">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/dance">
          <div className="catSection" onClick={() => handlClic("dance")}>
            <img
              src="https://images.pexels.com/photos/5805250/pexels-photo-5805250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="rounded-2xl"
              autoPlay={false}
            />
            <span className="text-8xl text-white font-extrabold">DANCE</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
