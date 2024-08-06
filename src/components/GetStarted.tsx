import React from 'react'

interface Props { }

function GetStarted(props: Props) {
    const { } = props

    return (
        <>
            <div
                className={`py-3 px-6 my-5 text-white rounded-3xl transition-all ease-in-out delay-100 duration-200 lg:block cursor-pointer bg-[#2aa568] font-semibold hover:bg-[#1b5638]`}
            >
                Get Started
            </div>
        </>
    )
}

export default GetStarted
