import React from 'react';

const ProductPage: React.FC = () => {
    return (
        <div className="relative top-0 left-0 w-full h-full bg-cover bg-top z-0"
            style={{
                backgroundImage: 'url(/svg/bg_product.svg)',
                backgroundPosition: 'center -2500px',
                paddingTop: 450
            }}>
            
            <h2 className="relative text-5xl text-green-600 font-bold mt-14 text-center">Product</h2>
            <div className="absolute flex justify-between pt-20 p-10 w-full">
                <div className="w-full">
                    <div className="space-y-8 ">
                        <img className='relative left-[60px] top-[15px]' src="/svg/plane_line.svg" alt="" />
                        <div className="flex items-center relative -top-[1300px]">
                            <img src="/svg/plane.svg" alt="Design" className="w-[156px] h-[94px] mr-4 flex self-start -mt-[40px]" />
                            <div className='flex flex-row items-start'>
                                <h3 className="text-2xl font-semibold pr-6 text-green-600">01</h3>
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-3xl text-blue-600 font-semibold pb-9">THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU</h3>
                                    <p className="text-gray-700 text-[20px] text-justify w-[560px]">
                                        Chúng tôi cung cấp các dịch vụ thiết kế từ logo,
                                        card visit, brochure, website đến các sản phẩm
                                        quảng cáo truyền thông. Mỗi sản phẩm đều được chăm
                                        chút tỉ mỉ, kết hợp giữa nghệ thuật và khoa học để
                                        mang lại giá trị thực sự cho thương hiệu của bạn.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative -top-[1160px]">
                            <img src="/svg/plane.svg" alt="Design" className="w-[156px] h-[94px] mr-4 flex self-start -mt-[40px]" />
                            <div className='flex flex-row items-start'>
                                <h3 className="text-2xl font-semibold pr-6 text-green-600">02</h3>
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-3xl text-blue-600 font-semibold pb-9">THIẾT KẾ PHẦN MỀM</h3>
                                    <p className="text-gray-700 text-[20px] text-justify w-[560px]">
                                        Đội ngũ phát triển phần mềm của chúng tôi chuyên
                                        cung cấp các giải pháp phần mềm tùy chỉnh, phù hợp
                                        với nhu cầu cụ thể của từng doanh nghiệp. Chúng tôi
                                        đảm bảo các sản phẩm phần mềm không chỉ hiệu quả mà
                                        còn dễ sử dụng và thân thiện với người dùng.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative -top-[1015px]">
                            <img src="/svg/plane.svg" alt="Design" className="w-[156px] h-[94px] mr-4 flex self-start -mt-[40px]" />
                            <div className='flex flex-row items-start'>
                                <h3 className="text-2xl font-semibold pr-6 text-green-600">03</h3>
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-3xl text-blue-600 font-semibold pb-9">QUY TRÌNH TÁI CẤU TRÚC DOANH NGHIỆP</h3>
                                    <p className="text-gray-700 text-[20px] text-justify w-[560px]">
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
                        </div>
                        <div className="flex items-center relative -top-[930px]">
                            <img src="/svg/plane.svg" alt="Design" className="w-[156px] h-[94px] mr-4 flex self-start -mt-[40px]" />
                            <div className='flex flex-row items-start'>
                                <h3 className="text-2xl font-semibold pr-6 text-green-600">04</h3>
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-3xl text-blue-600 font-semibold pb-9">THIẾT KẾ MÔ HÌNH KINH DOANH</h3>
                                    <p className="text-gray-700 text-[20px] text-justify w-[560px]">
                                        Tư vấn và thiết kết mô hình doanh nghiệp
                                        theo hướng thương mại điện tử.Đề xuất
                                        mô hình kinh doanh thương mại điện tử
                                        phù hợp với từng doanh nghiệp. Phác thảo
                                        lộ trình kinh doanh thương mại điện tử
                                        trong cả ngắn hạn và dài hạn. Cung cấp giải
                                        pháp tổng thể bao gồm high-level kiến trúc hệ thống,
                                        ước tính chi phí triển khai và thời gian dự kiến hoàn thành từng giai đoạn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-end pt-20 p-10 w-11/12">
                <div className="grid grid-cols-1 gap-[110px]">
                    <div className="relative">
                        <img src="/svg/design1.svg" alt="design1" className="w-[411px] h-[290px] object-cover" />
                        <img src="/svg/design2.svg" alt="" className="w-[360px] h-[150px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <img src="/svg/dev.svg" alt="dev" className="w-[411px] h-[290px] object-cover" />
                    <img src="/svg/finance.svg" alt="finance" className="w-[411px] h-[290px] object-cover" />
                    <img src="/svg/business.svg" alt="business" className="w-[411px] h-[290px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
