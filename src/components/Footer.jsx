import React from 'react';
import logo from '../assets/LOGO.svg'

const Footer = () => {
    return (
        <div className='mx-auto w-full py-12 px-10 font-mont bg-[#f8f8f8]'>
            <div className='max-w-[1240px] w-full mx-auto px-8 flex flex-col md:flex-row items-center md:items-start justify-between'>
                <div className='w-full my-10 flex md:items-start items-center justify-center flex-col' id='Logo'>
                    <img src={logo} alt="" className='pointer-events-none' />
                    <p className='capitalize mt-2 font-semibold text-sm sm:text-md md:text-lg text-center md:text-left'>The Bridge Between Passion and Profession</p>
                </div>
                <div className='w-full my-10 flex flex-col items-center text-left justify-center' id='links'>
                    <p className='font-semibold -ml-5'>Links</p>
                    <ul className='list-none'>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>Explore</li></a>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Contact</li></a>
                    </ul>
                </div>
                <div className='w-full my-10' id='links'>
                    <p className='text-justify'>Links Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur! Exercitationem aut repudiandae ipsa. Qui minus sapiente sint deserunt, corporis error suscipit ratione dignissimos veritatis sequi quidem corrupti, voluptate quo?</p>
                    {/* <ul className='list-none'>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>Explore</li></a>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Contact</li></a>
                    </ul> */}
                </div>
            </div>
            <p className='text-center mt-12 text-sm sm:text-md md:text-lg'>Copyright © 2024 All rights reserved | The Indian Scout</p>
        </div>
    )
}

export default Footer;
