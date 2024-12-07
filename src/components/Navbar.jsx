import React, { Children, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import mahesh from '../Assetss/mahesh.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll'

const Navbar = ({ children }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <>

            <div className='navbar bg-slate-700 max-w-[100%] h-16 font-bold flex items-center justify-between px-4 sticky top-0 z-20 '>
                {/* Centered Logo and Name */}
                <div className='flex items-center md:mx-10'>
                    <div className='w-12 h-12 overflow-hidden rounded-full outline-dotted outline-purple-600 animation-rotating duration-500  hover:animate-none ease-out flex justify-center  last:items-center border-2 border-gray-200  '>
                        <img src={mahesh} alt='logo' className='object-cover w-full h-full' />
                    </div>

                    <Link to="/" className='text-2xl font-bold text-white px-2 hover:text-purple-400'>
                        M-W
                    </Link>
                </div>
                {
                    toggle ?
                        <IoCloseSharp onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
                        : <IoMdMenu onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block ' />
                }



                {/* Right-aligned Navigation Links */}
                <ul className='hidden md:flex items-center text-white gap-8 ml-auto mr-6'>
                    <li className='bg-slate-500 text-white px-2 py-1 rounded hover:bg-green-300 hover:text-black'><Link to="/about" >About</Link></li>
                    <li className='bg-slate-500 text-white px-2 py-1 rounded hover:bg-green-300 hover:text-black'><Link to="/contact" className="hover:text-white-400">Contact</Link></li>
                    <li className='bg-slate-500 text-white px-2 py-1 rounded hover:bg-green-300 hover:text-black'><Link to="/portfolio" className="hover:text-white-400">Portfolio</Link></li>
                    <li className='bg-slate-500 text-white px-2 py-1 rounded hover:bg-green-300 hover:text-black'><Link to="/skills" className="hover:text-white-400 ">Skills</Link></li>

                </ul>
                {/* Responsive */}
                <ul className={` duration-300 md:hidden w-full h-screen opacity-90 text-white  bg-slate-400 opacity-3 fixed bg-b  md:top-[56px] top-[64px] space-y-2 ${toggle ? 'left-[0]' : 'left-[-100%] '}
        ` }>
                    <li className='p-4 hover:bg-red-300  bg-teal-800 mx-[1px] rounded mt-1'><Link to="/about" >About</Link></li>
                    <li className='p-4 hover:bg-red-300  bg-teal-800 mx-[1px] rounded mt-1'><Link to="/contact">Contact</Link></li>
                    <li className='p-4 hover:bg-red-300 bg-teal-800 mx-[1px] rounded mt-1'><Link to="/portfolio" >Portfolio</Link></li>
                    <li className='p-4 hover:bg-red-300 bg-teal-800 mx-[1px] rounded mt-1'><Link to="/skills">Skills</Link></li>

                </ul>
            </div>

            <div className='w-full'>
                {children}
            </div>


            {/* footer section */}
            <footer className='bg-slate-700  px-4 md:px-20 md:py-16 py-8  '>
                <div className='md:w-full md:mx-auto grid md:grid-cols-4 grid-cols-1 text-black md:gap-4 gap-3 mx-3'>
                    <div >
                        <h1 className='text-white font-semibold md:text-2xl text-[18px] md:mb-3 mb-2'>Brand Details</h1>
                        <p className='text-white mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="md:w-[100px] md:h-[100px] h-[60px] w-[60px] rounded-full border-2 border-gray-300 m-1  ">
                            <img
                                src="./mahesh.jpg"
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div  className='px-2'>
                        <h1 className='text-white font-semibold md:text-2xl text-[18px] md:mb-3 mb-2'>Website Links</h1>
                        {/* <ul className='md:space-y-2 space-y-[0px] flex flex-col items-start  '>
                            {menus.map((item, index) => (
                                <li key={index} className="inline-block hover:bg-stone-500  rounded py-1 hover:px-2 hover:text-white">
                                    <Link 
                                    to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                            <li className='hover:bg-stone-500 hover:px-2 rounded hover:text-white' ><Link to={'/login'}>Login</Link></li>
                            <li className='hover:bg-stone-500 hover:px-2 rounded hover:text-white'><Link to={'navlayout/signup'}>SignUp</Link></li>
                        </ul> */}
                    </div>

                    <div className='px-2'>
                        <h1 className='text-white font-semibold md:text-2xl text-[18px] md:mb-3 mb-2'>Follow Us</h1>
                        <div className="space-y-2 flex flex-col">
                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500  transition-all duration-200 px-1"
                                >
                                    <FaFacebook className="mt-1" />
                                    <h1>Facebook</h1>
                                </Link>
                            </div>

                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500  transition-all duration-200 px-1"
                                >
                                    <FaLinkedin className="mt-1" />
                                    <h1>linkedin</h1>
                                </Link>
                            </div>
                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500 transition-all duration-200 px-1"
                                >
                                    <MdAttachEmail className="mt-1" />
                                    <h1>Email</h1>
                                </Link>
                            </div>
                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500 transition-all duration-200 px-1"
                                >
                                    <FaSquareGithub className="mt-1" />
                                    <h1>GItHub</h1>
                                </Link>
                            </div>
                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500  transition-all duration-200 px-1"
                                >
                                    <FaWhatsappSquare className="mt-1" />
                                    <h1>WhatsApp</h1>
                                </Link>
                            </div>
                            <div className="text-white inline-block">
                                <Link
                                    to={'/login'}
                                    className="flex items-center space-x-1 rounded hover:bg-slate-500  transition-all duration-200 px-1"
                                >
                                    <FaFacebook className="mt-1" />
                                    <h1>Facebook</h1>
                                </Link>
                            </div>

                            </div>

                    </div>

                    <div className='px-2'>
                        <h1 className='font-semibold md:text-2xl text-[18px] md:mb-3 mb-2 text-white'>Contact Us</h1>
                        <div className='text-black'>
                            <form className='md:space-y-4 space-y-2'>
                                <input className='bg-white w-full md:p-3 p-2 rounded'
                                    required
                                    type='text'
                                    placeholder='Enter the Full Name'
                                    name='fullName'
                                />
                                <input className='bg-white w-full md:p-3 p-2 rounded'
                                    required
                                    type='email'
                                    placeholder='Enter Email'
                                    name='email'
                                />
                                <textarea className='bg-white w-full md:p-3 p-2 rounded'
                                    required
                                    placeholder='Enter the message'
                                    name='message'
                                />
                                <button
                                    className='bg-slate-500 text-white md:px-3 px-2 md:py-2 py-1 rounded-md hover:bg-green-300 hover:text-white font-semibold hover:text-black'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Navbar;
