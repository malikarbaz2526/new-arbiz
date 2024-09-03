import React, {useEffect} from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import HeroBanner from './heroBanner/HeroBanner.jsx';
=======
import HeroBanner from './heroBanner/HeroBanner';
>>>>>>> d30a825f6c34c84280560eaa9860f56356ce9637
=======
import HeroBanner from './heroBanner/heroBanner';
>>>>>>> 6d81b5242f168cef7cd9667b727c805ea1cb3c1d
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
