import React, { useEffect } from 'react'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import ShopArea from './shopArea/ShopArea'
useEffect
const Food = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (

    <>
    <BreadCrumbArea/>
    <ShopArea/>
    </>

  )
}

export default Food
