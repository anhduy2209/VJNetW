import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AdvicePage: React.FC = () => {
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
        <div className="relative md:min-h-full w-[150%] -left-[100px] right-auto md:left-0 min-h-full md:pl-[200px] md:bg-[url('/svg/bg_advice.svg')] bg-[url('/svg/bg_advice.svg')] bg-[top_-400px] md:bg-[center_-100px] md:-top-[200px] top-[2000px] md:h-[1600px] md:w-[1920px] bg-contain bg-no-repeat md:bg-cover md:bg-no-repeat z-20">
            <div className="md:pt-[400px] flex md:flex-row flex-col bg-cover z-0 pb-[550px] relative md:static">
                <div className="md:pr-[60px] pt-28 text-center md:text-start items-center justify-center">
                    <p className="font-bold md:text-[50px] text-3xl text-green-600 md:mb-[60px] my-5 md:leading-[60px]" data-aos="fade-down-right">HÃY ĐĂNG KÝ <br />ĐỂ ĐƯỢC TƯ VẤN</p>
                    <p className="md:w-[644px] w-2/3 my-12 mx-auto md:px-0 px-5 md:text-justify md:text-[22px] text-sm text-gray-400 md:leading-8" data-aos="fade-up-left">
                        Bạn đang tìm kiếm giải pháp công nghệ đột phá?<br /><br />
                        Đừng bỏ lỡ cơ hội nhận được sự hỗ trợ từ đội ngũ chuyên gia của chúng tôi!<br />
                        Hãy đăng ký ngay hôm nay để khám phá thêm về các sản phẩm và dịch vụ vượt trội, giúp doanh nghiệp của bạn phát triển bền vững.
                        <br /><br />Liên hệ ngay để nhận tư vấn miễn phí!
                    </p>
                </div>
                <div className="relative md:w-[956px] md:h-[600px] w-80 h-36 md:rounded-3xl bg-pink-gray md:flex items-center justify-start hidden md:visible" data-aos="fade-up">
                    <img className="absolute md:left-[650px] md:-top-[70px] md:w-[370px] md:h-[499px] w-20 h-20 left-36" src="/svg/rocket.svg" alt="" data-aos="zoom-in-up" />
                    <img className="absolute md:left-[700px] md:top-[1px] md:w-[100px] md:h-[56px]" src="/svg/cloud1_adv.svg" alt="" data-aos="fade-down-right" />
                    <img className="absolute md:left-[840px] md:top-[140px] md:w-[114px] md:h-[73px]" src="/svg/cloud2_adv.svg" alt="" />
                    <div className="flex md:flex-col flex-col my-5 md:pl-[30px] md:pr-[34px]">
                        <input type="text" name="name" id="" placeholder="Full Name" className="md:h-[39px] md:w-[300px] md:pl-3 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" data-aos="fade-right" />
                        <input type="email" name="name" id="" placeholder="Email" className="md:h-[39px] md:w-[300px] md:pl-3 md:mt-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" data-aos="fade-right" />
                    </div>
                    <div className="flex flex-col items-end">
                        <textarea
                            className="md:w-[500px] md:h-[245px] w-20 h-36 bg-white p-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate leading-tight placeholder-top pb-48 resize-none"
                            name="asking_advice"
                            placeholder="What advice do you need?"
                        />
                        <button
                            className="md:w-[134px] md:h-[39px] bg-white p-5 rounded-full flex items-center justify-center mt-4 font-semibold"
                            type="submit"
                            data-aos="fade-down"
                        >
                            Send →
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdvicePage