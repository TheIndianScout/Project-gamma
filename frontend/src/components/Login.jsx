import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, toggle] = useState(true); // Tracks whether Login or Signup form is active
    const [isActive, setIsActive] = useState(false); // Tracks whether the overlay is toggled

    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Options");

    const navigate = useNavigate();

    //Updated section
    const [signUpName, setSignupName] = useState("");
    const [userName, setUserName] = useState("");
    const [signUpEmail, setSignupEmail] = useState("");
    const [signUpPass, setSignupPass] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");


    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };

    //Login request
    const loginUser = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login/token/', {
                "email" : loginEmail,
                "password": loginPass
            });

            const { access, refresh } = response.data;

            // Save tokens in localStorage (or sessionStorage if you want temporary storage)
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log('Logged in successfully\n', localStorage['access_token']);
            navigate('/player-profile');

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    //Signup request
    const signUpUser = async (event) => {
        event.preventDefault();

        try {
            const url = 'http://localhost:8000/backend/register';
            const data = { email: signUpEmail, username: userName, user_type: selected, password: signUpPass};
            const response = await axios.post(url, data);
            console.log(response.data);
            navigate('/player-profile');
        } catch (error) {
            console.error(error);
        }
    }

    // Handlers for toggling between login and signup
    const handleSignUpClick = () => {
        setIsActive(true);
        toggle(false);
    };
    const handleLoginClick = () => {
        setIsActive(false);
        toggle(true);
    };

    return (
        <div className="w-full p-5 border h-[92.3vh] md:h-[90.9vh] flex items-center justify-center relative font-mont">
            <div className={`container flex items-center justify-between p-3 max-w-6xl md:h-[75vh] rounded-lg shadow-xl border-2 border-[#000] border-opacity-5 ${isActive ? 'active' : ''}`}>
                {/* Login Form */}
                <div className={`login w-full mx-5 md:px-10 ${!login && 'hidden md:block'}`}>
                    <form method="POST" onSubmit={loginUser}>
                        <h1 className="text-center font-bold text-4xl mb-8">LOGIN</h1>
                        <div>
                            <input
                                onChange={(e) => setLoginEmail(e.target.value)}
                                type="text"
                                id="email"
                                placeholder="Enter Email or Username"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <input
                                onChange={(e) => setLoginPass(e.target.value)}
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <div className="flex justify-between items-center px-1">
                                <label htmlFor="rem-me" className=''>
                                    Remember Me
                                    <input type="checkbox" className="outline-none mx-1" />
                                </label>
                                <a href="/" className="text-blue-600 font-medium underline outline-none">
                                    Forgot Password?
                                </a>
                            </div>
                            <button className="outline-none font-medium bg-gray-700 w-full py-2 rounded-md mt-3 text-white" type="submit">
                                Login
                            </button>
                            <div className="flex justify-between items-center p-1">
                                <p>
                                    Don't have an account?
                                    <button
                                        type="button"
                                        onClick={handleSignUpClick}
                                        className="outline-none font-medium text-gray-700 mx-2">
                                        Sign up
                                    </button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Signup Form */}
                <div className={`signup w-full mx-5 md:px-10 ${login && 'hidden md:block'}`}>
                    <form method='POST' onSubmit={signUpUser}>
                        <h1 className="text-center font-bold text-4xl mb-8">SIGN UP</h1>
                        <div>
                            <input
                                onChange={(e) => setSignupName(e.target.value)}
                                type="text"
                                id="name"
                                placeholder="Enter Name"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <input
                                onChange={(e) => setSignupEmail(e.target.value)}
                                type="email"
                                id="signup-email"
                                placeholder="Enter Email"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                id="username"
                                placeholder="Enter Username"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <input
                                onChange={(e) => setSignupPass(e.target.value)}
                                type="password"
                                id="signup-password"
                                placeholder="Create Password"
                                className="border border-gray-500 p-2 w-full rounded-md my-2 outline-none"
                            />
                            <div className="flex items-center justify-between">
                                <p className="px-1">Please Select Your Role</p>
                                <div className="relative inline-block text-left">
                                    <div
                                        onClick={toggleDropdown}
                                        id='type'
                                        className="bg-white w-28 border flex justify-between items-center border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        {selected}
                                        <SlArrowDown className={` transition-all ease-in-out ${isOpen ? "-rotate-180" : "rotate-0"}`} />
                                    </div>
                                    {isOpen && (
                                        <ul
                                            className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                            <li
                                                onClick={() => handleSelect("Player")}
                                                className="px-4 py-2 text-sm text-gray-700 rounded-t-md hover:bg-gray-100 cursor-pointer">
                                                Player
                                            </li>
                                            <li
                                                onClick={() => handleSelect("Club")}
                                                className="px-4 py-2 text-sm text-gray-700 rounded-b-md hover:bg-gray-100 cursor-pointer">
                                                Club
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <button className="outline-none font-medium bg-gray-700 w-full py-2 rounded-md mt-3 text-white" type="submit">
                                Sign Up
                            </button>
                            <div className="flex justify-between items-center p-1">
                                <p>
                                    Already have an account?
                                    <button
                                        type="button"
                                        onClick={handleLoginClick}
                                        className="outline-none font-medium text-gray-700 mx-2"
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Overlay Panel */}
                <div className="hidden toggle-container md:block text-white bg-login-bg bg-cover bg-no-repeat bg-center">
                    <div className="toggle bg-black bg-opacity-50">
                        <div className={`toggle-panel toggle-right ${login ? '' : 'hidden'}`}>
                            <h1 className="text-4xl font-bold">Welcome Back!</h1>
                            <p className="text-center my-2">To keep connected with us please login with your personal info</p>
                            <button
                                onClick={handleSignUpClick}
                                className="outline-none font-medium bg-white py-2 px-12 rounded-md mt-3 text-gray-700">
                                Sign Up
                            </button>
                        </div>
                        <div className={`toggle-panel toggle-left ${!login ? '' : 'hidden'}`}>
                            <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                            <p className="text-center my-2">Enter your personal details and start your journey with us.</p>
                            <button
                                onClick={handleLoginClick}
                                className="outline-none font-medium bg-white py-2 px-12 rounded-md mt-3 text-gray-700">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
