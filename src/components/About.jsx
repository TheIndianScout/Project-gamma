import React from 'react'
import bg from '../assets/profile-background-3.jpg'

const About = () => {
    return (
        <div className='relative w-full mx-auto flex items-center justify-center' id='about'>
            <img src={bg} alt="/" />
            <div className='absolute w-full h-full bg-black bg-opacity-40'></div>
            <div className='absolute'>
                <h1 className='text-white'>Unite. Showcase. Excel.</h1>
            </div>
        </div>
    )
}

export default About;
