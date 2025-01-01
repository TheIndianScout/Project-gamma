import React from 'react'
import hero from '../assets/hero.png'
import image from '../assets/login_bg.jpg';

const Home = () => {
    return (
        <div className="max-w-[1240px] w-full flex flex-col items-center justify-center mx-auto font-mont" id="home">
            <div className="w-full h-[95vh] mx-auto mt-10">
                <div className="flex flex-col md:flex-row justify-between items-center mx-auto py-12 px-4 w-full">
                    <div
                        className="w-full mx-10 h-[50vh] md:h-[70vh] flex justify-center items-center"
                        id="right">
                        <img className='pointer-events-none drop-shadow-2xl' src={hero} alt="" />
                    </div>
                    <div className="w-full mx-10 flex flex-col justify-center items-center md:items-start mt-6 md:mt-0 " id="left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black capitalize text-center md:text-left tracking-wide">
                            Give a kickstart to your career.
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
                            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center md:text-left capitalize">
                                Join new clubs around you.
                            </p>
                            <a className="relative border-2  sm:w-[10rem] block my-2 md:my-0 md:ml-3 py-2 px-2 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">Join Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Clubs */}

            <div className='mt-20' id='popular-clubs'>
                <div className='w-full text-center mb-6' >
                    <h1 className='text-4xl font-bold capitalize'>Popular Clubs</h1>
                </div>
                <div className='w-full py-4 flex flex-col md:flex-row items-center justify-evenly' id='cards'>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Club 1</h1>
                            <p className="text-sm font-light">@club1</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">Visit Club</span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Club 2</h1>
                            <p className="text-sm font-light">@club2</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">Visit Club</span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Club 3</h1>
                            <p className="text-sm font-light">@club3</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">Visit Club</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Players */}

            <div className='mt-16 md:mt-36' id='popular-players'>
                <div className='w-full text-center mb-6'>
                    <h1 className='text-4xl font-bold capitalize'>Popular Players</h1>
                </div>
                <div className='w-full py-4 flex flex-col md:flex-row items-center justify-evenly' id='cards'>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Player 1</h1>
                            <p className="text-sm font-light">@player1</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">View Player</span>
                            </a>

                        </div>
                    </div>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Player 2</h1>
                            <p className="text-sm font-light">@player2</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">View Player</span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border w-[22rem] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                        id="card">
                        <div>
                            <img className="rounded-md" src={image} alt="club" />
                        </div>
                        <div className="transform transition-all duration-500 hover:translate-y-2">
                            <h1 className="mt-2 font-bold text-xl uppercase">Player 3</h1>
                            <p className="text-sm font-light">@player3</p>
                            <p className="font-normal text-justify mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero et, eos dolore obcaecati blanditiis deleniti similique fugit voluptas nam.
                            </p>
                            <a className="relative border block mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:text-white"
                                href="/">
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                <span className="relative z-10">View Player</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}
            
            <div>
                <h1>About</h1>
            </div>


            {/* Contact */}
            
            <div>
                <h1>Contact</h1>
            </div>
        </div>
    )
}
export default Home;
