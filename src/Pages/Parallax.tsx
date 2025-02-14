import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ParallaxPage: React.FC = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        window.addEventListener('resize', checkMobile);
        checkMobile();

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
        });
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = () => {
        const section = document.getElementById('target-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        const topSection = document.getElementById('top-section');
        if (topSection) {
            topSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const goToSection = (sectionId: string) => {
        navigate('/home', { replace: true });

        setTimeout(() => {
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };

    const images = [
        {
            src: "/svg/people.svg",
            alt: "Image 1",
            text: "ABOUT US",
            sectionId: "#about-us"
        },
        {
            src: "/svg/shopping.svg",
            alt: "Image 2",
            text: "PRODUCT",
            sectionId: "#product"
        },
        {
            src: "/svg/email_hand.svg",
            alt: "Image 3",
            text: "CONTACT",
            sectionId: "#address"
        }
    ];

    const goToHomePage = () => {
        navigate('/home');
    };
    return (
        <div className='overflow-hidden custom-scrollbar'>
            <div id="top-section" className="relative h-dvh overflow-hidden bg-custom-gradient md:h-lvh">
                <div className="relative w-full h-52">
                    <div className="absolute md:top-[150px] md:w-[871.5px] md:h-[240.41px] top-[300px] w-[210.02px] h-[57.93px]  bg-[url('/svg/cloud1.svg')] bg-contain bg-no-repeat object-contain z-10 opacity-50" data-aos="fade-down-right" data-aos-duration="2000" />
                </div>

                <div className="absolute md:left-1/4 md:top-[65px] md:w-1/4 md:h-full w-44 h-20 left-16 top-44 bg-[url('/svg/cloud2.svg')] bg-contain bg-no-repeat object-contain z-10 opacity-50" data-aos="fade-down-right" data-aos-duration="3000" />

                <div className="absolute md:left-2/4 md:top-80 md:w-1/4 md:h-full left-2/4 w-2/4 h-full top-[340px] bg-[url('/svg/cloud3.svg')] bg-contain bg-no-repeat object-contain opacity-80 z-30" data-aos="fade-down-left" data-aos-duration="3000" />

                <div className="absolute md:left-3/4 md:top-40 md:w-1/4 md:h-full left-2/4 top-[240px] w-2/4 h-full bg-[url('/svg/cloud4.svg')] bg-contain bg-no-repeat object-contain opacity-80 z-30" data-aos="fade-left" data-aos-duration="3000" />

                <div className="absolute md:left-[480px] md:top-[680px] md:w-[1033px] md:h-[182px] h-56 w-56 top-[580px] left-[100px] bg-[url('/svg/text_logo.svg')] bg-contain bg-no-repeat object-contain z-50" data-aos="zoom-in-up" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                <div className='relative -top-[70px]'>
                    <div className='relative top-20 right-20'>
                        <div className="relative md:left-[850px] md:w-[400px] md:h-[400px] md:top-0 top-[220px] left-56 w-56 h-36 bg-[url('/svg/sun.svg')] bg-contain bg-no-repeat object-contain z-0" data-aos="zoom-out-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                        <div className="relative md:left-[905px] md:-top-[350px] md:w-[298px] md:h-[250px] top-[97px] left-60 w-40 h-24 bg-[url('/images/main_logo.png')] bg-contain bg-no-repeat object-contain z-20" data-aos="zoom-out-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic" />
                    </div>
                    <div className="absolute md:top-[310px] md:w-[1396px] md:h-[717px] md:hidden w-[1000px] h-[100px] top-[480px] bg-[url('/svg/tree.svg')] bg-contain bg-no-repeat object-contain z-60" />

                    <div className="absolute md:top-[420px] md:w-[1488px] md:h-[540px] h-56 w-56 top-[459px] bg-[url('/svg/mountain1.svg')] bg-contain bg-no-repeat object-contain z-50" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:top-[310px] md:w-[1396px] md:h-[717px] h-56 w-56 top-[440px] left-2 bg-[url('/svg/mountain2.svg')] bg-contain bg-no-repeat object-contain z-40" data-aos="fade-up-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:top-[410px] md:w-[848.08px] md:h-[1021.85px] h-56 w-56 top-[459px] -left-5 bg-[url('/svg/mountain3.svg')] bg-contain bg-no-repeat object-contain z-40" data-aos="fade-up-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:top-[250px] md:w-[1846px] md:h-[768px] md:left-20 h-80 w-2/3 top-[405px] left-10 bg-[url('/svg/mountain4.svg')] bg-contain bg-no-repeat object-contain z-20" data-aos="fade-up-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:top-[500px] md:w-[1488px] md:h-[540px] md:left-[550px]  h-56 w-56 top-[459px] left-20 bg-[url('/svg/mountain_5.svg')] bg-contain bg-no-repeat object-contain z-40" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:top-[440px] md:w-[1574px] md:h-[870px] md:left-[230px] h-56 w-56 top-[459px] left-36 bg-[url('/svg/mountain_6.svg')] bg-contain bg-no-repeat object-contain z-40" data-aos="fade-up-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute right-[50px] md:top-[300px]  md:w-[1729px] md:h-[717px] h-56 w-56 top-[410px] left-30 bg-[url('/svg/mountain_7.svg')] bg-contain bg-no-repeat object-contain z-20" data-aos="fade-up-left" data-aos-duration="3000" />

                    <div className="absolute md:right-0 md:top-[440px] md:w-[1305px] md:h-[906px] h-full w-full top-[459px] right-0 bg-[url('/svg/mountain_8.svg')] bg-contain bg-no-repeat object-contain z-50" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />

                    <div className="absolute md:right-0 md:top-[340px] md:w-[826px] md:h-[740.22px] h-56 w-56 top-[410px] right-0 bg-[url('/svg/mountain_9.svg')] bg-contain bg-no-repeat object-contain z-30" data-aos="fade-up-left" data-aos-duration="3000" data-aos-easing="linear" />

                    <div className="absolute md:top-[650px] md:w-[1340px] md:h-[580px] md:left-[140px] bg-[url('/svg/mountain_10.svg')] bg-contain bg-no-repeat object-contain z-40" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-out-cubic" />
                </div>
                <button
                    className="absolute h-[56px] w-[190px] bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#410016] text-white rounded-lg hover:bg-red-600 text-2xl z-70"
                    onClick={isMobile ? goToHomePage : scrollToSection}
                >
                    Let's start
                </button>
            </div>
            <div
                id="target-section"
                className="relative h-screen bg-blue-950 flex flex-col items-center justify-start overflow-hidden px-4 py-44"
            >
                <div className='flex flex-row gap-36 items-center justify-center'>
                    <button
                        className="text-gray-900 hover:text-gray-800 transition-all"
                        aria-label="Back"
                        onClick={scrollToTop}
                        data-aos="fade-down-left" data-aos-duration="1500"
                    >
                        <img src="/svg/back_icon.svg" alt="back" />
                    </button>
                    <h2 className="text-white text-3xl mb-8 font-semibold tracking-wider pt-5" data-aos="fade-down" data-aos-duration="4000">
                        MUCH MORE THAN
                    </h2>
                    <button
                        className="text-gray-600 hover:text-gray-800 transition-all"
                        aria-label="Forward"
                        onClick={goToHomePage}
                        data-aos="fade-down-right" data-aos-duration="1500"
                    >
                        <img src="/svg/foward_icon.svg" alt="foward" />
                    </button>

                </div>
                <div className="flex gap-24 mt-52">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-[240px] h-[300px] overflow-hidden rounded-lg group"
                            data-aos="fade-up"
                            data-aos-duration="4000"
                            onClick={() => goToSection(image.sectionId)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:translate-y-[-24%]"
                                data-aos="fade-down"
                                data-aos-duration="4000"
                            />
                            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 text-white text-center py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {image.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParallaxPage;
