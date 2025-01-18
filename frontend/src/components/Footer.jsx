import React from 'react';
import logo from '../assets/LOGO.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mx-auto w-full py-6 px-2 md:px-10 font-mont bg-[#f8f8f8]'>
            <div className='max-w-[1240px] w-full mx-auto px-8 flex flex-col md:flex-row items-center md:items-start justify-between'>
                <div className='w-full my-6 md:my-10 flex md:items-start items-center justify-center flex-col' id='Logo'>
                    <img src={logo} alt="" className='pointer-events-none' />
                    <p className='capitalize mt-2 font-semibold text-sm sm:text-md md:text-lg text-center md:text-left'>The Bridge Between Passion and Profession</p>
                </div>
                <div className='w-full my-4 md:my-10 flex flex-col items-center text-left justify-center' id='links'>
                    <p className='font-semibold -ml-5'>Links</p>
                    <ul className='list-none'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'about'}><li>About</li></Link>
                        <Link to={'contact'}><li>Contact</li></Link>
                    </ul>
                </div>

                <div className='w-full my-4 md:my-10 flex flex-col items-center text-left justify-center' id='links'>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, culpa earum amet unde, qui voluptatum, enim expedita deserunt distinctio commodi illo iste ipsum nobis tempora aspernatur a dolore aperiam sit!</p>
                </div>

            </div>
            <p className='text-center my-4 text-sm sm:text-md md:text-lg'>Copyright © 2024 All rights reserved | The Indian Scout</p>
        </div>
    )
}

export default Footer;
