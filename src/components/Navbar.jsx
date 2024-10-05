import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import logo from '../assets/images/logo-without-tag-blue.png';
import smallLogo from '../assets/images/logo-with-tag-right-aligned-300-blue.png';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleNavbar = () => {
        console.log(mobileDrawerOpen)
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleMenuClick = (index) => {
        setActiveIndex(index);  
        setMobileDrawerOpen(false); 
    };

    return (
        <nav className="sticky top-0 py-4 z-50 backdrop-blur-lg bg-white">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        {/* Small logo for mobile screens */}
                        <img className='h-10 ml-16 hidden lg:block' src={logo} alt="small logo" />
                        {/* Normal logo for larger screens */}
                        <img className='h-10 ml-5 block lg:hidden' src={smallLogo} alt="logo" />
                    </div>
                    <ul className='hidden lg:flex mr-20 ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    className={`relative cursor-pointer ${activeIndex === index || item.label === 'Get Hired' ? 'text-red-500' : 'text-gray-500 hover:text-red-300'
                                        }`}
                                    onClick={() => handleMenuClick(index)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className="fixed right-0 bg-black/80 text-white z-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <Link
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        className={`relative cursor-pointer ${activeIndex === index || item.label === 'Get Hired' ? 'text-red-500' : 'text-white hover:text-red-300'
                                            }`}
                                        onClick={() => handleMenuClick(index)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
