import React, { useState } from 'react';
import { Bars3BottomRightIcon, ClipboardDocumentListIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { logout } from '../Login/Login';

const Header = () => {
  const linksItem = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    // Add more link items as needed
  ];
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    // <header>
    <nav>
        <div className='shadow-md w-full mb-2 fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
              <ClipboardDocumentListIcon className='w-7 h-7 text-blue-600' />
              <span>Blog App</span>
            </div>
            {/* Menu icon */}
            <div onClick={() => setOpen(!open)} className='absolute right-8 top-6  cursor-pointer md:hidden w-7 h-7'>
              {
                open ? <XMarkIcon /> : <Bars3BottomRightIcon />
              }
            </div>
             {/* linke items */}
             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute  md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
             {linksItem.map(({path, label}) => (
                <li className={`mr-4 md:mr-8 text-2xl ${open ? 'mt-4' : ''}`} key={path}>
                  <Link className="text-gray-800 hover:text-blue-600 transition-colors duration-300" to={path}>{label}</Link>
                </li>
              ))}
                <button onClick={handleLogout} className='btn bg-blue-600 text-2xl text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Log out</button>
            </ul>
          </div>
        </div>
        
    </nav>
  
  );
};

export default Header;
