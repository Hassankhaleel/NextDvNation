import React from 'react'
import logo from './Logo.png'
import Btn from '../Buttons/Btn'
const data = [
    {
        NewUser: "Register/Login",
        Register: "Register",
        Login: "Register,",
        text: "black"
    }
]
function Navbar() {

    return (
        <>

            <div className='flex justify-between items-center '>
                <img src={logo} className='w-auto h-7' />
                <ul className=' flex justify-around items-center gap-7' style={{ fontFamily: "Space Grotesk" }}>
                    <li>About Us </li>
                    <li>Contact Us</li>
                    <li>Dashboard</li>
                    <Btn content={{ data: data[0].NewUser, text: data[0].text }} />
                </ul>
            </div >

        </>
    )
}

export default Navbar