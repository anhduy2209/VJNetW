import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FriendlyWorkspace: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            offset: 200,
            delay: 500
        });
    }, []);
    return (
        <div className="relative min-h-[1000px] md:pl-[200px] bg-[url('/svg/bg_comp.svg')] md:bg-[center_-100px] md:-top-[520px] bg-[center_-100px] top-[1300px] md:left-0 md:h-[1620px] md:w-full w-full md:bg-cover object-contain bg-cover bg-no-repeat z-10">
            <p className="relative md:top-80 top-64 text-center md:text-4xl font-semibold text-white md:-left-28" data-aos="fade-down" data-aos-duration="2000">Văn Phòng Thân Thiện & Chuyên Nghiệp</p>
            <div className="flex md:flex-row md:gap-4 relative md:top-0 top-96 gap-3 mx-2 md:mx-0">
                <img src="/svg/comp1.svg" alt="comp img1" className="relative md:h-[592px] md:w-[506px] md:top-[400px] -top-10 w-32 h-32" data-aos="zoom-in-right" data-aos-duration="1000" />
                <img src="/svg/comp2.svg" alt="comp img2" className="relative md:h-[592px] md:w-[506px] md:top-[450px]  w-32 h-32" data-aos="zoom-in" data-aos-duration="2000" />
                <img src="/svg/comp3.svg" alt="comp img3" className="relative md:h-[592px] md:w-[506px] md:top-[400px] -top-10 w-32 h-32" data-aos="zoom-in-left" data-aos-duration="3000" />
            </div>
            <div className="flex flex-row">
                <div data-aos="zoom-out-right"
                    data-aos-duration="3000">
                    <img
                        src="/svg/char2_home.svg"
                        alt="char-left"
                        className="relative md:h-[442px] md:w-[242px] md:left-[350px] h-32 w-20 md:top-14 top-72 left-24"
                        style={{ transform: 'scaleX(-1)' }}

                    />
                </div>
                <img src="/svg/char3.svg" alt="char-left" className="relative md:h-[442px] md:w-[242px] md:left-[680px] md:top-16 h-32 w-20 top-72 left-40" data-aos="zoom-out-right" data-aos-duration="2000" />
            </div>
            <p className="relative text-center md:top-36 top-80 text-white font-light md:text-2xl text-md mx-4 md:mr-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                Chào mừng bạn đến với văn phòng của chúng tôi, nơi sự thân thiện và chuyên nghiệp <br /> <br />
                Mỗi ngày tại văn phòng, chúng tôi chứng kiến sự ra đời của những ý tưởng đột phá. <br /> <br />
                Không gian làm việc thoải mái và chuyên nghiệp là nơi những giấc mơ trở thành hiện thực.
            </p>
        </div>
    )
}

export default FriendlyWorkspace 