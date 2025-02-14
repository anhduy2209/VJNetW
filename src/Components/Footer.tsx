const Footer: React.FC = () => {
    return (
        <footer className="relative md:h-full h-[1000px] bg-[url('/svg/bg_footer.svg')] md:-top-[800px] top-[1000px] left-0 w-full bg-cover bg-no-repeat pb-0 z-0 overflow-hidden">
            <nav className="relative md:top-[350px] top-56 z-30 flex justify-center items-center text-white" data-aos="zoom-in-up">
                <ul className="md:flex md:space-x-24 space-x-10 md:justify-center flex flex-wrap justify-center ">
                    <li><a href="#about" className="underline md:w-auto font-bold text-sm underline-offset-2">OUR TEAM</a></li>
                    <li><a href="#product" className="underline md:w-auto font-bold text-sm underline-offset-2">TOKENS</a></li>
                    <li><a href="#address" className="underline md:w-auto font-bold text-sm underline-offset-2">CONNECT WALLET</a></li>
                    <li><a href="#address" className="underline md:w-auto font-bold text-sm underline-offset-2">LIGHTPAPER</a></li>
                </ul>
            </nav>
            <div className="flex md:flex-row md:pt-20 flex-col" data-aos="fade-left" data-aos-duration="2000">
                <img src="/svg/home_logo.svg" className="relative md:pl-28 md:top-[400px] md:h-[155px] md:w-[416px] md:pt-0 md:mx-0 pt-72 mx-auto w-64 z-10" alt="Logo" data-aos="fade-right" data-aos-duration="2000" />
                <img src="/svg/social.svg" alt="Social" className="relative md:left-96 md:top-[380px] space-x-10 md:h-auto md:w-auto md:mt-auto md:mx-0 w-72 mx-auto mt-14 mb-20 z-10" data-aos="zoom-in-down" data-aos-duration="2000" />
                <div className="flex flex-col gap-4 md:pl-36 pt-8" data-aos="fade-left" data-aos-duration="3000">
                    <div className="flex md:items-center md:space-x-4">
                        <img src="/svg/location_icon.svg" alt="location" className="relative md:left-96 md:top-[445px] z-10 md:pr-9 ml-6" />
                        <p className="md:text-white text-gray-600 relative md:left-96 md:top-[445px] md:text-xl md:mx-0 md:my-5 mx-4 my-5">90/19, Khu phố 3, phường Tân Tiến, Biên Hòa, Đồng Nai.</p>
                    </div>
                    <div className="flex md:items-center md:space-x-4">
                        <img src="/svg/home_icon.svg" alt="location" className="relative md:left-96 md:top-[445px] z-10 md:pr-9 ml-6" />
                        <p className="md:text-white text-gray-600 relative md:left-96 md:top-[445px] md:text-xl md:mx-0 md:my-5 mx-4 my-5">Văn phòng đại diện <br />
                            Tòa nhà 227-Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội
                        </p>
                    </div>
                    <div className="flex md:items-center md:space-x-4">
                        <img src="/svg/mail_icon.svg" alt="location" className="relative md:left-96 md:top-[445px] z-10 md:pr-9 ml-6" />
                        <p className="md:text-white text-gray-600 relative md:left-96 md:top-[445px] md:text-xl md:mx-0 md:my-5 mx-4 my-5">vjnetwork2655@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
