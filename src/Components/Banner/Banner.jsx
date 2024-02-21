import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/robot.png'; // Import your banner image

function Banner() {
  return (
    <>
      <div className="relative z-[-1] bg-gradient-to-b from-blue-700 text-white to-slate-500">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-section */}
            <div className="space-y-7 ml-8 text-dark order-2 sm:order-1" style={{ marginLeft: "150px" }}>
              <h1 className="text-6xl">Welcome to{' '}
                <span className="font-cursive  text-primary">Our Blog</span>
              </h1>
              <p className=''>
                Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.
              </p>
              {/*button section */}
              <div className='flex items-center group'>
                <button className='bg-primary h-[40px] rounded-full text-white px-3 py-2 '>Get started!</button>
              </div>
            </div>
            {/* image-section */}
            <div className="order-1 sm:order-2">
              <img src={bannerImage} alt="" className="w-full sm:max-w-sm rounded-full shadow-lg" style={{ marginLeft: "400px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
