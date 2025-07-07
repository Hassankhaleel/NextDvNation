import React from 'react'
import color from '../../../color_codes'
import illus from './Illustration (1).png'
import illus2 from './Illustration (2).png'
import illus3 from './Illustration (3).png'
import illus4 from './tokyo-sending-messages-from-one-place-to-another 1.png'
import illus5 from './Illustration (6).png'
import illus6 from './Illustration (7).png'

import './Sex_2.css'
function sec_2() {


    return (
        <>
            {/* CORE VALUE  */}
            <div style={{ fontFamily: `${color.font}` }} className='grid grid-cols-12 mt-30'>
                <div className='col-span-2 rou'>
                    <h1 style={{ backgroundColor: `${color.yellow_shae}` }}
                        className='text-2xl font-bold w-fit p-2 rounded-[10px]'

                    >Core Values</h1>
                </div>
                <div className='col-span-10'>
                    <p className='w-[80%] font-medium'>
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </p>
                </div>


            </div>
            {/* 6 BOXES  */}
            {/* --------box-1 and box-2*/}

            <div style={{ fontFamily: `${color.font}` }} className='grid grid-cols-12 mt-12 gap-x-14'>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.grey_shade}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${color.yellow_shae}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Online Coding
                                    </h1>
                                    <h1 style={{ backgroundColor: `${color.yellow_shae}` }}
                                        className='w-fit p-1 px-2 rounded-[5px] text-2xl font-bold'>
                                        Sessions
                                    </h1>
                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.yellow_shae}` }} className="fa-solid fa-arrow-right text-[12px] bg-black p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus} className='w-40' />
                        </div>
                    </div>
                </div>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.yellow_shae}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Founder                                     </h1>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 rounded-[5px] text-2xl font-bold'>
                                        Talks
                                    </h1>
                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.yellow_shae}` }} className="fa-solid fa-arrow-right text-[12px] bg-black p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus2} className='w-40' />
                        </div>
                    </div>
                </div>
            </div >
            {/* --------box-3 and box-4*/}

            <div style={{ fontFamily: `${color.font}` }} className='grid grid-cols-12 mt-8 gap-x-14'>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.black_shade_code_is}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Hackathons
                                    </h1>

                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.black_shade_code_is}` }} className="fa-solid fa-arrow-right text-[12px] bg-white p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2 text-white'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus3} className='w-40' />
                        </div>
                    </div>
                </div>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.grey_shade}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${color.yellow_shae}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Weekly                                      </h1>
                                    <h1 style={{ backgroundColor: `${color.yellow_shae}` }}
                                        className='w-fit p-1 px-2 rounded-[5px] text-2xl font-bold'>
                                        Challenges
                                    </h1>
                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.yellow_shae}` }} className="fa-solid fa-arrow-right text-[12px] bg-black p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus4} className='w-40' />
                        </div>
                    </div>
                </div>
            </div >
            {/* --------box-5 and box-6*/}
            <div style={{ fontFamily: `${color.font}` }} className='grid grid-cols-12 mt-8 gap-x-14'>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.yellow_shae}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Mentorship
                                    </h1>

                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.yellow_shae}` }} className="fa-solid fa-arrow-right text-[12px] bg-black p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2 text-black'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus5} className='w-40' />
                        </div>
                    </div>
                </div>
                <div className='col-span-6  h-52'>
                    <div className='p-6 h-full box grid grid-cols-2 border-1 border-black rounded-4xl'
                        style={{
                            backgroundColor: `${color.black_shade_code_is}`
                        }}>
                        <div className='col-span-1  '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 text-2xl rounded-[5px] font-bold '>
                                        Startup ideas                                      </h1>
                                    <h1 style={{ backgroundColor: `${'white'}` }}
                                        className='w-fit p-1 px-2 rounded-[5px] text-2xl font-bold'>
                                        Pitching
                                    </h1>
                                </div>
                                <dv className="flex   justify-start  items-center">
                                    <i style={{ color: `${color.black_shade_code_is}` }} className="fa-solid fa-arrow-right text-[12px] bg-white  p-2 font-extralight rounded-full -rotate-35 "></i>
                                    <h6 className='px-2 text-white'>Learn More</h6>
                                </dv>
                            </div>

                        </div>
                        <div className='col-span-1  flex justify-center items-center'>
                            <img src={illus6} className='w-40' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default sec_2