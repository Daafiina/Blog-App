import Banner from '../Components/Banner/Banner'
import BlogList from '../Components/Blogs/BlogList'
import './Home.css'
import {useEffect} from 'react' 
import { useHistory } from 'react-router-dom';

export default function Home (){
    
    const history=useHistory();
    useEffect(() => {
    let username=sessionStorage.getItem('username');
    if(username === '' || username===null){
        history.push('/login')
    }
    },[]);
    return (
        <>
        <Banner/>
        <BlogList/>
        
            {/* <SectionHome/> */}
        
        
        </>
    )
}