import React from 'react';
import image from '../assets/login_bg.jpg';

export default function PopularPlayer(card) {
    return (
        <div className='font-mont' key={card.id}>
            <div className="p-4 rounded-lg border w-[80%] my-8 mx-8 flex flex-col justify-center items-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                id="card">
                <div>
                    <img className="rounded-md" src={image} alt='Player' />
                </div>
                <div className="transform transition-all duration-500 hover:translate-y-2">
                    <h1 className="mt-2 font-bold text-xl uppercase">Player Name</h1>
                    <p className="text-sm font-light">@username</p>
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
    )
}
