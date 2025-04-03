import React, { useState } from 'react';
import bg_1 from '../assets/profile-background-2.jpg';
import bg_2 from '../assets/profile-background-3.jpg';
import { AiOutlineClose, AiFillContacts, AiOutlineContacts, AiOutlineMail } from 'react-icons/ai';
import { useLocation, useParams } from 'react-router-dom';

export default function ClubView() {

    const location = useLocation();
    const clubData = location.state;
    const { username } = useParams();

    const [isContacting, setIsContacting] = useState(false);

    // Function to handle icon click
    const handleContactClick = () => {
        setIsContacting(true); // Toggle state
    };

    const handleCloseClick = () => {
        setIsContacting(false); // Close popup
    };

    return (
        // Profile Picture and BG
        <div className='max-w-[1240px] w-full flex items-center justify-center mx-auto font-mont'>
            <div className='lg:rounded-md lg:my-16 md:mx-0 shadow-md'>
                <div className='relative md:rounded-md w-full' id='bg_image'>
                    <img src={bg_2} className='lg:rounded-t-md' alt="BG" />
                    <div className=' absolute w-[150px] h-[150px] md:w-[210px] md:h-[210px] translate-y-[-50%] md:translate-y-0 lg:translate-y-2 xl:translate-y-8 md:top-[70px] lg:top-[150px] border-[5px] border-[#ebebeb] md:border-white left-[50%] translate-x-[-50%] md:translate-x-0 md:left-6 rounded-full' id='profile-pic'>
                        <img className='h-full w-full rounded-full' src={bg_1} alt="" />
                    </div>
                </div>

                {/* User Details */}

                <div className='md:rounded-b-md w-full md:px-10' id='content'>
                    <div className='bg-[#ebebeb] md:bg-white pt-20 pb-4'>
                        <div className='p-4 flex items-start justify-between rounded-t-md  sm:mx-6 md:mx-0' id='name'>
                            <div className='mr-2 px-2 sm:px-0'>
                                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{clubData?.name || username}</h1>
                                <p className="text-sm md:text-base">@{clubData?.username || username}</p>
                                <p className="text-sm md:text-base md:w-[65%] text-justify mt-2">
                                    {clubData?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                </p>
                            </div>
                            {/* Icon Section */}
                            <div className="text-xl flex items-center justify-center md:text-2xl ml-2 cursor-pointer"
                                onClick={handleContactClick}>
                                {isContacting ? (
                                    <AiFillContacts /> // Filled icon when active
                                ) : (
                                    <AiOutlineContacts /> // Outlined icon when inactive
                                )}
                            </div>
                            {/* Pop-up Section */}
                            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isContacting ? "opacity-100 visible z-30" : "opacity-0 invisible"}`} >
                                <div className={`relative z-30 max-w-[80%] md:max-w-[40%] w-full top-0 left-0 bg-white shadow-lg border rounded-lg p-4 transition-transform duration-300 ${isContacting ? "translate-y-0" : "-translate-y-20"}`} id="pop-up">
                                    {/* Close Button */}
                                    <div className="absolute z-30 border p-2 bg-white rounded-md right-0 -top-10 sm:top-0 sm:-right-10 cursor-pointer hover:bg-gray-100 transition"
                                        onClick={handleCloseClick}>
                                        <AiOutlineClose />
                                    </div>
                                    <h1 className='font-medium'>Email</h1>
                                    <button className="relative w-full border-2 border-black text-sm my-2 py-2 px-6 md:px-2 rounded-sm text-center transition-all duration-500 text-black group hover:bg-black hover:text-white flex items-center justify-center"
                                        onClick={() => {
                                            const email = "omrajendrakumar2004@gmail.com"; // Replace with your dynamic email source
                                            const mailtoLink = `mailto:${email}`;
                                            window.location.href = mailtoLink;
                                        }}>
                                        <AiOutlineMail className='text-sm md:text-lg mr-2' />
                                        <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                        <span className="relative z-10 mr-2">Mail</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border sm:border-0 text-justify px-6 sm:px-4 py-2 bg-[#ebebeb] md:bg-white' id='details'>
                        <p className='text-sm md:text-base font-semibold mb-2 sm:mx-6 md:mx-0'>Email: <span className='font-normal'>{ }</span></p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Location: <span>{ }</span></p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Since: <span>{ }</span></p>
                    </div>
                </div>

                {/* Members */}

                <div className='px-2 md:px-10 sm:pb-4 rounded-md m-4' id='Mem-Req'>
                    <div className='relative w-full flex flex-col items-center justify-between'>
                        <div className="w-full border-b-2 relative text-center flex items-center justify-center py-2" id="toggle-tabs" >
                            <div className="flex items-center justify-center w-full">
                                <button className='font-medium' >
                                    Members
                                </button>
                            </div>
                            {/* Underline Design */}
                            <div className="absolute bg-black w-[28%] md:w-[12%] top-[100%] h-[3px] rounded-full z-10 transition-all duration-300 left-[50%] translate-x-[-50%] "></div>
                        </div>

                        {/* Member Section */}
                        <div className="border-2 w-full my-4 rounded-lg">
                            <div className="flex flex-col items-center justify-center px-4 py-2" id="members">
                                <div className="flex items-center justify-between w-full border md:border-2 py-3 px-4 md:px-6 md:py-4 rounded-md my-2" id="member-card">
                                    <div className="flex items-center">
                                        <div className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full" id="mem-img">
                                            <img className="h-full w-full rounded-full" src={bg_1} alt="Member" />
                                        </div>
                                        <div className="mx-4" id="info">
                                            <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl">Player 1</h1>
                                            <p className="text-xs sm:text-sm md:text-base font-light md:font-normal">@player1</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full border md:border-2 py-3 px-4 md:px-6 md:py-4 rounded-md my-2" id="member-card">
                                    <div className="flex items-center">
                                        <div className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full" id="mem-img">
                                            <img className="h-full w-full rounded-full" src={bg_1} alt="Member" />
                                        </div>
                                        <div className="mx-4" id="info">
                                            <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl">Player 2</h1>
                                            <p className="text-xs sm:text-sm md:text-base font-light md:font-normal">@player2</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}