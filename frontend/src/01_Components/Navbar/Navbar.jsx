import React from 'react'
import logo from '../../04_Pics/logo2.png'
import Hero from '../../02-Sections/Hero/Hero'
import { Outlet } from 'react-router'
import './Navbar.css'
function Navbar() {
    return (
        <>

            <div className=' galss_effect relative flex justify-between items-center mx-5 py-2 px-2.5 z-10 my-4 h-fit bg-amber-200'>
                <img src={logo} alt="logo" className=' ms-4 w-25 h-auto ' />
                <div className='flex text-[15px] text-white gap-10 justify-center items-center'>
                    <h6>About Us </h6>
                    <h6>Events Details</h6>
                    <h6>Get involved</h6>
                    <h6>Get involved</h6>
                    <h6>Resourses</h6>
                    <button className='nav_butn bg-[#11eb73] py-3 px-7 text-black   rounded-4xl'>Register</button>
                </div>
            </div>
            <Outlet />


        </>
    )
}

export default Navbar