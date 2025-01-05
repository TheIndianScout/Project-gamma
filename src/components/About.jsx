import React from 'react'
import bg from '../assets/profile-background-3.jpg'
import fst from '../assets/About1.png'
import snd from '../assets/About2.png'
import om from '../assets/Om.jpg'
import arjun from '../assets/Arjun.jpg'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const About = () => {
    return (
        <div className='w-full mx-auto flex flex-col items-center justify-center font-mont' id='about'>
            <div className='relative w-full flex justify-center items-center'>
                <img src={bg} alt="/" className='h-[200px] md:h-full'/>
                <div className='absolute w-full h-full bg-black bg-opacity-40'></div>
                <div className='absolute px-2'>
                    <h1 className='text-white text-center text-3xl lg:text-5xl font-extrabold'>Unite. Showcase. Excel.</h1>
                </div>
            </div>

            {/* About Us */}

            <div className='w-full text-center mt-16'>
                <h1 className='text-3xl lg:text-5xl font-extrabold'>About Us</h1>
            </div>

            <div className='max-w-[1240px] w-full mt-8 md:my-16 px-2 py-4'>
                <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center' id='fst'>
                    <div className='w-[90%] md:w-[70%]' id='left'>
                        <p className='font-medium text-justify'>Welcome to <span className='font-bold text-red-600'> TIS - The Indian Scout</span>, the ultimate platform designed to connect passionate football players and clubs across India. At TIS, we are committed to revolutionizing the way football talent is scouted and nurtured. Our platform empowers players to showcase their skills through videos, connect with like-minded players, and approach clubs for opportunities that can shape their careers. For clubs, TIS offers a seamless way to discover budding talents, connect directly with players, and build their dream teams. Our mission is to bridge the gap between talent and opportunity, ensuring no potential goes unnoticed.</p>
                    </div>
                    <div className='my-4 md:my-0 hidden md:block md:w-[40%] justify-center items-center pointer-events-none' id='right'>
                        <img src={fst} alt="/" className='w-full drop-shadow-2xl' />
                    </div>
                </div>
                <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center my-4 md:my-0' id='snd'>
                    <div className='my-4 md:my-0 hidden md:block md:w-[30%] justify-center items-center pointer-events-none' id='left'>
                        <img src={snd} alt="/" className='w-full drop-shadow-2xl' />
                    </div>
                    <div className='w-[90%] md:w-[70%]' id='right'>
                        <p className='font-medium text-justify'>
                            <span className='font-bold text-red-600'>From the Streets to Stadiums, We Scout India’s Best!</span> At TIS, we believe every player deserves a chance to shine. Our platform provides a level playing field where talent, not geography or connections, determines success. By integrating features like video uploads, player profiles, and club requests, TIS makes scouting more accessible and efficient. Together, let’s transform dreams into reality and strengthen India’s footballing future.
                        </p>
                    </div>
                </div>
            </div>

            {/* Meet the Developers */}

            <div className='max-w-[1240px] w-full my-4 md:my-16 px-2 pb-4'>
                <div className='my-6 md:my-10'>
                    <h1 className='font-extrabold capitalize text-center text-3xl lg:text-5xl'>Meet the developers</h1>
                </div>
                <div className="py-2 px-6 md:px-0 w-full flex flex-col md:flex-row items-center justify-evenly" id="Devs">
                    <div className="relative p-2 border w-full mx-4 my-2 rounded-lg flex flex-col items-center justify-center shadow-lg group" id="Dev-Card">
                        <div className="border w-full overflow-hidden rounded-md">
                            <img src={om} alt="/" className="h-[300px] sm:h-[350px] lg:h-[450px] w-full object-cover" />
                        </div>
                        <div className='text-xl w-full'>
                            <div className='my-2 leading-8 transition-all ease-in-out duration-200 group-hover:px-2'>
                                <h4 className='font-bold'>Om Prajapati</h4>
                                <p className='text-base'>Frontend Developer</p>
                            </div>
                            <div className='my-2 flex gap-2'>
                                <a href="https://www.linkedin.com/in/om-prajapati-969733266/" target='_blank' rel='noopener noreferrer' ><AiOutlineLinkedin /></a>
                                <a href="https://github.com/TheOmPrajapati" target='_blank' rel='noopener noreferrer' ><AiOutlineGithub /></a>
                                <a href="https://instagram.com/_._om.__" target='_blank' rel='noopener noreferrer' ><AiOutlineInstagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-2 border w-full mx-4 my-2 rounded-lg flex flex-col items-center justify-center shadow-lg group" id="Dev-Card">
                        <div className="border w-full overflow-hidden rounded-md">
                            <img src={arjun} alt="/" className="h-[300px] sm:h-[350px] lg:h-[450px] w-full object-cover" />
                        </div>
                        <div className="text-xl w-full">
                            <div className="my-2 leading-8 transition-all ease-in-out duration-200 group-hover:px-2" id="details">
                                <h4 className="font-bold">MNS Arjun</h4>
                                <p className="text-base">Backend Developer</p>
                            </div>
                            <div className="my-2 flex gap-2">
                                <a href="https://www.linkedin.com/in/m-naga-sai-arjun/" target='_blank' rel='noopener noreferrer'><AiOutlineLinkedin /></a>
                                <a href="/" target='_blank' rel='noopener noreferrer'><AiOutlineGithub /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
