import React, { useState } from 'react';
import bg_1 from '../assets/profile-background-2.jpg';
import bg_2 from '../assets/profile-background-3.jpg';
import { AiOutlineEdit, AiFillEdit, AiFillFileImage, AiOutlineClose, AiFillFile } from 'react-icons/ai';
import VideoCard from './Video';
import tempVideo from '../assets/temp.mp4';

export default function PlayerProfile() {

    const videos = [
        { id: 1, src: tempVideo },
        { id: 2, src: tempVideo },
        { id: 3, src: tempVideo },
        { id: 4, src: tempVideo },
        { id: 5, src: tempVideo },
        { id: 6, src: tempVideo },
        { id: 7, src: tempVideo },
        { id: 8, src: tempVideo },
        { id: 9, src: tempVideo },
        { id: 10, src: tempVideo },
        { id: 11, src: tempVideo }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 6; // Maximum 9 videos per page

    // Calculate indices for the videos to display
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    // Calculate total pages
    const totalPages = Math.ceil(videos.length / videosPerPage);

    const [isEditing, setIsEditing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    // Function to handle icon click
    const handleEditClick = () => {
        setIsEditing(true); // Toggle state
    };

    const handleUploadClick = () => {
        setIsUploading(true);
    };

    const handleCloseClick = () => {
        setIsEditing(false); // Close popup
        setIsUploading(false);
    };

    return (
        // Profile Picture and BG
        <div className='max-w-[1240px] w-full flex items-center justify-center mx-auto font-mont' id='player-profile'>
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
                                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Player1</h1>
                                <p className='text-sm md:text-base md:w-[65%] text-justify mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam perferendis ipsam ab officia ipsa dignissimos itaque quia a amet reprehenderit quod accusamus fuga blanditiis, autem aperiam optio, officiis dolor.</p>
                            </div>
                            {/* Icon Section */}
                            <div className="text-xl flex items-center justify-center md:text-2xl ml-2 cursor-pointer"
                                onClick={handleEditClick}>
                                {isEditing ? (
                                    <AiFillEdit /> // Filled icon when active
                                ) : (
                                    <AiOutlineEdit /> // Outlined icon when inactive
                                )}
                            </div>
                            {/* Pop-up Section */}
                            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isEditing ? "opacity-100 visible z-30" : "opacity-0 invisible"}`} >
                                <div className={`relative z-30 max-w-[80%] md:max-w-[40%] w-full top-0 left-0 bg-white shadow-lg border rounded-lg p-4 transition-transform duration-300 ${isEditing ? "translate-y-0" : "-translate-y-20"}`} id="pop-up">
                                    {/* Close Button */}
                                    <div className="absolute z-30 border p-2 bg-white rounded-md right-0 -top-10 sm:top-0 sm:-right-10 cursor-pointer hover:bg-gray-100 transition"
                                        onClick={handleCloseClick}>
                                        <AiOutlineClose />
                                    </div>

                                    {/* Form Content */}
                                    <form action="/" className="p-2 flex flex-col items-center justify-center border rounded-md">
                                        <h1 className="capitalize text-base sm:text-lg md:text-2xl font-bold my-2 text-center">
                                            Edit your personal information
                                        </h1>
                                        <div className="mt-3 w-full px-4 sm:px-2 flex flex-col items-center justify-center">
                                            <input
                                                className="border rounded-sm py-1 px-2 sm:p-3 w-full my-2 outline-none peer text-sm sm:text-base" type="text" id="name" placeholder="Name" />
                                            <input
                                                className="border rounded-sm py-1 px-2 sm:p-3 w-full my-2 outline-none peer text-sm sm:text-base" type="text" id="age" placeholder="Age" />
                                            <input
                                                className="border rounded-sm py-1 px-2 sm:p-3 w-full my-2 outline-none peer text-sm sm:text-base" type="text" id="location" placeholder="Location" />
                                            <hr className="my-2" />
                                            <h2 className="text-sm sm:text-base capitalize text-justify">
                                                Please select <span className="font-bold text-orange-600">Image *</span> file only
                                                for the profile picture
                                            </h2>
                                            <hr className="my-2" />

                                            <div className="relative w-full mx-auto my-3">
                                                <input id="file-upload" type="file" className="hidden" />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="group flex flex-col justify-center items-center w-full h-28 sm:h-40 border-2 border-dashed border-black rounded-md cursor-pointer transition-all duration-300 hover:border-gray-700 focus-within:border-gray-700" >
                                                    <div className="flex flex-col items-center justify-center py-6">
                                                        <AiFillFileImage className="text-3xl md:text-4xl" />
                                                        <p className="text-sm text-black group-hover:text-gray-700 mt-2 p-2 text-center">
                                                            click to browse
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>

                                            <button className="relative w-full border-2 border-black text-sm my-2 py-2 px-6 md:px-2 rounded-sm text-center transition-all duration-500 text-black group hover:bg-black hover:text-white">
                                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                                <span className="relative z-10">Update Profile</span>
                                            </button>
                                        </div>
                                    </form>
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

                <div className='lg:border-0 sm:pb-4 rounded-md md:mx-4' id='videos'>
                    <div className='w-full border-b-2 lg:border-0 flex items-center justify-between px-4 md:px-9 sm:px-5 py-6'>
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>My Videos</h1>
                        <button className='relative border-2 text-sm sm:w-[10rem] block my-2 md:my-0 md:ml-3 py-2 px-6 md:px-2 rounded-md text-center transition-all duration-500 text-black group hover:bg-black hover:border-black hover:text-white' onClick={handleUploadClick} >
                            <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                            <span className="relative">Upload</span>
                        </button>
                    </div>
                    
                    {/* Uploading Popup */}
                    
                    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isUploading ? "opacity-100 visible z-30" : "opacity-0 invisible"}`} >
                        <div className={`relative z-30 max-w-[80%] md:max-w-[40%] w-full top-0 left-0 bg-white shadow-lg border rounded-lg p-4 transition-transform duration-300 ${isUploading ? "translate-y-0" : "-translate-y-20"}`} id="pop-up">
                            {/* Close Button */}
                            <div className="absolute z-30 border p-2 bg-white rounded-md right-0 -top-10 sm:top-0 sm:-right-10 cursor-pointer hover:bg-gray-100 transition"
                                onClick={handleCloseClick}>
                                <AiOutlineClose />
                            </div>

                            {/* Form Content */}
                            <form action="/" className="p-2 flex flex-col items-center justify-center border rounded-md">
                                <h1 className="capitalize text-base sm:text-lg md:text-2xl font-bold my-2 text-center">
                                    Select the video for upload
                                </h1>
                                <div className="mt-3 w-full px-4 sm:px-2 flex flex-col items-center justify-center">
                                    <hr className="my-2" />
                                    <h2 className="text-sm sm:text-base capitalize text-justify">
                                        Please select <span className="font-bold text-orange-600">Video *</span> file only
                                    </h2>

                                    <div className="relative w-full mx-auto my-3">
                                        <input id="file-upload" type="file" className="hidden" />
                                        <label
                                            htmlFor="file-upload"
                                            className="group flex flex-col justify-center items-center w-full h-28 sm:h-40 border-2 border-dashed border-black rounded-md cursor-pointer transition-all duration-300 hover:border-gray-700 focus-within:border-gray-700" >
                                            <div className="flex flex-col items-center justify-center py-6">
                                                <AiFillFile className="text-3xl md:text-4xl" />
                                                <p className="text-sm text-black group-hover:text-gray-700 mt-2 p-2 text-center">
                                                    click to browse
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='border-2 w-full rounded-md p-2'>
                                        <textarea type="text" placeholder='Add Video Description' rows={5} className='outline-none w-full resize-none'></textarea>
                                    </div>

                                    <button className="relative w-full border-2 border-black text-sm my-2 py-2 px-6 md:px-2 rounded-sm text-center transition-all duration-500 text-black group hover:bg-black hover:text-white">
                                        <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                                        <span className="relative z-10">Upload Video</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Videos */}

                    <div className="lg:border-2 relative rounded-md px-4 py-2 md:mx-9">
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