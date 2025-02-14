import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const VisionAndMission: React.FC = () => {
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
        <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:px-32 bg-white z-50 md:top-[50px] pt-72 md:pt-0 max-w-full overflow-hidden md:overflow-visible">
                <div className="w-11/12 md:w-[780px] h-auto md:h-[900px] justify-center items-center mx-auto text-center -top-[200px] md:px-20 px-5 pt-14 border rounded-3xl shadow-lg bg-gray-100 flex flex-col md:items-center relative z-20 bg-opacity-90" data-aos="zoom-in-right" data-aos-duration="1500">
                    <h2 className="md:text-5xl text-4xl font-bold mb-8 text-green-600" data-aos="fade-right" data-aos-duration="3000">Tầm nhìn</h2>
                    <p className="text-sm mb-4 text-justify text-gray-400" data-aos="fade-right" data-aos-duration="2000">
                        Chúng tôi hướng tới mục tiêu trở thành đối tác chiến lược hàng đầu cho các doanh nghiệp
                        trong việc cung cấp các giải pháp toàn diện và nhân lực chất lượng cao,
                        giúp các tổ chức không chỉ vươn lên mạnh mẽ trong quá trình chuyển đổi số mà
                        còn phát triển bền vững trong môi trường kinh doanh toàn cầu đầy cạnh tranh.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400" data-aos="fade-down-right" data-aos-duration="1000">
                        Tầm nhìn của chúng tôi là xây dựng một hệ sinh thái doanh nghiệp số toàn diện,
                        nơi mà mỗi doanh nghiệp, dù lớn hay nhỏ, đều có cơ hội tiếp cận và tận dụng
                        công nghệ để tối ưu hóa quy trình, nâng cao hiệu quả và mở rộng thị trường.
                        Chúng tôi hướng tới việc trở thành cầu nối giữa doanh nghiệp và công nghệ,
                        mang đến những giải pháp đổi mới và phù hợp với từng nhu cầu cụ thể, từ quản lý tài chính,
                        nhân sự, truyền thông đến phát triển mô hình thương mại điện tử.
                        <img src="/svg/vision.svg" alt="Tầm nhìn" className="md:mx-auto md:mt-3 object-contain h-auto md:h-[565px] ml-7 md:ml-28 max-w-full" />
                    </p>
                </div>
                <div className="w-11/12 md:w-[780px] h-max md:h-[900px] items-center mx-auto text-center -top-[200px] md:px-20 px-5 pt-14 border rounded-3xl shadow-lg bg-gray-100 flex flex-col md:items-center relative z-20 mt-10 md:mt-0 bg-opacity-90" data-aos="zoom-in-left" data-aos-duration="1500">
                    <h2 className="text-5xl font-bold mb-8 text-blue-600" data-aos="fade-left" data-aos-duration="2000">Sứ mệnh</h2>
                    <p className="text-sm mb-4 text-justify text-gray-400" data-aos="fade-down-left" data-aos-duration="1000">
                        Sứ mệnh của chúng tôi là tạo ra giá trị đột phá cho doanh nghiệp
                        thông qua việc cung cấp các giải pháp công nghệ tiên tiến và nguồn
                        nhân lực chất lượng cao. Chúng tôi cam kết đồng hành cùng doanh nghiệp
                        trong việc chuyển đổi số và tối ưu hóa mô hình hoạt động, giúp họ phát
                        triển mạnh mẽ hơn trong một môi trường kinh doanh ngày càng phức tạp và biến đổi.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400" data-aos="fade-left" data-aos-duration="5000">
                        Nhân lực của chúng tôi không chỉ là những chuyên gia có kỹ năng,
                        mà còn là những người có khả năng tư duy chiến lược, am hiểu thị
                        trường và biết cách tận dụng công nghệ để mang lại hiệu quả tối đa.
                        Với blockchain, chúng tôi giúp các doanh nghiệp tối ưu hóa quy trình,
                        nâng cao tính minh bạch và bảo mật trong quản lý dữ liệu và giao dịch.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400 relative" data-aos="fade-up-left" data-aos-duration="5000">
                        Sứ mệnh của chúng tôi còn bao gồm việc tư vấn và thiết kế các mô hình
                        doanh nghiệp theo hướng thương mại điện tử, giúp doanh nghiệp mở rộng
                        quy mô và tiếp cận khách hàng một cách hiệu quả nhất. Chúng tôi tin rằng
                        thương mại điện tử không chỉ là xu hướng mà còn là tương lai của nhiều ngành công nghiệp.
                        <img src="/svg/mission.svg" alt="Sứ mệnh" className="md:mx-auto ml-20 md:mb-24 object-contain h-auto md:h-[550px] md:mt-12 md:ml-32 max-w-full md:absolute md:-top-[30px] md:left-6" data-aos="zoom-in-up" />
                    </p>
                </div>
            </div>

            <div>
                <img
                    className="absolute md:top-64 md:w-[2400px] top-[1990px] max-w-none w-[600px] -left-14 md:-left-[180px] overflow-hidden"
                    src="/svg/bg2_1.svg"
                    alt=""
                />
                <img
                    className="absolute mt-32 md:-left-10 md:top-[700px] md:w-[2000px] w-[450px] top-[2075px] -left-3 max-w-none overflow-hidden"
                    src="/svg/bg2_2.svg"
                    alt=""
                />
                <div className="absolute md:w-full flex md:justify-center md:mx-auto md:px-40 md:top-[880px] top left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between px-0 gap-10 top-[2130px]">
                    <div className="md:w-1/4 flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/svg/customer.svg" className='md:w-14 md:h-14 w-7' alt="" />
                        <p className="md:text-[50px] text-sm text-white font-bold md:py-10 py-2">3570</p>
                        <p className="md:text-[22px] text-[7px] whitespace-nowrap text-white font-semibold">Khách hàng trung thành</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/svg/project.svg" className='md:w-14 md:h-14 w-7' alt="" />
                        <p className="md:text-[50px] text-sm text-white font-bold md:py-10 py-2">451</p>
                        <p className="md:text-[22px] text-[7px] whitespace-nowrap text-white font-semibold">Dự án</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/svg/done_project.svg" className='md:w-14 md:h-14 w-7' alt="" />
                        <p className="md:text-[50px] text-sm text-white font-bold md:py-10 py-2">250</p>
                        <p className="md:text-[22px] text-[7px] whitespace-nowrap text-white font-semibold">Dự án hoàn thành</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src="/svg/international_customer.svg" className='md:w-14 md:h-14 w-7' alt="" />
                        <p className="md:text-[50px] text-sm text-white font-bold md:py-10 py-2">345</p>
                        <p className="md:text-[22px] text-[7px] whitespace-nowrap text-white font-semibold">Đối tác quốc tế</p>
                    </div>
                </div>
                <div className="absolute md:w-full grid grid-cols-4 md:flex justify-center md:mx-auto md:px-40 md:top-[1100px] top-[2260px] md:left-1/2 left-[170px] transform -translate-x-1/2 -translate-y-1/2 md:gap-3 gap-x-24 gap-y-5" >
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1100">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain " src="/svg/SMBC.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1300">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain " src="/svg/MIZUHO.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain" src="/svg/OKB.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1700">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain" src="/svg/MUFG.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full left-[170px]" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1900">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain" src="/svg/AICON.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2100">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain" src="/svg/MEGABANK.svg" alt="" />
                    </div>
                    <div className="md:h-[80px] md:w-[218px] w-20 h-10 flex flex-col items-center justify-center bg-white md:rounded-full rounded-full" data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2300">
                        <img className=" md:h-[70px] md:w-[160px] w-12 h-20 object-contain" src="/svg/MSIG.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;
