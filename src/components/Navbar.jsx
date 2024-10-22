import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import logo from '../assets/images/hr-logo-final-navbar.png';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [showNavbar, setShowNavbar] = useState(true); // Track navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0);  // Track last scroll position

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleMenuClick = (index) => {
        setActiveIndex(index);
        setMobileDrawerOpen(false);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // If scroll down, hide the navbar
                setShowNavbar(false);
            } else {
                // If scroll up, show the navbar
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY); // Update last scroll position
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`fixed w-full top-0 z-50  backdrop-blur-lg shadow-md bg-white py-4 px-4`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-16 ml-16 hidden lg:block' src={logo} alt="small logo" />
                    <img className='h-10 ml-5 block lg:hidden' src={logo} alt="logo" />
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
        </nav>
    );
};

export default Navbar;
