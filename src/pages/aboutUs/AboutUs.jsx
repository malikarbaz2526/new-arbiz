import React, { useEffect } from 'react'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import AboutUsArea from './aboutUsArea/AboutUsArea'
import ProjectCountArea from './projectCountArea/ProjectCountArea'
import Testimonial from '../home/testimonial/Testimonial'
import TeamArea from './teamArea/TeamArea'

const AboutUs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <BreadCrumbArea/>
    <AboutUsArea/>
   
    <Testimonial/>
    <TeamArea/>

    </>

  )
}

export default AboutUs
