const VisionAndMission: React.FC = () => {
    return (
        <div className="relative">
            <div className="flex justify-around items-center px-40 bg-white z-50 top-[50px] max-w-full">
                <div className="w-[760px] md:w-[730px] h-[930px] md:h-[900px] text-center -top-[200px] px-20 pt-14 border rounded-3xl shadow-lg bg-gray-100 flex flex-col items-center relative z-20 opacity-95">
                    <h2 className="text-5xl font-bold mb-8 text-green-600">Tầm nhìn</h2>
                    <p className="text-sm mb-4 text-justify text-gray-400">
                        Chúng tôi hướng tới mục tiêu trở thành đối tác chiến lược hàng đầu cho các doanh nghiệp
                        trong việc cung cấp các giải pháp toàn diện và nhân lực chất lượng cao,
                        giúp các tổ chức không chỉ vươn lên mạnh mẽ trong quá trình chuyển đổi số mà
                        còn phát triển bền vững trong môi trường kinh doanh toàn cầu đầy cạnh tranh.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400">
                        Tầm nhìn của chúng tôi là xây dựng một hệ sinh thái doanh nghiệp số toàn diện,
                        nơi mà mỗi doanh nghiệp, dù lớn hay nhỏ, đều có cơ hội tiếp cận và tận dụng
                        công nghệ để tối ưu hóa quy trình, nâng cao hiệu quả và mở rộng thị trường.
                        Chúng tôi hướng tới việc trở thành cầu nối giữa doanh nghiệp và công nghệ,
                        mang đến những giải pháp đổi mới và phù hợp với từng nhu cầu cụ thể, từ quản lý tài chính,
                        nhân sự, truyền thông đến phát triển mô hình thương mại điện tử.
                        <img src="/svg/vision.svg" alt="Tầm nhìn" className="mx-auto mb-3 object-contain h-[580px] md:h-[500px] md:ml-20 max-w-full" />

                    </p>
                </div>
                <div className="w-[760px] md:w-[700px] h-[930px] md:h-[900px] text-center -top-[200px] ml-10 px-20 pt-14 border rounded-3xl shadow-lg bg-gray-100 flex flex-col items-center relative z-20  bg-no-repeat opacity-95">
                    <h2 className="text-5xl font-bold mb-8 text-blue-600">Sứ mệnh</h2>
                    <p className="text-sm mb-4 text-justify text-gray-400">
                        Sứ mệnh của chúng tôi là tạo ra giá trị đột phá cho doanh nghiệp
                        thông qua việc cung cấp các giải pháp công nghệ tiên tiến và nguồn
                        nhân lực chất lượng cao. Chúng tôi cam kết đồng hành cùng doanh nghiệp
                        trong việc chuyển đổi số và tối ưu hóa mô hình hoạt động, giúp họ phát
                        triển mạnh mẽ hơn trong một môi trường kinh doanh ngày càng phức tạp và biến đổi.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400">
                        Nhân lực của chúng tôi không chỉ là những chuyên gia có kỹ năng,
                        mà còn là những người có khả năng tư duy chiến lược, am hiểu thị
                        trường và biết cách tận dụng công nghệ để mang lại hiệu quả tối đa.
                        Với blockchain, chúng tôi giúp các doanh nghiệp tối ưu hóa quy trình,
                        nâng cao tính minh bạch và bảo mật trong quản lý dữ liệu và giao dịch.
                    </p>
                    <p className="text-sm mb-4 text-justify text-gray-400 relative">
                        Sứ mệnh của chúng tôi còn bao gồm việc tư vấn và thiết kế các mô hình
                        doanh nghiệp theo hướng thương mại điện tử, giúp doanh nghiệp mở rộng
                        quy mô và tiếp cận khách hàng một cách hiệu quả nhất. Chúng tôi tin rằng
                        thương mại điện tử không chỉ là xu hướng mà còn là tương lai của nhiều ngành công nghiệp.
                        <img src="/svg/mission.svg" alt="Sứ mệnh" className="mx-auto ml-48 mb-24 object-contain h-[580px] md:h-[450px] md:mt-12 md:ml-32 max-w-full absolute top-1" />
                    </p>
                </div>
            </div>

            <div>
                <img
                    className="absolute top-64 w-[2400px] max-w-none -left-[180px]"
                    src="/svg/bg2_1.svg"
                    alt=""
                />
                <img
                    className="absolute -left-10 top-[700px] w-[2000px] max-w-none"
                    src="/svg/bg2_2.svg"
                    alt=""
                />
                <div className="absolute w-full flex justify-center mx-auto px-40 top-[880px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <img src="/svg/customer.svg" alt="" />
                        <p className="text-[50px] text-white font-bold py-[18px]">3570</p>
                        <p className="text-[22px] text-white font-semibold">Khách hàng trung thành</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <img src="/svg/project.svg" alt="" />
                        <p className="text-[50px] text-white font-bold py-[18px]">451</p>
                        <p className="text-[22px] text-white font-semibold">Dự án</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <img src="/svg/done_project.svg" alt="" />
                        <p className="text-[50px] text-white font-bold py-[18px]">250</p>
                        <p className="text-[22px] text-white font-semibold">Dự án hoàn thành</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <img src="/svg/international_customer.svg" alt="" />
                        <p className="text-[50px] text-white font-bold py-[18px]">345</p>
                        <p className="text-[22px] text-white font-semibold">Đối tác quốc tế</p>
                    </div>
                </div>
                <div className="absolute w-full flex justify-center mx-auto px-40 top-[1100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] md:h-[70px] w-[190px] md:w-[160px] object-contain " src="/svg/SMBC.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px] " src="/svg/MIZUHO.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px]" src="/svg/OKB.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px]" src="/svg/MUFG.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px]" src="/svg/AICON.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px]" src="/svg/MEGABANK.svg" alt="" />
                    </div>
                    <div className="h-[80px] w-[218px] flex flex-col items-center justify-center bg-white rounded-full">
                        <img className="h-[80px] w-[218px]" src="/svg/MSIG.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;
