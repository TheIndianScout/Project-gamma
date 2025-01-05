import React from 'react';

export default function Members({ member }) {
    if (!member) return null;

    return (
            <div className="flex items-center w-full border md:border-2 py-3 px-4 md:px-6 md:py-4 rounded-md mt-4 font-mont" id='member-card'>
                <div className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={member.imgSrc}
                        alt={member.name}
                    />
                </div>
                <div className="mx-4">
                    <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl">
                        {member.name}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base font-light md:font-normal">
                        {member.username}
                    </p>
                </div>
            </div>
    );
}
