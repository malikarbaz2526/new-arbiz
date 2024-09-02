import React, { useEffect } from 'react'
import HeroBanner from './heroBanner/heroBanner';
import FoodCategory from './foodCategory/FoodCategory';
import ProductArea from './productArea/ProductArea';
import DealArea from './dealArea/DealArea';
import Testimonial from './testimonial/Testimonial';
import ServiceArea from './serviceArea/ServiceArea';
import BlogArea from './blogArea/BlogArea';
const Home = () => {
  
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <HeroBanner />
    <FoodCategory />
    <ProductArea />
    <DealArea />
    <Testimonial/>
    <ServiceArea/>
    <BlogArea/>
    </>
  )
}

export default Home
