import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import uiIcon from '../../assets/menu.png';

const BlogCard = ({ id, title, text, category, onDelete }) => {
  let truncatedText = text || ''; // Initialize truncatedText with an empty string if text is undefined
  if (text) {
    let lastPeriodIndex = text.lastIndexOf('.', 150);
    if (lastPeriodIndex === -1) {
      lastPeriodIndex = 150;
    }
    truncatedText = text.substring(0, lastPeriodIndex + 1);
  }

  const handleDelete = () => {
    console.log("Deleting blog with ID:", id); 
    onDelete(id); 
  };

  return (
    <div className="max-w-xs pt-8 ml-16 mt-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
      <img
        className="w-full h-32 object-cover"
        src={`https://picsum.photos/250/250?random=${id}`}
        alt=""
      />
      <div className="px-4 py-2 h-60 flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg mb-1 text-green-700 hover:text-green-900 cursor-pointer">
            {title}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <img src={uiIcon} alt="UI Icon" className="w-4 h-4 mr-1" /> {/* Display the UI icon */}
            {category}
          </div>
          <p className="text-gray-700 text-base">{truncatedText}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 space-x-2">
          <Link to={`/blog-detail/${id}`}>
            <button className="bg-green-300 hover:bg-green-500 text-white font-bold py-1 px-3 rounded">
              <PencilIcon className="h-5 w-5" />
            </button>
          </Link>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded" onClick={handleDelete}>
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
