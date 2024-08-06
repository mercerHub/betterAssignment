'use client';

import Watch from "@/components/Watch";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import AskQuestions from "@/components/AskQuestions";
import Navbar from "@/components/Navbar";
export default function Home() {
  const [imgSrc, setImgSrc] = useState('/images/still-quote-Arian.webp');
  const [active, setActive] = useState('Arian');
  return (
    <>
    <Navbar/>
    <div className="h-auto lg:flex lg:flex-col lg:items-center lg:justify-center gap-0">
      <div className="bg-teal-900 lg:bg-transparent p-0 w-screen lg:absolute lg:left-1/2 lg:top-1/3 lg:translate-x-[-50%] lg:translate-y-[-50%] text-5xl md:text-[72px] lg:text-[118px] lg:mt-[10vh] font-semibold better-text2 text-[#1ee07f] lg:w-3/5 text-center z-10 ">
        Mortgages made simple
      </div>
      <section className="bg-teal-900 overflow-hidden flex flex-col lg:flex-row justify-center pt-20 h-[115vh] section-1 w-screen">
        <div className="flex justify-center flex-col p-5 mt-20 items-center">
          <div className="text-black py-4 px-10 rounded-full text-center bg-[#1ee07f] hover:cursor-pointer hover:bg-transparent hover:text-white transition-all ease-in-out delay-200 duration-300">
            Start my approval
          </div>
          <div className="flex items-center justify-center mt-2 text-gray-300">
            <Watch />
            <span className="mr-1">3 min</span>
            <span>| No credit impact</span>
          </div>
        </div>
        <div className="pt-10 mt-20">
          <Image
            alt="Better Mortgage"
            src="/images/hero-variant-c.webp"
            width={500}
            height={800}
            style={{ color: 'transparent' }}
            priority
          />
        </div>
        <div className="lg:flex lg:flex-col py-4 px-10 gap-1 mt-20 items-center justify-center hidden">
          <div className="text-yellow-400 flex item-center gap-1 text-2xl">
            <FcGoogle size={30} />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>

          <div className="text-white flex text-sm ">
            <span>4.6 Stars</span>
            <span> | 3177 Google reviews</span>
          </div>

        </div>

      </section>
      <section className="max-w-screen min-h-screen bg-white p-5 section-2">
        <div className="flex flex-col lg:flex-row h-full min-h-screen items-center justify-center gap-2 p-2">
          <div className="flex flex-col w-screen lg:w-1/2 p-2 gap-2 pl-10 ml-10 items-center justify-center pt-10">
            <div className="overflow-hidden max-h-3/5 rounded-xl mt-8">
              <Image
                id={`${active}`}
                alt="Better Mortgage"
                src={`${imgSrc}`}
                height={100}
                width={300}
                style={{ borderRadius: '1rem' }}
              />
            </div>
            <div className="text-black flex gap-2">
              <button className={`${active === 'Arian' ? "border-teal-900 shadow-[0_0_0_4px_inset] shadow-teal-700" : ""} inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-3 w-auto`}
                onClick={() => {
                  setImgSrc('/images/still-quote-Arian.webp');
                  setActive('Arian');
                }}
              >
                Arian
              </button>
              <button className={`${active === 'Amanda' ? "border-teal-900 shadow-[0_0_0_4px_inset] shadow-teal-700" : ""} inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-3 w-auto`}
                onClick={() => {
                  setImgSrc('/images/still-quote-Amanda.webp');
                  setActive('Amanda');
                }}
              >
                Amanda
              </button>

              <button className={`${active === 'Paul' ? "border-teal-900 shadow-[0_0_0_4px_inset] shadow-teal-700" : ""} inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-teal-900 text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-teal-900 hover:shadow-[0_0_0_4px_inset] hover:shadow-teal-700 hover:text-interactivePrimary h-12 px-6 py-3 w-auto`}
                onClick={() => {
                  setImgSrc('/images/still-quote-Paul.webp');
                  setActive('Paul');
                }}
              >
                Paul
              </button>

            </div>
          </div>
          <div className="text-stone-800 w-screen lg:w-1/2 p-5 m-5 lg:flex flex-col items-center">
            <h2 className="lg:text-[80px] font-bold p-5 mx-5 tracking-tighter better-text1 leading-none text-center">Find out why we’re better.</h2>
            <div className="border rounded-full lg:w-1/3 p-5 mx-10 text-center bg-teal-900 text-white font-semibold cursor-pointer hover:bg-teal-600 transition-all ease-in-out duration-150">See all stories</div>
            <div className="px-5 mx-10 mb-2xl flex gap-2 items-center justify-center gap-sm leading-small text-textSecondary md:justify-start">
              <MdOutlineStar color="#1ee07f" size={20}/>
              <span><strong>Excellent</strong></span><span><strong>4.3</strong> out of 5</span></div>
          </div>
        </div>
        <div className="p-5 mt-8">
          <AskQuestions/>
        </div>
        
      </section>
    </div>
    </>
  );
}
