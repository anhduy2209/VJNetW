const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[url('/svg/bg_footer.svg')] -top-[770px] left-0 h-[900px] w-full bg-cover bg-no-repeat pb-0 z-0 overflow-hidden">
            <nav className="relative top-[300px] z-30 flex justify-center items-center text-white">
                <ul className="flex space-x-24 justify-center">
                    <li><a href="#about" className="underline font-bold text-sm underline-offset-2">OUR TEAM</a></li>
                    <li><a href="#product" className="underline font-bold text-sm underline-offset-2">TOKENS</a></li>
                    <li><a href="#address" className="underline font-bold text-sm underline-offset-2">CONNECT WALLET</a></li>
                    <li><a href="#address" className="underline font-bold text-sm underline-offset-2">LIGHTPAPER</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
