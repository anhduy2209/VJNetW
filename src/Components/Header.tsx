'use client'

import {
    XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault(); // Ngừng hành động mặc định (chuyển trang)

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function Header() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const images = [
        ["/images/qr_1.jpg"],
        ["/images/qr_2.jpg"],
    ];

    return (
        <header className="relative flex justify-between p-4 text-white w-full h-60 z-50 px-8 md:z-50">
            <nav aria-label="Global" className="md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between w-full">
                <div className='flex flex-row'>
                    <a href="#">
                        <img src="/svg/home_logo.svg" className="md:pl-16 md:pt-5 md:z-20 md:w-[316px] md:h-[155px] w-[200px] h-[140px] mx-auto md:mx-0" alt="Logo" data-aos="fade-right" data-aos-duration="1500" />

                    </a>
                    {/* <div className="flex lg:hidden mr-20">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 pl-52"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div> */}
                </div>

                <div className='relative md:-top-8 md:right-32 flex md:flex-row flex-col md:gap-x-7' data-aos="fade-left" data-aos-duration="2500">
                    <div className="hidden lg:flex lg:gap-x-20 flex-1 items-center md:justify-end md:whitespace-nowrap">
                        <a href="#about-us" onClick={(e) => handleScrollToSection(e, 'about-us')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">ABOUT US</a>
                        <a href="#product" onClick={(e) => handleScrollToSection(e, 'product')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">PRODUCT</a>
                        <a href="#address" onClick={(e) => handleScrollToSection(e, 'address')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">ADDRESS</a>
                    </div>
                    <div className="md:hidden flex gap-5 mx-auto whitespace-nowrap">
                        <a href="#about-us" onClick={(e) => handleScrollToSection(e, 'about-us')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">ABOUT US</a>
                        <a href="#product" onClick={(e) => handleScrollToSection(e, 'product')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">PRODUCT</a>
                        <a href="#address" onClick={(e) => handleScrollToSection(e, 'address')} className="underline md:text-white text-gray-700 font-bold text-sm underline-offset-2">ADDRESS</a>
                    </div>

                    <div className="hidden sm:flex sm:flex-1 sm:justify-end" data-aos="fade-left" data-aos-duration="2800">
                        <button onClick={() => setPopupOpen(true)} className="ml-10 font-semibold text-md bg-white text-black px-10 py-3 rounded-full">
                            SIGN UP
                        </button>
                    </div>
                    <div className="md:hidden flex items-center justify-center mx-auto mt-2 z-60" data-aos="fade-left" data-aos-duration="2800">
                        <button onClick={() => setPopupOpen(true)} className="ml-10 font-semibold text-md bg-blue-100 text-black px-10 py-3 rounded-full">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </nav>

            {/* <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="relative inset-0 z-10" />
                <DialogPanel className="absolute inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex flex-row items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">VJNetW</span>
                            <img src="/svg/home_logo.svg" className="pt-5 z-10 h-20 mb-24 flex justify-start" alt="Logo" data-aos="fade-right" data-aos-duration="1300" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 items-center"
                            data-aos="fade-left"
                            data-aos-duration="1300"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="-mt-10 flow-root" data-aos="fade-up-right" data-aos-duration="1300">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="flex space-y-10 flex-col mb-5">
                                <a href="#about-us" onClick={(e) => handleScrollToSection(e, 'about-us')} className="no-underline font-semibold text-gray-700 text-md">ABOUT US</a>
                                <a href="#product" onClick={(e) => handleScrollToSection(e, 'product')} className="no-underline font-semibold text-gray-700 text-md">PRODUCT</a>
                                <a href="#address" onClick={(e) => handleScrollToSection(e, 'address')} className="no-underline font-semibold text-gray-700 text-md">ADDRESS</a>
                            </div>
                            <div className="py-2 flex justify-start">
                                <button onClick={() => setPopupOpen(true)} className="font-semibold text-md bg-white text-black py-3 rounded-full">
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog> */}

            {/* Popup for SIGN UP */}
            {popupOpen && (
                <div className="fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-50">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setPopupOpen(false)}
                    />

                    {/* Popup Content */}
                    <div className="relative bg-white rounded-lg p-4 w-full max-w-md">
                        {/* Tabs */}
                        <div className="tabs flex mb-4 gap-5 justify-center">
                            <button
                                className={`tab p-2 cursor-pointer px-10 border border-blue-300 rounded-lg ${activeTab === 0 ? 'bg-blue-300 text-black' : 'bg-blue-100 text-gray-400'}`}
                                onClick={() => setActiveTab(0)}>
                                1
                            </button>
                            <button
                                className={`tab p-2 cursor-pointer px-10 border border-blue-300 rounded-lg ${activeTab === 1 ? 'bg-blue-300 text-black' : 'bg-blue-100 text-gray-400'}`}
                                onClick={() => setActiveTab(1)}>
                                2
                            </button>
                        </div>

                        {/* Images */}
                        <div className="images md:h-full md:w-full h-full w-full mx-auto my-auto">
                            {images[activeTab].map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Tab ${activeTab + 1} Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            ))}
                        </div>


                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 md:py-2 md:px-2 px-1 py-1 bg-red-600 rounded-lg md:mx-2"
                            onClick={() => setPopupOpen(false)}
                        >
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}