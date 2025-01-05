import React, { useState } from 'react';
import Logo from '../assets/LOGO.svg';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => { //eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Login state 
    const [menuOpen, setMenuOpen] = useState(false); // Menu toggle state

    
    return (
        <div className="w-full border-b shadow-md font-mont">
            <div className="flex items-center justify-between px-4 md:px-14 py-3">
                <div className="w-[50%]" id="Logo">
                    <img className="w-[130px]" src={Logo} alt="Logo" />
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
                {/* Desktop Navbar */}
                {isLoggedIn && (
                    <div className="hidden md:flex w-full justify-between items-center">
                        <div className="w-full flex items-center justify-center" id="Search">
                            <input
                                type="text"
                                className="border-2 rounded-3xl px-3 outline-none text-[#5b5b5b] border-[#c1c1c1] py-2 text-md w-full"
                                placeholder="Search Player Or Club"
                            />
                        </div>
                        <div className="w-full flex items-center justify-end" id="Links">
                            <ul className="list-none flex justify-center items-center">
                                <Link to={'/'}><li className="mx-4 cursor-pointer relative group">Home
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                </Link>
                                <Link to={'about'}><li className="mx-4 cursor-pointer relative group">About
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                </Link>
                                <Link to={'contact'}><li className="mx-4 cursor-pointer relative group">Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                </Link>
                                <Link to={'login'}><li className="mx-4 cursor-pointer relative group">Logout
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                </Link>
                                
                            </ul>
                            <Link to={'player-profile'} className="border-2 relative border-black p-2 rounded-full transition-all duration-500 text-black group hover:bg-black hover:text-white cursor-pointer">
                                <AiOutlineUser className="text-md" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {/* Mobile Menu with Animation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                <div className="bg-white shadow-lg px-6 py-4">
                    <div className="w-full mb-4">
                        <input
                            type="text"
                            className="border-2 rounded-3xl px-3 outline-none text-[#5b5b5b] border-[#c1c1c1] py-2 text-md w-full"
                            placeholder="Search Player Or Club"
                        />
                    </div>
                    <ul className="list-none w-full text-center">
                        <a href="#home"><li className="py-2 border-b border-gray-200">Home</li></a>
                        <a href="#popular-clubs"><li className="py-2 border-b border-gray-200">Popular Clubs</li></a>
                        <a href="#popular-players"><li className="py-2 border-b border-gray-200">Popular Players</li></a>
                        <a href="#about"><li className="py-2 border-b border-gray-200">About Us</li></a>
                        <a href="#contact"><li className="py-2 border-b border-gray-200">Contact Us</li></a>
                        <a href="/"><li className="py-2 border-b border-gray-200">Profile</li></a>
                        <a href="/"><li className="py-2 border-b border-gray-200">Logout</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;