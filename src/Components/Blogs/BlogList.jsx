import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({ title: '', text: '', category: '' });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddPost = () => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(() => {
            fetch('https://dummyjson.com/posts?limit=10')
                .then(res => res.json())
                .then(data => {
                    setData(data.posts);
                    setNewPost({ title: '', text: '', category: '' }); 
                })
                .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
    };
    
    return (
        <div>
            <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((post) => (
                    <BlogCard key={post.id} id={post.id} title={post.title} text={post.body} category={post.tags[0]} onDelete={handleDelete} />
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
                <form onSubmit={handleAddPost}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Title:</label>
                        <input type="text" id="title" name="title" value={newPost.title} onChange={handleInputChange} className="form-input mt-1 block w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-gray-700">Text:</label>
                        <textarea id="text" name="text" value={newPost.text} onChange={handleInputChange} className="form-textarea mt-1 block w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700">Category:</label>
                        <input type="text" id="category" name="category" value={newPost.category} onChange={handleInputChange} className="form-input mt-1 block w-full" />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Post</button>
                </form>
            </div>
        </div>
    );
};

export default BlogList;
