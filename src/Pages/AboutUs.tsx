import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutUs = () => {
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
        <section id="about-us" className="md:pt-44 md:pl-44 pl-5 min-h-10 flex justify-between">
            <div className="flex-1">
                <h2 className="text-green-600 md:text-5xl font-bold md:mb-4 mb-0 text-3xl md:mt-4" data-aos="fade-right" data-aos-duration="2000">About us</h2>
                <p className="text-gray-400 leading-relaxed max-w-xl text-justify md:mt-12 mt-6 md:text-xl text-md mr-4" data-aos="fade-left" data-aos-duration="2200">
                    VJ Network tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp công nghệ và phần mềm từ năm 2018.
                    Sau quá trình phát triển và hoạt động, chúng tôi không ngừng học hỏi và tìm hiểu nâng cao chuyên môn trong nhiều lĩnh vực như tài chính, truyền thông, thiết kế.
                    Đến nay chúng tôi tự tin là đơn vị cung cấp các giải pháp tối ưu nhất cho các tổ chức và doanh nghiệp trong các ngành nghề kể trên.
                    Hãy để chúng tôi trở thành đối tác tin cậy trong hành trình phát triển của bạn!
                </p>
                <div className="flex mt-24 w-96" data-aos="fade-right" data-aos-duration="2500">
                    <input
                        type="email"
                        placeholder="Email"
                        className="focus:outline-none focus:border-separate border rounded-full p-2 pl-5 w-full bg-gray-100"
                    />
                    <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full -ml-8">
                        Register
                    </button>
                </div>
            </div>

            <div className="relative md:left-[470px] left-40 z-40 md:block hidden md:-top-96">
                <div className="relative flex md:flex-row flex-row">
                    <img
                        src="/svg/char1_home.svg"
                        alt=""
                        className="relative md:w-[730px] md:h-auto md:right-[360px] w-[300px] h-[800px] top-20"
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                    />
                    <img
                        src="/svg/char2_home.svg"
                        alt=""
                        className="w-full h-full md:w-[442px] md:h-auto absolute top-20 right-0 md:right-[850px] max-w-full"
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
