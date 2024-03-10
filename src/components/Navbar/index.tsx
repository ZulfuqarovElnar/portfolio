import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const navclass = 'font-medium transition-all duration-300 ease hover:text-[#e54b4b]';
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <section>
            <div className='w-full h-[90px] bg- flex items-center justify-center fixed bg-transparent'>
                <div className='w-[1200px] h-[30px] px-10 flex justify-between items-center'>
                    <div>
                        <img className='h-[19px] cursor-pointer' src="images/dark.png" alt="" />
                    </div>
                    <ul className='gap-10 hidden md:flex text-white'>
                        <li className={navclass}><Link to="/home">Home</Link></li>
                        <li className={navclass}><Link to="/about">About</Link></li>
                        <li className={navclass}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={navclass}><Link to="/news">News</Link></li>
                        <li className={navclass}><Link to="/contact">Contact</Link></li>
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
            <div className={`w-full bg-white shadow-box absolute top-[90px] transition-all duration-300 overflow-hidden ${menuVisible ? 'h-[240px]' : 'h-0'}`}>
                <ul className={`py-6 px-10 ${menuVisible ? '' : 'hidden'}`}>
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
