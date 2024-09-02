import React from 'react';
import blog4 from '../../../assets/img/blog/blog-4.jpg';
import blog5 from '../../../assets/img/blog/blog-5.jpg';
import blog6 from '../../../assets/img/blog/blog-6.jpg';
import blog7 from '../../../assets/img/blog/blog-7.jpg';
import blog8 from '../../../assets/img/blog/blog-8.jpg';
import blog9 from '../../../assets/img/blog/blog-9.jpg';
import {  ArrowLeft , ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const BlogArea = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-100 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 4" src={blog4} />
                </Link>
             
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  Top 5 Nutritional Tips for Your Pet’s Health
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 5" src={blog5} />
                    </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  "How to Choose the Best Food for Your Furry Friend"
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 6" src={blog6} />
                    </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  "Understanding Your Pet’s Dietary Needs: A Complete Guide"
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 7" src={blog7} />
                    </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  "The Benefits of High-Quality Pet Food: What to Look For"
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 8" src={blog8} />
                    </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  "Common Pet Food Myths Debunked: What You Need to Know"
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-wrapper mb-30 gray-bg">
                <div className="blog-img hover-effect">
                <Link to="/blog-details">
                    <img alt="Blog 9" src={blog9} />
                    </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>By: <span>Admin</span></li>
                      <li>Sep 14, 2018</li>
                    </ul>
                  </div>
                  <h4>
                  <Link to="/blog-details">
                  "How to Choose the Best Food for Your Furry Friend"
                      </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-style text-center mt-20">
            <ul>
              <li>
                <a href="#">
                <ArrowLeft size={20} color="currentColor" className='icon-arrow-left' />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a className="active" href="#"> 
                <ArrowRight size={20} color="currentColor"  className='icon-arrow-right'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArea;
