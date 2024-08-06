import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-accentBorderInverseSecondary section">
            <div className="m-auto px-6 py-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
                <svg role="Image" className="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Better</title>
                    <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="#017848"></path>
                </svg>
                <div className="mt-6 flex flex-col gap-y-8 md:flex-row md:gap-16">
                    <div className="flex-shrink flex-grow basis-1/6">
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Better is a family of companies serving all your homeownership needs.</p>
                        <ul className="mt-6 space-y-4">
                            <li className="mt-4">
                                <a className='border-animation' href="/mortgage/">
                                    <Image alt="better mortgage homepage" loading="lazy" width="150" height="23" decoding="async" data-nimg="1" src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg" style={{ color: 'transparent' }} />
                                </a>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                            </li>
                            <li>
                                <a className='border-animation' href="/b/realestate">
                                    <Image alt="better real estate page" loading="lazy" width="160" height="21" decoding="async" data-nimg="1" src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg" style={{ color: 'transparent' }} />
                                </a>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                            </li>
                            <li>
                                <a className='border-animation' href="https://www.bettercover.com/">
                                    <Image alt="better cover page" loading="lazy" width="115" height="21" decoding="async" data-nimg="1" src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg" style={{ color: 'transparent' }} />
                                </a>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                            </li>
                            <li>
                                <a className='border-animation' href="/content/home-inspection-checklist/">
                                    <Image alt="better inspect page" loading="lazy" width="130" height="23" decoding="async" data-nimg="1" src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg" style={{ color: 'transparent' }} />
                                </a>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                            </li>
                            <li>
                                <a className='border-animation' href="https://www.bettercover.com/">
                                    <Image alt="better home page" loading="lazy" width="110" height="26" decoding="async" data-nimg="1" src="https://media.better.com/better-com/1660240096238/better-home-logo.svg" style={{ color: 'transparent' }} />
                                </a>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Create your dream space for less. Save on purchases and financing for home improvement projects.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/6">
                        <p className="font-semibold leading-body m-0 p-0 text-left text-textPrimary text-base">Resources</p>
                        <ul className="mt-6 space-y-4">
                            <li><a className='border-animation' href="/b/research">Home affordability calculator</a></li>
                            <li><a className='border-animation' href="/content?type=video">Mortgage calculator</a></li>
                            <li><a className='border-animation' href="/content/?type=guide">Free mortgage calculator</a></li>
                            <li><a className='border-animation' href="/content/homeownership/closing-costs/">Mortgage calculator with taxes</a></li>
                            <li><a className='border-animation' href="/content/homeownership/first-time-homebuyer-grants-loans-programs/">Mortgage calculator with PMI</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">Rent vs buy calculator</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">HELOC payment calculator</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">HELOC vs cash-out refinance calculator</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">Buy a home</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">Sell a home</a></li>
                            <li><a className='border-animation' href="/content/homeownership/mortgage-refinancing-calculator/">Get home inspection</a></li>
                        </ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/6 ">
                        <p className="font-semibold leading-body m-0 p-0 text-left text-textPrimary text-base">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li><a className='border-animation' href="/about-us/">About Us</a></li>
                            <li><a className='border-animation' href="/careers/">Careers</a></li>
                            <li><a className='border-animation' href="/">Media</a></li>
                            <li><a className='border-animation' href="/">Partner With Us</a></li>
                            <li><a className='border-animation' href="/">Learning center</a></li>
                            <li><a className='border-animation' href="/">FAQs</a></li>
                            <li><a className='border-animation' href="/">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/6">
                        <p className="font-semibold leading-body m-0 p-0 text-left text-textPrimary text-base">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li><a className='border-animation' href="/About/">hello@better.com</a></li>
                            <li><a className='border-animation' href="/">415-523-8837</a></li>
                            <li><a className='border-animation' href="/">FAQ</a></li>
                            <li><a className='border-animation' href="/">Glossary</a></li>
                        </ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-1/6">
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Legal</p>
                        <ul className="mt-6 space-y-4">
                            <li>NMLS Consumer Access</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Disclosures & Licensing</li>
                            <li>Affiliated Business</li>
                            <li>Browser Disclaimer</li>

                        </ul>
                    </div>
                </div>
                <div className="my-8 mx-auto max-w-6xl">
                    <hr className="h-px border-0 bg-uiGray-50" />
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a className="opacity-75 transition hover:opacity-100" href="https://www.facebook.com/BetterDotCom/">
                            <Image alt="Better Facebook" src="" />
                        </a>
                        <a className="opacity-75 transition hover:opacity-100" href="https://www.linkedin.com/company/bettercom/">
                            <Image alt="Better LinkedIn" src="" />
                        </a>
                        <a className="opacity-75 transition hover:opacity-100" href="https://twitter.com/betterdotcom">
                            <Image alt="Better Twitter" src="" />
                        </a>
                        <a className="opacity-75 transition hover:opacity-100" href="https://www.instagram.com/betterdotcom/">
                            <Image alt="Better Instagram" src="" />
                        </a>
                        <a className="opacity-75 transition hover:opacity-100" href="https://www.youtube.com/channel/UCbJcXDs5IaRrDOsmvKoI9_A">
                            <Image alt="Better YouTube" src="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
