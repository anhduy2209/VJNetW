'use client'

import {
    Dialog,
    DialogPanel,
    Disclosure,
    PopoverGroup
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative flex justify-between p-4 text-white w-full h-60 z-50 px-8 md:z-50">
            <nav aria-label="Global" className="md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between w-full">
                <div className='flex flex-row'>
                    <img src="/svg/home_logo.svg" className="md:pl-16 md:pt-5 md:z-20 md:w-[316px] md:h-[155px] w-[139.55px] h-[121px] " alt="Logo" data-aos="fade-right" data-aos-duration="1500" />

                    <div className="flex lg:hidden mr-20">
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
                    </div>
                </div>

                <div className='relative -top-8 right-32 flex flex-row gap-x-7' data-aos="fade-left" data-aos-duration="2500">
                    <PopoverGroup className="hidden lg:flex lg:gap-x-20 flex-1 items-center justify-end whitespace-nowrap">
                        <a href="#about-us" className="underline text-white font-bold text-sm underline-offset-2">ABOUT US</a>
                        <a href="#product" className="underline text-white font-bold text-sm underline-offset-2">PRODUCT</a>
                        <a href="#address" className="underline text-white font-bold text-sm underline-offset-2">ADDRESS</a>
                    </PopoverGroup>

                    <div className="hidden sm:flex sm:flex-1 sm:justify-end" data-aos="fade-left" data-aos-duration="2800">
                        <a href="#signup" className="ml-10 font-semibold text-md bg-white text-black px-10 py-3 rounded-full">
                            SIGN UP
                        </a>
                    </div>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex flex-row items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">VJNetW</span>
                            <img src="/svg/home_logo.svg" className="pt-5 z-10 h-20 mb-16 flex justify-start" alt="Logo" data-aos="fade-right" data-aos-duration="1300" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 items-center"
                            data-aos="fade-left"
                            data-aos-duration="1300"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="-mt-10 flow-root" data-aos="fade-up-right" data-aos-duration="1300">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="flex space-y-10 flex-col mb-5">
                                <Disclosure as="div" className="-mx-3">
                                </Disclosure>
                                <a href="#about-us" className="no-underline  font-semibold text-md">ABOUT US</a>
                                <a href="#product" className="no-underline  font-semibold text-md">PRODUCT</a>
                                <a href="#address" className="no-underline  font-semibold text-md">ADDRESS</a>
                            </div>
                            <div className="py-2 flex justify-start">
                                <a href="#signup" className="font-semibold text-md bg-white text-black py-3 rounded-full">
                                    SIGN UP
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
