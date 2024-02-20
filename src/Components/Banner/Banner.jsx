import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='px-4 py-32 bg-gradient-to-b from-blue-700 to-slate-500 text-white mx-auto text-center'>
      <div className="max-w-4xl mx-auto">
        <h1 className='text-4xl lg:text-6xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
        <p className="text-lg lg:text-2xl lg:w-3/4 mx-auto mb-8 font-primary">Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
        <div>
          <Link to="/about" className='text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out'>Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
