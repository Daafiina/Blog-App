import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import search from '../../assets/search.png'

const BlogList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [newPost, setNewPost] = useState({ title: '', body: '', tags: [] });

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
            .then(res => res.json())
            .then(data => {
                setData(data.posts); 
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if(res.ok){
                setData(prevData => prevData.filter(post => post.id !== id));
            } else {
                throw new Error('Failed to delete post');
            }
        })
        .catch(error => console.error('Error:',error));
    };

    const handlePost = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to add post');
            }
        })
        .then(data => {
            // Generate a unique ID for the new post
            const postId = Math.floor(Math.random() * 1000000); // Generate a random ID
            const formattedPost = {
                id: postId,
                title: newPost.title,
                body: newPost.body,
                tags: newPost.tags
            };
            setData(prevData => [...prevData, formattedPost]); // Add the new post to the list
            setNewPost({ title: '', body: '', tags: [] }); // Clear the new post form
        })
        .catch(error => console.error('Error:', error));
    };
    

    const filteredPosts = data.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-4 mt-8 ml-2">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search posts..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500 pl-10" // Added pl-10 for padding-left to make space for the search icon
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2"> {/* Position the search icon */}
                        <img src={search} alt="Search Icon" className="h-5 w-5" /> {/* Set the search icon as the background image */}
                    </div>
                </div>
            </div>
            {/* New post form */}
            <div className="mb-4 ml-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Body"
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newPost.tags.join(',')}
                    onChange={(e) => setNewPost({ ...newPost, tags: e.target.value.split(',') })}
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                />
                <button onClick={handlePost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Post
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4 lg:grid-cols-4 gap-4">
                {filteredPosts.map((post, index) => (
            <BlogCard key={index} id={post.id} title={post.title} text={post.body} category={post.tags?.[0]} onDelete={handleDelete} />
             ))}
        </div>
        </div>
    );
};

export default BlogList;
