import Footer from "../Components/Footer";
import Header from "../Components/Header";
import VisionAndMission from "../Components/VisionAndMission";
import AboutUs from "./AboutUs";
import AdvicePage from "./Advice";
import FriendlyWorkspace from "./FriendlyWorkspace";
import ProductPage from "./Product";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="absolute -top-[350px] md:left-[650px] left-[700px] w-full h-full z-0" >
                <img src="/svg/home1.svg" alt="" />
            </div>
            <div className="absolute -top-[400px] md:left-[800px] left-[850px] w-full h-full z-10 opacity-90" >
                <img src="/svg/home2.svg" alt="" />
            </div>
            <div className="absolute -top-[650px] left-[900px] w-[1200px] h-full z-20 opacity-70" >
                <img src="/svg/home3.svg" alt="" />
            </div>
            <div className="absolute -top-[500px] left-[1140px] w-[1300px] h-full z-30" >
                <img src="/svg/home4.svg" alt="" />
            </div>
            <AboutUs />

            <VisionAndMission />

            <ProductPage />

            <AdvicePage />

            <FriendlyWorkspace />

            <Footer />
        </div>
    );
};

export default HomePage;