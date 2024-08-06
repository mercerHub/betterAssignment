'use client'
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { IoMdCall } from "react-icons/io";

interface Props {
    textColor?: string;
    bgColor?: string;
}

function Navbar(props: Props) {
    const [isSection1, setIsSection1] = useState(true);

    useEffect(() => {
        const header = document.querySelector('header');
        const section2 = document.querySelector('.section-2');

        const handleScroll = () => {
            const section2Rect = section2?.getBoundingClientRect();
            if (section2Rect && section2Rect.y < 120) {
                setIsSection1(false);
                header?.classList.add('bg-white', 'text-black');
                header?.classList.remove('bg-teal-900', 'text-white');
            } else {
                setIsSection1(true);
                header?.classList.add('bg-teal-900', 'text-white');
                header?.classList.remove('bg-white', 'text-black');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="sticky top-0 z-20 transition-all ease-in-out duration-100 px-5 w-full content-center bg-teal-900 text-white">
            <nav className="flex justify-between items-center p-4">
                <div className='flex items-center justify-center gap-x-5 p-2'>
                    <Logo height={"35px"} width={"75px"} />
                    <div className='lg:flex items-center space-x-8 hidden'>
                        <Link href='#' className={`${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:bg-white hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200`}>Buy</Link>
                        <Link href='#' className={`${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:bg-white hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200`}>Refinance</Link>
                        <Link href='#' className={`${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:bg-white hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200`}>HELOC</Link>
                        <Link href='#' className={`${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:bg-white hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200`}>Rates</Link>
                        <Link href='#' className={`${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:bg-white hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200`}>Better+</Link>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className={`border-2 lg:text-2xl px-2 py-2 rounded-full ${isSection1 ? "hover:bg-white" : "hover:bg-gray-300"} hover:text-black transition-all ease-in-out delay-100 duration-200`}>
                        <IoMdCall />
                    </div>
                    <div className={`${isSection1 ? "hover:bg-white" : ""}  hover:text-black py-3 px-6 rounded-3xl transition-all ease-in-out delay-100 duration-200 hidden lg:block cursor-pointer hover:bg-gray-300`}>
                        Sign in
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;
