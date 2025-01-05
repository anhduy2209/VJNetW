import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AboutUs from './AboutUs';
import AdvicePage from './Advice';
import FriendlyWorkspace from './FriendlyWorkspace';
import ProductPage from './Product';
import VisionAndMission from './VisionAndMission';

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='h-svh'>
            <Header />
            <div className="absolute md:-top-[350px] md:left-[650px] md:w-full md:h-full md:block hidden -top-14 left-[170px] w-72 h-72 z-10" data-aos="fade-up-left">
                <img src="/svg/home1.svg" alt="" />
            </div>
            <div className="absolute md:-top-[400px] md:left-[800px] md:w-full md:h-full md:block hidden left-[200px] -top-[100px] w-72 h-72 z-10 opacity-90" data-aos="fade-up-left">
                <img src="/svg/home2.svg" alt="" />
            </div>
            <div className="absolute md:-top-[650px] md:left-[900px] md:w-[1200px] md:h-full md:block hidden left-[210px] -top-[280px] w-72 h-72 z-20 opacity-70" data-aos="fade-up-left">
                <img src="/svg/home3.svg" alt="" />
            </div>
            <div className="absolute md:-top-[500px] md:left-[1140px] md:w-[1300px] md:h-full md:block hidden left-[250px] -top-[210px] w-72 h-72 z-30" data-aos="fade-up-left">
                <img src="/svg/home4.svg" alt="" />
            </div>
            {/* <AboutUs /> */}
            <AboutUs />
            <VisionAndMission />
            <section id='product'>
                <ProductPage />
            </section>
            <section id="about-us">
                <AdvicePage />
            </section>
            {/* <section id='address'>
                <FriendlyWorkspace />
            </section> */}
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;
