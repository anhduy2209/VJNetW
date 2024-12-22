const AboutUs = () => {
    return (
        <section className="pt-44 pl-44 min-h-10 flex justify-between">
            <div className="flex-1">
                <h2 className="text-green-600 text-5xl font-bold mb-4">About us</h2>
                <p className="text-gray-400 leading-relaxed max-w-xl text-justify mt-12 text-xl">
                    VJ Network tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp công nghệ và phần mềm từ năm 2018.
                    Sau quá trình phát triển và hoạt động, chúng tôi không ngừng học hỏi và tìm hiểu nâng cao chuyên môn trong nhiều lĩnh vực như tài chính, truyền thông, thiết kế.
                    Đến nay chúng tôi tự tin là đơn vị cung cấp các giải pháp tối ưu nhất cho các tổ chức và doanh nghiệp trong các ngành nghề kể trên.
                    Hãy để chúng tôi trở thành đối tác tin cậy trong hành trình phát triển của bạn!
                </p>
                <div className="flex mt-24 w-96">
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

            <div className="relative left-[470px] z-50 -top-[300px]">
                <div className="relative flex ">
                    <img
                        src="/svg/char1_home.svg"
                        alt=""
                        className="relative w-[730px] h-auto right-[360px]"
                    />
                    <img
                        src="/svg/char2_home.svg"
                        alt=""
                        className="absolute w-[442px] h-auto right-[850px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
