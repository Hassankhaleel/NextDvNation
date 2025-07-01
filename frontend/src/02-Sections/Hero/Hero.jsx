import React from 'react'
import hero_img from './bg_hero.png'
import Navbar from '../../01_Components/Navbar/Navbar'
import './Hero.css'


function Hero() {

    return (
        <>
            <section className=" absolute inset-0 bg-center bg-cover h-screen w-screen " style={{ backgroundImage: `url(${hero_img})` }} >
                <div className='  w-full h-screen  bg-black opacity-75 '>



                </div >
                <div className='absolute top-1/3  mx-10 bg   text-white  w-[70%] flex justify-center flex-col items-start'>

                    <div className='  '>
                        <h1 className='text-6xl hero_text font-bold'>A Community of  <span className="Txt_shadow">Shakers</span>,
                        </h1>
                        <div className='flex justify-center items-center '>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-6xl hero_text font-bold'>


                                    <span className="Txt_shadow">Movers</span>, and{' '}
                                    <span className="Txt_shadow">Creators</span>
                                </h1>
                            </div>
                            <button className=' bg-[#11eb73] hero_text  h-fit py-2 px-5 ms-5 mt-5 text-[15px]  text-black   rounded-4xl'>Join The community
                                <i className="fa-solid fa-angles-right ps-2" ></i>
                            </button>
                        </div>
                    </div>
                    <p className='pt-5 font-light'>
                        Our mission is to empower students and early-stage developers by equipping them with practical, hands-on coding knowledge and real-world startup insights.
                        We aim to bridge the gap between learning and launching by creating opportunities to build, experiment, and grow.
                        Through a strong, collaborative community, we encourage peer learning, mentorship, and innovation.
                        Ultimately, we nurture the next generation of tech leaders, helping them evolve from curious coders to confident founders.
                    </p>
                </div>


            </section >
        </>
    )
}

export default Hero