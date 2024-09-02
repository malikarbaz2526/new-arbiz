import React from 'react'
import BannerImage from "../../../assets/img/banner/banner-2.jpg";

const BreadCrumbArea = () => {
  return (
    <>
    <div
  className="breadcrumb-area pt-95 pb-95 bg-img"
  style={{  backgroundImage: `url(${BannerImage})` }}
>
  <div className="container">
    <div className="breadcrumb-content text-center">
      <h2>Product Details</h2>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li className="active">Product Details</li>
      </ul>
    </div>
  </div>
</div>

    
    
    </>
    
  )
}

export default BreadCrumbArea
