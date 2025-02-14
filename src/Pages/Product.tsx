import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const ProductPage: React.FC = () => {
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
        <div className="relative md:top-0 md:left-0 md:w-full md:bg-cover bg-cover z-0 bg-[url('/svg/bg_product.svg')] md:pt-[550px] pt-80 md:bg-[center_-2000px] opacity-90" data-aos="fade-left">
            <h2 className="relative md:text-5xl text-3xl text-green-600 font-bold md:mt-52 mt-0 -top-32 text-center md:text-center" data-aos="zoom-in-up" data-aos-duration="3000">Product</h2>
            <div className="absolute flex justify-between pt-20 md:p-10 w-full md:top-[800px] top-[1500px]">
                <div className="w-full">
                    <div className="space-y-8 pb-64">
                        <img className='relative md:left-[60px] md:top-[15px] left-0 md:block hidden' src="/svg/plane_line.svg" alt="" data-aos="fade-right" data-aos-duration="1000" />
                        <div className="flex items-center md:flex-row flex-col relative -top-[1300px]" data-aos="fade-left" data-aos-duration="2000">
                            <img src="/svg/plane.svg" alt="Design" className="md:w-[156px] md:h-[94px] w-28 h-14 flex self-start -mt-[40px]" data-aos="fade-left" />
                            <div className='flex md:flex-row flex-col items-start md:ml-0 md:mr-0 ml-5 mr-5' data-aos="fade-left">
                                <h3 className="md:text-2xl text-lg font-semibold pr-6 text-green-600" data-aos="fade-left" data-aos-duration="2000">01</h3>
                                <div className='flex flex-col items-start' data-aos="fade-left" >
                                    <h3 className="md:text-3xl text-md text-blue-600 font-semibold md:pb-9 pb-3" data-aos="fade-left" data-aos-duration="2500">THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU</h3>
                                    <p className="text-gray-700 md:text-[20px] text-sm text-justify md:w-[560px] w-full md:leading-8 leading-6" data-aos="fade-left" data-aos-duration="2500">
                                        Chúng tôi cung cấp các dịch vụ thiết kế từ logo,
                                        card visit, brochure, website đến các sản phẩm
                                        quảng cáo truyền thông. Mỗi sản phẩm đều được chăm
                                        chút tỉ mỉ, kết hợp giữa nghệ thuật và khoa học để
                                        mang lại giá trị thực sự cho thương hiệu của bạn.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1x md:hidden visible mt-5">
                                <div className="relative" data-aos="fade-left">
                                    <img src="/svg/design1.svg" alt="design1" className="w-[250px] h-[200px] object-contain" />
                                    <img src="/svg/design2.svg" alt="" className="w-[200px] h-[120px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col relative md:-top-[1165px] -top-[1250px]" data-aos="fade-left" data-aos-duration="2000">
                            <img src="/svg/plane.svg" alt="Design" className="md:w-[156px] md:h-[94px] w-28 h-14 flex self-start -mt-[40px]" data-aos="fade-left" />
                            <div className='flex md:flex-row flex-col items-start md:ml-0 md:mr-0 ml-5 mr-5' data-aos="fade-left">
                                <h3 className="md:text-2xl text-lg font-semibold pr-6 text-green-600" data-aos="fade-left" data-aos-duration="2000">02</h3>
                                <div className='flex flex-col items-start' data-aos="fade-left" data-aos-duration="2500">
                                    <h3 className="md:text-3xl text-md text-blue-600 font-semibold md:pb-9 pb-3" data-aos="fade-left" data-aos-duration="2500">THIẾT KẾ PHẦN MỀM</h3>
                                    <p className="text-gray-700 md:text-[20px]  text-sm text-justify md:w-[560px] w-full md:leading-8 leading-6" data-aos="fade-left" data-aos-duration="2500">
                                        Đội ngũ phát triển phần mềm của chúng tôi chuyên
                                        cung cấp các giải pháp phần mềm tùy chỉnh, phù hợp
                                        với nhu cầu cụ thể của từng doanh nghiệp. Chúng tôi
                                        đảm bảo các sản phẩm phần mềm không chỉ hiệu quả mà
                                        còn dễ sử dụng và thân thiện với người dùng.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1x md:hidden visible mt-5">
                                <img src="/svg/dev.svg" alt="dev" className="w-[250px] h-[200px] object-contain" data-aos="fade-left" />
                            </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col relative md:-top-[1035px] -top-[1200px]" data-aos="fade-left" data-aos-duration="2000">
                            <img src="/svg/plane.svg" alt="Design" className="md:w-[156px] md:h-[94px] w-28 h-14 flex self-start -mt-[40px]" data-aos="fade-left" />
                            <div className='flex md:flex-row flex-col items-start md:ml-0 md:mr-0 ml-5 mr-5' data-aos="fade-left">
                                <h3 className="md:text-2xl text-lg font-semibold pr-6 text-green-600" data-aos="fade-left" data-aos-duration="2000">03</h3>
                                <div className='flex flex-col items-start' data-aos="fade-left" data-aos-duration="2500">
                                    <h3 className="md:text-3xl text-md text-blue-600 font-semibold md:pb-9 pb-3" data-aos="fade-left" data-aos-duration="2500">QUY TRÌNH TÁI CẤU TRÚC DOANH NGHIỆP</h3>
                                    <p className="text-gray-700 md:text-[20px]  text-sm text-justify md:w-[560px] w-full md:leading-8 leading-6" data-aos="fade-left" data-aos-duration="2500">
                                        Cung cấp giải pháp tái cấu trúc doanh nghiệp trong
                                        các lĩnh vực: tài chính, nhân sự, truyền thông. Quy
                                        trình tái cấu trúc doanh nghiệp cần được thiết lập
                                        ngay sau khi các nhà lãnh đạo nhận thấy những dấu
                                        hiệu ảnh hưởng đến hoạt động kinh doanh. Bất kể lý
                                        do tái cấu trúc là gì, doanh nghiệp nhất thiết phải
                                        thực hiện đúng quy trình các bước sau đây để đảm bảo
                                        hiệu quả và giảm thiểu tối đa rủi ro.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1x md:hidden visible mt-5">
                                <img src="/svg/finance.svg" alt="finance" className="w-[250px] h-[200px] object-contain" data-aos="fade-left" />
                            </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col relative md:-top-[965px] -top-[1150px]" data-aos="fade-left" data-aos-duration="2000">
                            <img src="/svg/plane.svg" alt="Design" className="md:w-[156px] md:h-[94px] w-28 h-14 flex self-start -mt-[40px]" data-aos="fade-left" />
                            <div className='flex md:flex-row flex-col items-start md:ml-0 md:mr-0 ml-5 mr-5' data-aos="fade-left">
                                <h3 className="md:text-2xl text-lg font-semibold pr-6 text-green-600" data-aos="fade-left" data-aos-duration="2000">04</h3>
                                <div className='flex flex-col items-start' data-aos="fade-left">
                                    <h3 className="md:text-3xl text-md text-blue-600 font-semibold md:pb-9 pb-3" data-aos="fade-left" data-aos-duration="2500">THIẾT KẾ MÔ HÌNH KINH DOANH</h3>
                                    <p className="text-gray-700 md:text-[20px]  text-sm text-justify md:w-[560px] w-full md:leading-8 leading-6" data-aos="fade-left" data-aos-duration="2500">
                                        Tư vấn và thiết kết mô hình doanh nghiệp
                                        theo hướng thương mại điện tử. Đề xuất
                                        mô hình kinh doanh thương mại điện tử
                                        phù hợp với từng doanh nghiệp. Phác thảo
                                        lộ trình kinh doanh thương mại điện tử
                                        trong cả ngắn hạn và dài hạn. Cung cấp giải
                                        pháp tổng thể bao gồm high-level kiến trúc hệ thống,
                                        ước tính chi phí triển khai và thời gian dự kiến hoàn thành từng giai đoạn.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1x md:hidden visible mt-5">
                                <img src="/svg/business.svg" alt="business" className="w-[250px] h-[200px] object-contain" data-aos="fade-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative md:flex md:justify-end pt-6 p-64 md:w-full md:visible hidden" data-aos="fade-left">
                <div className="grid grid-cols-1 gap-[110px]">
                    <div className="relative" data-aos="fade-left">
                        <img src="/svg/design1.svg" alt="design1" className="w-[411px] h-[290px] object-cover" />
                        <img src="/svg/design2.svg" alt="" className="w-[360px] h-[150px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <img src="/svg/dev.svg" alt="dev" className="w-[411px] h-[290px] object-cover" data-aos="fade-left" />
                    <img src="/svg/finance.svg" alt="finance" className="w-[411px] h-[290px] object-cover" data-aos="fade-left" />
                    <img src="/svg/business.svg" alt="business" className="w-[411px] h-[290px] object-cover" data-aos="fade-left" />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
