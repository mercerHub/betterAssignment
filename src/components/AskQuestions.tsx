import Image from 'next/image';
import React, { useState } from 'react';

interface Props {}

function AskQuestions(props: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
            <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
                <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
                    Got questions?<br />
                    We&apos;ve got answers
                </h2>
                <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary">
                        Our products
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                        Calculators
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                        Guides & FAQs
                    </button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
                {[
                    {
                        href: "/content/buying-your-first-home-with-better-mortgage",
                        title: "Buying your first home with Better",
                        imgSrc: "/images/first-home.webp",
                        imgAlt: "First Home",
                    },
                    {
                        href: "/b/one-day-mortgage",
                        title: "One Day Mortgage",
                        imgSrc: "/images/one-day-mortgage.webp",
                        imgAlt: "One day mortgage",
                        description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
                    },
                    {
                        href: "/b/heloc",
                        title: "Better HELOC",
                        imgSrc: "/images/better-heloc.webp",
                        imgAlt: "Better HELOC",
                        description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
                    },
                    {
                        href: "https://www.bettercover.com",
                        title: "Insurance",
                        imgSrc: "/images/insurance.webp",
                        imgAlt: "Insurance",
                    },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none"
                    >
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                                {item.title}
                            </h4>
                            {item.description && (
                                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                                    {item.description}
                                </p>
                            )}
                            <div className="flex items-end justify-between">
                                <div className="group">
                                    <svg
                                        width="48"
                                        height="49"
                                        viewBox="0 0 48 49"
                                        fill="none"
                                        className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4" />
                                        <path
                                            d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                                            fill="#004733"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Image
                            alt={item.imgAlt}
                            rel="preconnect"
                            loading="lazy"
                            width={1000}
                            height={1000}
                            decoding="async"
                            className="w-full rounded-lg object-cover h-[160px] md:h-[130px]"
                            src={item.imgSrc}
                            style={{ color: 'transparent' }}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default AskQuestions;
