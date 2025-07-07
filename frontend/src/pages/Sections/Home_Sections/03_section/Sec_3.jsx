import React from 'react'
import img1 from './image.png'
import color_codes from '../../../color_codes'
function Sec_3() {
    return (
        <>

            <div style={{ fontFamily: `${color_codes.font}` }} className='grid grid-cols-12 mt-50 '>
                <div className='col-span-6 bg-red-500 h-170'>
                    <div className='grid grid-cols-2 bg-red-700 h-[100%]'>
                        <div className='h-[50%]'>

                            <div style={{ backgroundColor: `${color_codes.grey_shade}` }}
                                className='col-span-1 h-[100%]  w-[50%] rounded-2xl px-2 py-5 flex justify-center items-center flex-col'>
                                <div style={{
                                    backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: 'left ', backgroundRepeat: 'no-repeat',
                                }} className='w-full h-[70%] rounded-[40px] '>

                                </div>
                                <h1 className='text-[20px] text-center font-bold pt-4'>Panel Discussions</h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec_3