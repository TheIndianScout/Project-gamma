import React from 'react';

export default function Requests({ request }) {
    if (!request) return null;
    return (
        <div className="flex items-center justify-between w-full border md:border-2 py-3 px-4 md:px-6 md:py-4 rounded-md my-2 font-mont"
            id="request-card">
            <div className="flex items-center">
                <div className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full" id="req-img">
                    <img
                        className="h-full w-full rounded-full"
                        src={request.imgSrc || "default-image.jpg"} // Fallback for missing image
                        alt={request.name || "Request"}
                    />
                </div>
                <div className="mx-4" id="info">
                    <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl">{request.name || "Anonymous"}</h1>
                    <p className="text-xs sm:text-sm md:text-base font-light md:font-normal">
                        {request.username || "@anonymous"}
                    </p>
                </div>
            </div>
            <div className="md:mr-4 flex flex-col sm:flex-row items-end max-w-[40%] w-full">
                <button className="relative w-[70%] md:w-full border-2 border-red-500 text-sm md:my-0 py-1 md:py-2 md:px-2 rounded-sm text-center transition-all duration-500 text-black group hover:bg-red-500 hover:text-white sm:mx-2">
                    <span className="absolute inset-0 border-2 border-red-500 transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                    <span className="relative z-10">Reject</span>
                </button>
                <button className="relative w-[70%] md:w-full border-2 border-green-500 text-sm mt-2 md:my-0 py-1 md:py-2 md:px-2 rounded-sm text-center transition-all duration-500 text-black group hover:bg-green-500 hover:text-white md:mx-2">
                    <span className="absolute inset-0 border-2 border-green-500 rounded-md transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                    <span className="relative z-10">Accept</span>
                </button>
            </div>
        </div>
    )
}
