'use client'
import BetterMort from '@/components/betterSvgs/BetterMort'
import BuyHome from '@/components/betterSvgs/BuyHome';
import CashOut from '@/components/betterSvgs/CashOut';
import HomeEquity from '@/components/betterSvgs/HomeEquity';
import Refinancing from '@/components/betterSvgs/Refinancing';
import Image from 'next/image';
import React from 'react'
import { IoMdCall } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaMobileScreenButton } from "react-icons/fa6";
import Svg1 from '@/components/betterSvgs/Svg1';

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className='w-screen flex items-center flex-col'>
            <header className='w-full p-5 top-0 sticky flex items-center justify-center h-[20vh] bg-white'>
                <div className='absolute h-[50px] w-[50px] rounded-full top-24'>
                    <Image
                        alt=''
                        src="/images/betty1.jpg"
                        height={500}
                        width={500}
                        style={{borderRadius:"100%"}}
                    />
                </div>
                <nav className='w-[90%] flex justify-between text-3xl p-2 px-4 items-center border-b-4 h-full'>
                    <BetterMort/>
                    <span className='p-2 rounded-xl flex justify-center items-center gap-2 font-semibold hover:shadow-green-500 hover:shadow-md cursor-pointer'>
                        <IoMdCall size={40} className='rounded-full text-green-800 p-1 bg-green-100'/>
                        <span className='text-base font-medium better-text2 hidden lg:block'>Need help? call (415) 523 8837</span>
                    </span>
                </nav>
            </header>
            <div className='min-h-screen flex flex-col items-center gap-5 w-full lg:w-1/2 p-5'>
                <h1 className='text-center better-text2 text-3xl lg:text-5xl font-bold flex flex-col'>
                    <span>Hi, I'm Betty!</span>
                    <span>What can I help you with?</span>
                </h1>
                <div className='inline-flex items-center gap-5 whitespace-nowrap rounded-xl text-medium font-semibold better-text2 leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-8 w-full lg:w-4/5 hover:text-teal-700 cursor-pointer'>
                    <BuyHome/> 
                    <span>Buying a home</span>
                </div>
                <div className='inline-flex items-center gap-5 whitespace-nowrap rounded-xl text-medium font-semibold better-text2 leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-8 w-full lg:w-4/5 hover:text-teal-700 cursor-pointer'>
                    <Refinancing/> 
                    <span>Refinancing</span>
                </div>
                <div className='inline-flex items-center gap-5 whitespace-nowrap rounded-xl text-medium font-semibold better-text2 leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-8 w-full lg:w-4/5 hover:text-teal-700 cursor-pointer'>
                    <CashOut/> 
                    <span>Cash out finance</span>
                </div>
                <div className='inline-flex items-center gap-5 whitespace-nowrap rounded-xl text-medium font-semibold better-text2 leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-8 w-full lg:w-4/5 hover:text-teal-700 cursor-pointer'>
                    <HomeEquity/> 
                    <span>Home equity line of credit</span>
                </div>
                <div className='flex flex-col lg:flex-row justify-around items-center p-5 my-5 w-full'>
                    <div className='better-text2 flex flex-col gap-2 p-2 items-center justify-center'>
                        <span className='text-3xl font-bold text-gray-700 mb-3'>$100B</span>
                        <span className='text-sm text-gray-700'>home loans funded entirely online</span>
                    </div>
                    <div className='better-text2 flex flex-col gap-2 p-2 items-center justify-center'>
                        <span className='text-3xl font-bold text-gray-700 mb-3'>400K</span>
                        <span className='text-sm text-gray-700'>Customers who chose a Better Mortgage</span>
                    </div>
                </div>
                <div className='better-text2 bg-green-50 rounded-lg p-8 text-gray-600 w-full lg:w-4/6 flex flex-col items-center justify-center my-10'>
                    <h1 className='text-medium better-text2'>After a few questions, you'll unlock:</h1>
                    <ul className='text-medium p-5 better-text2 flex flex-col gap-3'>
                        <li className='flex gap-5'> <Svg1/> <span>Custom mortgage rates</span></li>
                        <li className='flex gap-5'> <AiOutlineDollarCircle size={20} style={{fontWeight:'bolder', color:'green'}}/> <span>Exclusive offers</span></li>
                        <li className='flex gap-5'> <FaMobileScreenButton size={20} style={{fontWeight:'bolder', color:'green'}}/> <span>A personalized dashboard</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page
