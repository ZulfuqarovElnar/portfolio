import React, { useState, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const navClass = 'font-medium transition-all duration-300 ease hover:text-[#e54b4b]';
    const menuClass = `w-full bg-white flex md:hidden shadow-box fixed z-20 top-[90px] transition-all duration-300 overflow-hidden ${menuVisible ? 'h-[240px] py-6 px-10' : 'h-0'} `;
    const logoSrc = scrolled ? "images/dark.png" : "images/logo.png";
    const navbarBg = scrolled ? 'bg-white' : 'bg-transparent';
    const navbarText = scrolled ? 'text-black' : 'text-white';

    return (
        <section>
            <div className={`w-full h-[90px] transition-all duration-300 ${navbarBg} z-20 flex items-center justify-center fixed`}>
                <div className='w-[1200px] h-[30px] px-10 flex justify-between items-center'>
                    <div>
                        <img className='h-[19px] cursor-pointer' src={logoSrc} alt="" />
                    </div>
                    <ul className={`gap-10 hidden md:flex ${navbarText}`}>
                        <li className={navClass}><Link to="/home">Home</Link></li>
                        <li className={navClass}><Link to="/about">About</Link></li>
                        <li className={navClass}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={navClass}><Link to="/news">News</Link></li>
                        <li className={navClass}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className='flex md:hidden transition-all duration-300 ease'> 
                        <FontAwesomeIcon
                            className={`text-[32px] text-[#767676] cursor-pointer ${menuVisible ? 'hidden' : ''}`}
                            icon={faBars}
                            onClick={toggleMenu}
                        />
                        <FontAwesomeIcon
                            className={`text-[32px] text-[#767676] cursor-pointer ${menuVisible ? '' : 'hidden'}`}
                            icon={faTimes}
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </div>
            <div className={menuClass}>
                <ul className={`${menuVisible ? '' : 'hidden'}`}>
                    <li className={`navclass h-9 my-0.5`}><Link to="/home">Home</Link></li>
                    <li className={`navclass h-9 my-0.5`}><Link to="/about">About</Link></li>
                    <li className={`navclass h-9 my-0.5`}><Link to="/portfolio">Portfolio</Link></li>
                    <li className={`navclass h-9 my-0.5`}><Link to="/news">News</Link></li>
                    <li className={`navclass h-9 my-0.5`}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </section>
    );
}
