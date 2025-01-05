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
        <div className="relative md:min-h-full md:pl-[200px] bg-[url('/svg/bg_advice.svg')] bg-[center_-100px] md:-top-[200px] top-[2500px] left-0 md:h-[1600px] md:w-[1920px] md:bg-cover md:bg-no-repeat z-20">
            <div className="pt-[400px] flex flex-row bg-cover z-0  pb-[550px]">
                <div className="pr-[60px]">
                    <p className="font-bold text-[50px] text-green-600 mb-[60px]" data-aos="fade-down-right">HÃY ĐĂNG KÝ <br />ĐỂ ĐƯỢC TƯ VẤN</p>
                    <p className="w-[644px] text-justify text-[22px] text-gray-400" data-aos="fade-up-left">
                        Bạn đang tìm kiếm giải pháp công nghệ đột phá?<br /><br />
                        Đừng bỏ lỡ cơ hội nhận được sự hỗ trợ từ đội ngũ chuyên gia của chúng tôi!<br />
                        Hãy đăng ký ngay hôm nay để khám phá thêm về các sản phẩm và dịch vụ vượt trội, giúp doanh nghiệp của bạn phát triển bền vững.
                        <br /><br />Liên hệ ngay để nhận tư vấn miễn phí!
                    </p>
                </div>
                <div className="relative w-[956px] h-[600px] rounded-3xl bg-pink-gray flex items-center justify-start" data-aos="fade-up">
                    <img className="absolute left-[650px] -top-[70px] w-[370px] h-[499px]" src="/svg/rocket.svg" alt="" data-aos="zoom-in-up" />
                    <img className="absolute left-[700px] top-[1px] w-[100px] h-[56px]" src="/svg/cloud1_adv.svg" alt="" data-aos="fade-down-right" />
                    <img className="absolute left-[840px] top-[140px] w-[114px] h-[73px]" src="/svg/cloud2_adv.svg" alt="" />
                    <div className="flex flex-col pl-[30px] pr-[34px]">
                        <input type="text" name="name" id="" placeholder="Full Name" className="h-[39px] w-[300px] pl-3 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" data-aos="fade-right" />
                        <input type="email" name="name" id="" placeholder="Email" className="h-[39px] w-[300px] pl-3 mt-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" data-aos="fade-right" />
                    </div>
                    <div className="flex flex-col items-end">
                        <textarea
                            className="w-[500px] h-[245px] bg-white p-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate leading-tight placeholder-top pb-48 resize-none"
                            name="asking_advice"
                            placeholder="What advice do you need?"
                        />
                        <button
                            className="w-[134px] h-[39px] bg-white p-5 rounded-full flex items-center justify-center mt-4 font-semibold"
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