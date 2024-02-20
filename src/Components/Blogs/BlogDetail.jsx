import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // Render a loading indicator while data is being fetched
    }

    return (
        <div className="max-w-lg  mx-auto mt-32 rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-64 object-cover"
                src={`https://picsum.photos/960/400?random=${id}`}
                alt=""
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-700 hover:text-green-900 cursor-pointer">
                    {data.title}
                </div>
                <div className="text-gray-500 text-sm mb-2">{data.category}</div>
                <p className="text-gray-700 text-base">{data.body}</p>
            </div>
        </div>
    );
}

export default BlogDetail;
