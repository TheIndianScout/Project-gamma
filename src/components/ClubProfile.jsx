import React, { useState } from 'react';
import bg_1 from '../assets/profile-background-2.jpg';
import bg_2 from '../assets/profile-background-3.jpg';
import { AiOutlineEdit, AiFillEdit, AiFillFileImage, AiOutlineClose } from 'react-icons/ai';
import Members from './Members';
import Requests from './Requests';

export default function ClubProfile() {

    const members = [
        { id: 1, name: 'Player 1', username: '@player1', imgSrc: bg_1 },
        { id: 2, name: 'Player 2', username: '@player2', imgSrc: bg_1 },
        { id: 3, name: 'Player 3', username: '@player3', imgSrc: bg_1 },
        { id: 4, name: 'Player 4', username: '@player4', imgSrc: bg_1 },
        { id: 5, name: 'Player 5', username: '@player5', imgSrc: bg_1 },
        { id: 6, name: 'Player 6', username: '@player6', imgSrc: bg_1 },
    ];

    const requests = [
        { id: 1, name: "Request 1", username: "@request1", imgSrc: bg_1 },
        { id: 2, name: "Request 2", username: "@request2", imgSrc: bg_1 },
        { id: 3, name: "Request 3", username: "@request3", imgSrc: bg_1 },
        { id: 4, name: "Request 4", username: "@request4", imgSrc: bg_1 },
        { id: 5, name: "Request 5", username: "@request5", imgSrc: bg_1 },
        { id: 6, name: "Request 6", username: "@request6", imgSrc: bg_1 },
        // Add more requests as needed
    ];
    const [memberCurrentPage, setMemberCurrentPage] = useState(1);
    const [requestCurrentPage, setRequestCurrentPage] = useState(1);
    const membersPerPage = 5;
    const requestsPerPage = 5;

    // Calculate indices for the members to display
    const indexOfLastMember = memberCurrentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    const indexOfLastRequest = requestCurrentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

    // Calculate total pages
    const totalMemberPages = Math.ceil(members.length / membersPerPage);
    const totalRequestPages = Math.ceil(requests.length / requestsPerPage);

    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("members");

    // Function to handle icon click
    const handleEditClick = () => {
        setIsEditing(true); // Toggle state
    };

    const handleCloseClick = () => {
        setIsEditing(false); // Close popup
    };

    const [charCount, setCharCount] = useState(0);
    const charLimit = 250;

    const handleInputChange = (e) => {
        setCharCount(e.target.value.length);
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
                                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Club1</h1>
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
                                                className="border rounded-sm py-1 px-2 sm:p-3 w-full my-2 outline-none peer text-sm sm:text-base" type="text" id="since" placeholder="Since" />
                                            <input
                                                className="border rounded-sm py-1 px-2 sm:p-3 w-full my-2 outline-none peer text-sm sm:text-base" type="text" id="location" placeholder="Location" />

                                            <textarea name="description" id="description" placeholder='Enter Description' rows={4} className='resize-none w-full outline-none border-2 rounded-sm py-1 px-2 sm:p-3 peer text-sm sm:text-base' maxLength={charLimit} onChange={handleInputChange}></textarea>

                                            <div className="w-full text-right font-medium text-sm my-1">
                                                <p className='text-gray-400'>
                                                    {charCount}/{charLimit}
                                                </p>
                                            </div>

                                            <hr className="mt-2" />
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
                        <p className='text-sm md:text-base font-semibold mb-2 sm:mx-6 md:mx-0'>Name: <span>{ }</span></p>
                        <p className='text-sm md:text-base font-semibold mb-2 sm:mx-6 md:mx-0'>Email: <span>{ }</span></p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Location: <span>{ }</span></p>
                        <p className='text-sm md:text-base font-semibold my-2 sm:mx-6 md:mx-0'>Since: <span>{ }</span></p>
                    </div>
                </div>

                {/* Members and Request Details */}

                <div className='px-2 md:px-10 sm:pb-4 rounded-md m-4' id='Mem-Req'>
                    <div className='relative w-full flex flex-col items-center justify-between'>
                        {/* Toggle Buttons */}
                        <div className="w-full border-b-2 relative text-center flex items-center justify-center py-2" id="toggle-tabs" >
                            <div className="flex items-center justify-center w-full" onClick={() => setActiveTab("members")}>
                                <button className={`font-medium ${activeTab === "members" ? "text-black" : "text-gray-500"}`}>
                                    Members
                                </button>
                            </div>
                            <div className="flex items-center justify-center w-full" onClick={() => setActiveTab("requests")}>
                                <button className={`font-medium ${activeTab === "requests" ? "text-black" : "text-gray-500"}`}>
                                    Requests
                                </button>
                            </div>

                            {/* Underline Design */}

                            <div className={`absolute bg-black w-[28%] md:w-[12%] top-[100%] h-[3px] rounded-full z-10 transition-all duration-300 ${activeTab === "members" ? "left-[25%] translate-x-[-50%]" : "left-[75%] translate-x-[-50%]"}`}></div>
                        </div>

                        {/* Member Section */}
                        {activeTab === "members" && (
                            <div className="border-2 w-full my-4 rounded-lg">
                                <div className="flex flex-col items-center justify-center px-4" id="members">
                                    {currentMembers.map((member) => (
                                        <Members key={member.id} member={member} />
                                    ))}
                                </div>

                                <div className="flex justify-center my-2">
                                    {Array.from({ length: totalMemberPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setMemberCurrentPage(index + 1)}
                                            className={`py-1 px-3 mx-1 border rounded-md ${memberCurrentPage === index + 1
                                                ? 'bg-black text-white border-transparent border-2'
                                                : 'text-black border-2'
                                                } hover:bg-black hover:text-white transition`}>
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                            </div>
                        )}

                        {/* Request Section */}
                        {activeTab === "requests" && (
                            <div className="border-2 w-full my-4 rounded-lg">
                                <div className="flex flex-col items-center justify-center py-2" id="requests">
                                    <div className="flex flex-col w-full items-center justify-center px-4" id="requests">
                                        {currentRequests.map((request) => (
                                            <Requests key={request.id} request={request} /> // Corrected prop name
                                        ))}
                                    </div>

                                    <div className="flex justify-center my-2">
                                        {Array.from({ length: totalRequestPages }, (_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setRequestCurrentPage(index + 1)}
                                                className={`py-1 px-3 mx-1 border rounded-md ${requestCurrentPage === index + 1
                                                    ? 'bg-black text-white border-transparent border-2'
                                                    : 'text-black border-2'
                                                    } hover:bg-black hover:text-white transition`}>
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div >
            </div >
        </div >
    )
}