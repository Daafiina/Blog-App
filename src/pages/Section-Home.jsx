import blogImage from '../assets/BlogPhoto.jpeg'
import "./Section-Home.css"

export default function SectionHome () {
    return (
        <div className="section-home">
            <div className="sectionTitle">
                <span className="sectionT">Blog</span>
            </div>
            <img className="sectionImg" 
            src={blogImage}
            alt="Blog Image">
            </img>
        </div>
    )
}