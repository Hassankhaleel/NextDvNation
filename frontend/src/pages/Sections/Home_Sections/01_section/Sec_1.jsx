import React from 'react'
import Btn from '../../../Components/Buttons/Btn'
import illus from '../01_section/Illustration.png'
const data_sec_1 = [
    {
        Msg: "Join Community",
        color: "#191A23"
    }
]

function Sec_1() {
    return (
        <>
            <div className='grid grid-cols-2 my-20 ' style={{ fontFamily: "Space Grotesk" }}>
                <div className='col-span-1 flex justify-center items-start gap-y-5 flex-col'>
                    <h1 className='font-bold text-6xl/17'>
                        Navigating the digital landscape for success
                    </h1>
                    <p className='pt-4'>
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <Btn content={{ data: data_sec_1[0].Msg, color: data_sec_1[0].color }} />

                </div>
                <div className='col-span-1 flex justify-center items-start gap-y-5 flex-col'>
                    <img src={illus} className='w-full h-auto' />

                </div>
            </div>
        </>)
}

export default Sec_1