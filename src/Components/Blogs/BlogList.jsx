import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((post) => (
                <BlogCard key={post.id} id={post.id} title={post.title} text={post.body} category={post.tags[0]} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default BlogList;


