import React from 'react'
import bg from '../assets/Contact_Bg.jpg'

export default function Contact() {
    return (
        <div className='relative font-mont px-8 md:px-0 flex items-center justify-center md:justify-end' id='contact'>
            <div>
                <img src={bg} alt="Contact BG" className='hidden lg:block pointer-events-none' />
            </div>
            <div className='lg:absolute my-10 md:my-2 md:px-16 w-full lg:w-[60%] top-24 right-24 text-center'>
                <div className='w-full'>
                    <h1 className='font-extrabold text-3xl lg:text-5xl'>Contact Our Team</h1>
                </div>
                <div className='py-4' id='contact-form'>
                    <h3 className='font-semibold mb-10 text-gray-600'>Got any questions on our platform? We're here to help.</h3>
                    <form className='py-2 flex flex-col items-center justify-center'>
                        <div className='w-full flex flex-col md:flex-row items-center text-left justify-between gap-y-2 md:gap-8'>
                            <div className='w-full'>
                                <label htmlFor="fname"
                                    className='w-full text-justify font-medium mt-2'>First Name</label>
                                <input type="text" id='fname' className='outline-none font-medium border-2 border-gray-300 w-full p-2 rounded-md bg-transparent my-1' placeholder='John' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="lname"
                                    className='w-full text-justify font-medium mt-2'>Last Name</label>
                                <input type="text" id='lname' className='outline-none font-medium border-2 border-gray-300 w-full p-2 rounded-md bg-transparent my-1' placeholder='Doe' />
                            </div>
                        </div>


                        <label htmlFor="mail" className='w-full text-justify font-medium mt-2' >Email</label>
                        <input type="email" id='mail' className='outline-none font-medium border-2 border-gray-300 w-full p-2 rounded-md bg-transparent my-1' placeholder='your@email.com' />

                        <label htmlFor="phnum"
                            className='w-full text-justify font-medium mt-2'>Phone Number</label>
                        <input
                            type='tel'
                            pattern="^[0-9]{10}$"
                            id='phnum'
                            className='outline-none font-medium border-2 border-gray-300 w-full p-2 rounded-md bg-transparent my-1'
                            placeholder='+91 12 345 67890'
                            title="Phone number must be 10 digits long and contain only numbers."
                            maxLength={10}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />

                        <label htmlFor="message"
                            className='w-full text-justify font-medium mt-2'>Message</label>
                        <textarea name="message" rows={6} id="message" placeholder='Leave us a message...'
                            className='font-medium border-2 border-gray-300 resize-none w-full p-2 rounded-md bg-transparent outline-none'>
                        </textarea>

                        <button className="relative border-2 bg-black md:bg-transparent text-white md:text-black border-gray-300 block w-full mt-3 py-2 px-4 rounded-md text-center transition-all duration-500 group md:hover:bg-black md:hover:text-white md:hover:border-black"
                                type='submit'>
                                <span className="absolute inset-0 border-2 border-black rounded-md transition-transform duration-500 transform scale-0 md:group-hover:scale-100"></span>
                                <span className="relative z-10">Submit</span>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
