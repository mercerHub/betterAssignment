import Image from 'next/image';
import React from 'react';
import SitiBank from '../../components/backed-by/SitiBank';
import Ally from '../../components/backed-by/Ally';
import Citi from '../../components/backed-by/Citi';
import PinganBank from '../../components/backed-by/PinganBank';
import GoldmanSacs from '../../components/backed-by/GoldmanSacs';
import KPCB from '../../components/backed-by/KPCB';
import AmericanExpress from '../../components/backed-by/AmericanExpress';
import TimelineElement from '@/components/timeline/TimelineElement';
import Navbar from '@/components/Navbar';

interface Props {}

function Page(props: Props) {
    const {} = props;

    return (
        <>
            <Navbar />
            <div className="bg-white top-0 section-2 border-box flex flex-col gap-5">
                <section className="h-auto md:h-[90vh] flex flex-col m-5 p-5 items-center justify-center text-center">
                    <h1 className="better-text1 font-bold text-green-700 text-3xl m-5 p-2 mt-0 pt-0">Our mission</h1>
                    <p className="text-2xl md:text-5xl tracking-tight better-text2 font-bold text-gray-800 m-3 p-3 pt-0 w-full md:w-[70%]">
                        We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                    </p>
                </section>
                <section className="flex flex-col md:flex-row min-h-[60vh] justify-center gap-10 md:gap-20 py-10">
                    <div className="flex flex-col w-full md:w-1/3 p-5 gap-2 mt-5">
                        <h1 className="font-semibold text-2xl md:text-3xl py-2">The status quo is broken</h1>
                        <p>
                            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                        </p>
                        <div className="p-5 border-2 rounded-xl w-full md:w-1/2 mt-5 text-center font-semibold text-white bg-green-700 cursor-pointer hover:bg-green-900 transition-all ease-in-out duration-300">
                            Read Vishal’s story
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-5 flex justify-center px-10">
                        <video width="500" height="500" controls preload="none" className="w-full h-auto md:h-full md:w-full rounded-lg">
                            <source src="/path/to/video.mp4" type="video/mp4" />
                            <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
                <section className="flex flex-col gap-5 p-10 items-center bg-green-700 my-16 justify-center w-screen text-center">
                    <div className="min-h-[40vh] m-5 p-10 gap-2 flex flex-col text-white">
                        <h1 className="text-3xl md:text-5xl better-text1 py-5">How we’re changing things</h1>
                        <p className="font-semibold text-base">
                            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
                        </p>
                        <p>
                            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
                        </p>
                    </div>
                </section>
                <section id="backed-by">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold better-text1 p-5 m-5">Backed by</div>
                        <div className="flex flex-wrap gap-5 w-[90%] md:w-[80%] p-5 m-5 items-center justify-center">
                            <SitiBank />
                            <Ally />
                            <Citi />
                            <PinganBank />
                            <GoldmanSacs />
                            <KPCB />
                            <AmericanExpress />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold better-text1 p-5 m-5">Company timeline</div>
                        <div className="flex flex-col flex-wrap gap-5 w-[90%] md:w-[80%] p-5 m-5 mb-10 items-center justify-center h-fit">
                            <TimelineElement />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Page;
