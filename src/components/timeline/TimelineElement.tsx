import React from 'react';
import GetStarted from '../GetStarted';

interface Props {}

interface TimelineStructure {
    year: string;
    description: string;
    element?: React.FC;
}

const timelineData: TimelineStructure[] = [
    {
        year: "2014",
        description: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
    },
    {
        year: "2015",
        description: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."
    },
    {
        year: "2015",
        description: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
    },
    {
        year: "2016",
        description: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
    },
    {
        year: "2017",
        description: "Better expands into the real estate market with Better Real Estate."
    },
    {
        year: "2018",
        description: "Better Mortgage partners with Ally Bank to build Ally powered by Better."
    },
    {
        year: "2019",
        description: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."
    },
    {
        year: "Today",
        description: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
        element: GetStarted
    }
];

const TimelineElement: React.FC<Props> = () => {
    return (
        <>
            {timelineData.map((timelineElement, index) => {
                const { year, description, element: Element } = timelineElement;
                return (
                    <div className='flex flex-col items-center' key={index}>
                        <div className='w-fit p-2 rounded-full bg-green-700 text-2xl better-text2 font-semibold text-white px-8'>{year}</div>
                        <div className={`flex ${(index & 1) ? "flex-row-reverse":"flex-row"} min-w-full`}>
                            <div className={`w-1/2 ${(index & 1) ? "border-l-4":"border-r-4"}`}>
                                <div className='bg-gray-200 rounded-xl py-10 m-5 p-6'>
                                    {description}
                                    {Element ? <Element /> : null}
                                </div>
                            </div>
                            <div className='w-1/2'></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default TimelineElement;
