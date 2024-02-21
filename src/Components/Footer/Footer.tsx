import React from 'react';
import {  ClipboardDocumentListIcon, XMarkIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 absolute bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <ClipboardDocumentListIcon className='w-7 h-7 text-white' />
          <span className="font-semibold">Blog App</span>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import {  ClipboardDocumentListIcon, XMarkIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
   <>
   </>
  );
}

export default Footer;
