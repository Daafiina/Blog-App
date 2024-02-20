import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, text, category, onDelete }) => {
  let lastPeriodIndex = text.lastIndexOf('.', 150);
  if (lastPeriodIndex === -1) {
    lastPeriodIndex = 150;
  }
  const truncatedText = text.substring(0, lastPeriodIndex + 1);

  const handleDelete = () => {
    console.log("Deleting blog with ID:", id); // Log the id parameter to check if it's correct
    onDelete(id); // Call the onDelete function
  };
  return (
    <div className="max-w-xs pt-8 ml-16 mt-8 rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-32 object-cover"
        src={`https://picsum.photos/250/250?random=${id}`}
        alt=""
      />
      <div className="px-4 py-2 h-60">
        <div className="font-bold text-lg mb-1 text-green-700 hover:text-green-900 cursor-pointer">
          {title}
        </div>
        <div className="text-gray-500 text-sm mb-2">{category}</div>
        <p className="text-gray-700 text-base">{truncatedText}</p>
        <div className="flex justify-end mt-4 space-x-2">
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
