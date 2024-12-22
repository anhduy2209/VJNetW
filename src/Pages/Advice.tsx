const AdvicePage: React.FC = () => {
    return (
        <div className="bg-light-pink min-h-screen pl-[200px] pt-[500px] flex flex-row">
            <div className="pr-[60px]">
                <p className="font-bold text-[50px] text-green-600 mb-[60px]">HÃY ĐĂNG KÝ <br />ĐỂ ĐƯỢC TƯ VẤN</p>
                <p className="w-[644px] text-justify text-[22px] text-gray-400">
                    Bạn đang tìm kiếm giải pháp công nghệ đột phá?<br /><br />
                    Đừng bỏ lỡ cơ hội nhận được sự hỗ trợ từ đội ngũ chuyên gia của chúng tôi!<br />
                    Hãy đăng ký ngay hôm nay để khám phá thêm về các sản phẩm và dịch vụ vượt trội, giúp doanh nghiệp của bạn phát triển bền vững.
                    <br /><br />Liên hệ ngay để nhận tư vấn miễn phí!
                </p>
            </div>
            <div className="relative w-[956px] h-[900px] rounded-3xl bg-pink-gray flex items-center justify-start">
                <img className="absolute left-[650px] -top-[70px] w-[370px] h-[499px]" src="/svg/rocket.svg" alt="" />
                <img className="absolute left-[700px] top-[1px] w-[100px] h-[56px]" src="/svg/cloud1_adv.svg" alt="" />
                <img className="absolute left-[840px] top-[140px] w-[114px] h-[73px]" src="/svg/cloud2_adv.svg" alt="" />
                <div className="flex flex-col pl-[30px] pr-[34px]">
                    <input type="text" name="name" id="" placeholder="Full Name" className="h-[39px] w-[300px] pl-6 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" />
                    <input type="email" name="name" id="" placeholder="Email" className="h-[39px] w-[300px] pl-6 mt-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate" />
                </div>
                <div className="flex flex-col items-end">
                    <input
                        className="w-[500px] h-[245px] bg-white p-5 border border-blue-300 rounded-xl focus:outline-none focus:border-separate leading-tight placeholder-top pb-48"
                        type="text"
                        name="asking_advice"
                        placeholder="What advice do you need?"
                    />
                    <button
                        className="w-[134px] h-[39px] bg-white p-5 rounded-full flex items-center justify-center mt-4 font-semibold"
                        type="submit">
                        Send →
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AdvicePage