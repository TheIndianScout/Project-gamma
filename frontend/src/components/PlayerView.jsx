import React, { useState } from 'react';
import bg_1 from '../assets/profile-background-2.jpg';
import bg_2 from '../assets/profile-background-3.jpg';
import { AiOutlineClose, AiFillContacts, AiOutlineContacts, AiOutlineMail } from 'react-icons/ai';
import VideoCard from './Video';
import { useLocation, useParams } from 'react-router-dom';

export default function PlayerView() {

    const location = useLocation();
    const playerData = location.state;
    const { username } = useParams();

    const videos = [
        { id: 1, src: '../assets/temp.mp4' },
        { id: 2, src: '../assets/temp.mp4' },
        { id: 3, src: '../assets/temp.mp4' },
        { id: 4, src: '../assets/temp.mp4' },
        { id: 5, src: '../assets/temp.mp4' },
        { id: 6, src: '../assets/temp.mp4' },
        // Add more video objects as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 9; // Maximum 9 videos per page

    // Calculate indices for the videos to display
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    // Calculate total pages
    const totalPages = Math.ceil(videos.length / videosPerPage);
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
                                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{playerData?.name || username}</h1>
                                <p className="text-sm md:text-base">@{playerData?.username || username}</p>
                                <p className="text-sm md:text-base md:w-[65%] text-justify mt-2">
                                    {playerData?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
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
                        <p className='text-sm md:text-base font-semibold mb-2 sm:mx-6 md:mx-0'>Email: <span>{ }</span>
                        </p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Location: <span>{ }</span>
                        </p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Age: <span>{ }</span>
                        </p>
                    </div>
                </div>

                {/* My Videos Section */}

                <div className='border lg:border-0 m-4 sm:pb-4 rounded-md mx-4' id='videos'>
                    <div className='w-full border-b-2 lg:border-0 flex items-center justify-between px-4 md:px-9 sm:px-5 py-6'>
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Gameplay Videos</h1>
                    </div>
                    {/* Videos */}
                    <div className="lg:border-2 relative rounded-md px-4 py-2 mx-9">
                        {/* Video Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentVideos.map((video) => (
                                <VideoCard key={video.id} videoSrc={video.src} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`py-1 px-3 mx-1 border rounded-md ${currentPage === index + 1
                                        ? 'bg-black text-white border-transparent border-2'
                                        : 'text-black border-2'
                                        } hover:bg-black hover:text-white transition`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}