const FriendlyWorkspace: React.FC = () => {
    return (
        <div className="relative  min-h-full pl-[200px] bg-[url('/svg/bg_comp.svg')] bg-[center_-100px] -top-[520px] left-0 h-[1600px] w-full bg-cover bg-no-repeat z-10">
            <p className="relative top-80 text-center text-4xl font-semibold text-white -left-28">Văn Phòng Thân Thiện & Chuyên Nghiệp</p>
            <div className="flex flex-row gap-4 relative">
                <img src="/svg/comp1.svg" alt="comp img1" className="relative h-[592px] w-[506px] top-[400px]" />
                <img src="/svg/comp2.svg" alt="comp img2" className="relative h-[592px] w-[506px] top-[450px]" />
                <img src="/svg/comp3.svg" alt="comp img3" className="relative h-[592px] w-[506px] top-[400px]" />
            </div>
            <div className="flex flex-row">
                <img src="/svg/char2_home.svg" alt="char-left" className="relative tranform scale-x-[-1] h-[442px] w-[242px] left-[350px] top-14" />
                <img src="/svg/char3.svg" alt="char-left" className="relative h-[442px] w-[242px] left-[680px] top-16" />
            </div>
            <p className="relative text-center top-36 text-white font-light text-2xl">
                Chào mừng bạn đến với văn phòng của chúng tôi, nơi sự thân thiện và chuyên nghiệp <br /> <br />
                Mỗi ngày tại văn phòng, chúng tôi chứng kiến sự ra đời của những ý tưởng đột phá. <br /> <br />
                Không gian làm việc thoải mái và chuyên nghiệp là nơi những giấc mơ trở thành hiện thực.
            </p>
        </div>
    )
}

export default FriendlyWorkspace 