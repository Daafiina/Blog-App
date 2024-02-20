import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BlogList from '../Blogs/BlogList';

function About() {
  const history = useHistory();

  useEffect(() => {
    let username = sessionStorage.getItem('username');
    console.log("Username:", username); 
    if (username === '' || username === null) {
      console.log("Redirecting to login..."); 
      history.push('/login');
    }
  }, [history]); 

  return (
    <div>
      <BlogList/>
    </div>
  );
}

export default About;
