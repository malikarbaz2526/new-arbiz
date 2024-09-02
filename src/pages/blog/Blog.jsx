import React, { useEffect } from 'react'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import BlogArea from './blogArea/BlogArea'


const Blog = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <BreadCrumbArea/>   
    <BlogArea/>
   </>
  )
}

export default Blog
