import React from 'react'
import blog1 from '../../../assets/img/blog/blog-1.jpg';
import blog2 from '../../../assets/img/blog/blog-2.jpg';
import blog3 from '../../../assets/img/blog/blog-3.jpg';
import { Link } from 'react-router-dom';

const BlogArea = () => {
  return (
    <>
    <div className="blog-area pb-70">
  <div className="container">
    <div className="section-title text-center mb-60">
      <h4>Latest News</h4>
      <h2>From Our Blog</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="blog-wrapper mb-30 gray-bg">
          <div className="blog-img hover-effect">
          <Link to="/blog-details">
              <img alt="" src={blog1} />
              </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <ul>
                <li>
                  By: <span>Admin</span>
                </li>
                <li>Sep 14, 2018</li>
              </ul>
            </div>
            <h4>
              <a href="#">
                Lorem ipsum dolor amet cons adipisicing elit
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-wrapper mb-30 gray-bg">
          <div className="blog-img hover-effect">
          <Link to="/blog-details">
              <img alt="" src={blog2} />
              </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <ul>
                <li>
                  By: <span>Admin</span>
                </li>
                <li>Sep 14, 2018</li>
              </ul>
            </div>
            <h4>
              <a href="#">
                Lorem ipsum dolor amet cons adipisicing elit
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-wrapper mb-30 gray-bg">
          <div className="blog-img hover-effect">
          <Link to="/blog-details">
              <img alt="" src={blog3} />
              </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <ul>
                <li>
                  By: <span>Admin</span>
                </li>
                <li>Sep 14, 2018</li>
              </ul>
            </div>
            <h4>
              <a href="#">
                Lorem ipsum dolor amet cons adipisicing elit
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
    </>
  
  )
}

export default BlogArea
