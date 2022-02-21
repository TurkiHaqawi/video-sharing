import "./trending.css";
import { useContext, useState } from "react";
import { AllVideos } from "../../Context/Context";

const Trending = () => {
  const allVideosInFile = useContext(AllVideos);
  const [trindVideo, setTrindVideo] = useState(
    "https://player.vimeo.com/external/552422519.sd.mp4?s=f2487b50bc85b56d359ec4babf0fd0b3aa2ef9f3&profile_id=164&oauth2_token_id=57447761"
  );
  const [title, setTitle] = useState("First Title");
  const [desc, setDesc] = useState("First Desc");

  const handleChange = (ele) => {
    setTrindVideo(ele.video);
    setTitle(ele.title);
    setDesc(ele.desc);
  };

  return (
    <div className="trending">
      <h1 className="sectionTitle">All Videos</h1>

      <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
              {title}
            </h3>
            <p className="mt-2 text-gray-500">{desc}</p>
          </div>
          <div className="md:flex-shrink-0">
            <video
              className="h-80 w-full object-cover md:w-70"
              src={trindVideo}
              autoPlay={true}
              loop
            />
          </div>
        </div>
      </div>

      {allVideosInFile && (
        <div className="trendingVideos">
          {allVideosInFile.allVideos.map((ele, index) => {
            return (
              <video
                className="video"
                src={ele.video}
                autoPlay={false}
                key={index}
                onClick={() => handleChange(ele)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Trending;
