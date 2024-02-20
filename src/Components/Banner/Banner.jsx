import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='px-4 py-32 bg-slate-500 mx-auto'>
      <div className="text-white text-center transition duration-500 ease-in-out transform hover:scale-105">
        <h1 className='text-6xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
        <p className="text-gray-100 text-2xl lg:w-3/5 mx-auto mb-5 font-primary transition duration-500 ease-in-out transform hover:scale-105">Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
        <div>
          <Link to="/about" className='font-medium hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105'>Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
