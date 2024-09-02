import React, { useEffect } from 'react'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import ShopArea from './shopArea/ShopArea'
import DescriptionReviewArea from './descriptionReviewArea/DescriptionReviewArea'
import ProductArea from '../home/productArea/ProductArea'

const ProdunctDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
   <BreadCrumbArea/>
   <ShopArea/>
   <DescriptionReviewArea />
   <ProductArea/>
   
   </>
  )
}

export default ProdunctDetails
