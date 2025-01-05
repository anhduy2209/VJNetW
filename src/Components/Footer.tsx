const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[url('/svg/bg_footer.svg')] -top-[770px] left-0 h-[800px] w-full bg-cover bg-no-repeat pb-0 z-0 overflow-hidden">
            <nav className="relative top-[350px] z-30 flex justify-center items-center text-white" data-aos="zoom-in-up">
                <ul className="flex space-x-24 justify-center">
                    <li><a href="#about" className="underline font-bold text-sm underline-offset-2">OUR TEAM</a></li>
                    <li><a href="#product" className="underline font-bold text-sm underline-offset-2">TOKENS</a></li>
                    <li><a href="#address" className="underline font-bold text-sm underline-offset-2">CONNECT WALLET</a></li>
                    <li><a href="#address" className="underline font-bold text-sm underline-offset-2">LIGHTPAPER</a></li>
                </ul>
            </nav>
            <div className="flex flex-row pt-20" data-aos="fade-left" data-aos-duration="2000">
                <img src="/svg/home_logo.svg" className="relative pl-28 top-[400px] h-[155px] w-[416px] z-10" alt="Logo" data-aos="fade-right" />
                <img src="/svg/social.svg" alt="Social" className="relative left-96 top-[445px] z-10" data-aos="zoom-in-right" />
                <div className="flex flex-col gap-4 pl-36">
                    <div className="flex items-center space-x-4">
                        <img src="/svg/location_icon.svg" alt="location" className="relative left-96 top-[445px] z-10 pr-9" />
                        <p className="text-white relative left-96 top-[445px] text-xl">90/19, Khu phố 3, phường Tân Tiến, Biên Hòa, Đồng Nai.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="/svg/home_icon.svg" alt="location" className="relative left-96 top-[445px] z-10 pr-9" />
                        <p className="text-white relative left-96 top-[445px] text-xl">Văn phòng đại diện <br />
                            Tòa nhà 227-Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="/svg/mail_icon.svg" alt="location" className="relative left-96 top-[445px] z-10 pr-9" />
                        <p className="text-white relative left-96 top-[445px] text-xl">vjnetwork2655@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
