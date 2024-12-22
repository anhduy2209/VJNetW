import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative flex justify-between items-center p-4 text-white w-full h-60 z-50">
            {/* Content */}
            <img src="/svg/home_logo.svg" className="pl-16 pt-5 z-10" alt="Logo" />
            <nav className="relative mr-10 z-10 -top-14">
                <ul className="flex space-x-24">
                    <li><a href="#about" className="underline  font-bold text-sm underline-offset-2">ABOUT US</a></li>
                    <li><a href="#product" className="underline  font-bold text-sm underline-offset-2">PRODUCT</a></li>
                    <li><a href="#address" className="underline  font-bold text-sm underline-offset-2">ADDRESS</a></li>
                    <li>
                        <a href="#signup" className="ml-10 font-semibold text-md bg-white text-black  px-10 py-3 rounded-full">
                            SIGN UP
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


    );
};

export default Header;
