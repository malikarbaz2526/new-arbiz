import React, { useEffect } from 'react'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import ContactArea from './contactArea/ContactArea'
useEffect
const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
   <>

   <BreadCrumbArea/>
   <ContactArea/>
   
   
   </>
  )
}

export default ContactUs
