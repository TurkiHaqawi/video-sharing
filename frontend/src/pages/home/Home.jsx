import { useContext } from "react";
import Categories from "../../components/categories/Cats";
import Header from "../../components/header/Header";
import MyVideos from "../../components/myVideos/MyVideos";
import Trending from "../../components/trending/Trending";
import { AllVideos } from "../../Context/Context";


const Home = () => {

    const allVideos = useContext(AllVideos)

    return ( 
        <div>
            <Header />
            {allVideos && <Trending />}
            <MyVideos />
            <Categories />
        </div>
     );
}
 
export default Home;