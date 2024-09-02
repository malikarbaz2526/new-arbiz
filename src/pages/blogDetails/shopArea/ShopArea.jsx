import React from 'react'
import blogDetailsImg from '../../../assets/img/blog/blog-details.jpg';
import blogDecImg1 from '../../../assets/img/blog/blog-dec-img1.jpg';
import blogDecImg2 from '../../../assets/img/blog/blog-dec-img2.jpg';
import blogComment1 from '../../../assets/img/blog/blog-comment1.png';
import blogComment2 from '../../../assets/img/blog/blog-comment2.png';
import blogS1 from '../../../assets/img/blog/blog-s1.jpg';
import blogS2 from '../../../assets/img/blog/blog-s2.jpg';
import blogS3 from '../../../assets/img/blog/blog-s3.jpg';
import { FaTwitter, FaInstagram, FaDribbble, FaLinkedin } from 'react-icons/fa';

const ShopArea = () => {
  return (
   <>
   <div className="shop-area pt-100 pb-100">
  <div className="container">
    <div className="row flex-row-reverse">
      <div className="col-lg-9 col-md-8">
        <div className="blog-details-wrapper res-mrg-top">
          <div className="single-blog-wrapper">
            <div className="blog-img mb-30">
              <img src={blogDetailsImg} alt="" />
            </div>
            <div className="blog-details-content">
              <h2>Top 5 Nutritional Tips for Your Pet’s Health</h2>
              <div className="blog-meta">
                <ul>
                  <li>May - 14.09.2018 </li>
                  <li>
                    <a href="#"> 02 Comments</a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
            Proper nutrition is essential for maintaining your pet’s health and well-being. Discover the top 5 nutritional tips to ensure your furry friend stays healthy and happy.

            </p>
            <blockquote className="importent-title">
              <h4>
              A balanced diet tailored to your pet’s needs can make a significant difference in their health and energy levels.

              </h4>
            </blockquote>
            <p>
            Choosing high-quality pet food is crucial. Ensure that your pet’s diet includes all necessary nutrients such as proteins, fats, and carbohydrates, tailored to their age, size, and activity level.

            </p>
            <div className="dec-img-wrapper">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="dec-img">
                    <img src={blogDecImg1} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="dec-img dec-mrg res-mrg-top-2">
                    <img src={blogDecImg2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <p>
            Hydration is just as important as nutrition. Make sure your pet has access to fresh water at all times to support their overall health and bodily functions.

            </p>
            <div className="blog-dec-tags-social">
              <div className="blog-dec-tags">
                <ul>
                  <li>
                    <a href="#">Dog</a>
                  </li>
                  <li>
                    <a href="#">Cat</a>
                  </li>
                  <li>
                    <a href="#">Fish</a>
                  </li>
                </ul>
              </div>
              <div className="blog-dec-social">
                <span>share :</span>
                <ul>
                  <li>
                    <a href="#">
                    <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog-comment-wrapper mt-55">
            <h4 className="blog-dec-title">comments : 02</h4>
            <div className="single-comment-wrapper mt-35">
              <div className="blog-comment-img">
                <img src={blogComment1} alt="" />
              </div>
              <div className="blog-comment-content">
                <h4>Anthony Stephens</h4>
                <span>October 14, 2018 </span>
                <p>
                Great tips! I found the section on hydration especially helpful for my dog.
                ,{" "}
                </p>
                <div className="blog-details-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>
            <div className="single-comment-wrapper mt-50 ml-125">
              <div className="blog-comment-img">
                <img src={blogComment2} alt="" />
              </div>
              <div className="blog-comment-content">
                <h4>Anthony Stephens</h4>
                <span>October 14, 2018 </span>
                <p>
                Thank you for the advice on portion sizes. It’s been a game-changer for my cat's health.
                {" "}
                </p>
                <div className="blog-details-btn">
                  <a href="#">read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-reply-wrapper mt-50">
            <h4 className="blog-dec-title">post a comment</h4>
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="leave-form">
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="leave-form">
                    <input type="email" placeholder="Eail Address " />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="text-leave">
                    <textarea placeholder="Massage" defaultValue={""} />
                    <input type="submit" defaultValue="SEND MASSAGE" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="shop-sidebar blog-mrg">
          <div className="shop-widget">
            <h4 className="shop-sidebar-title">Search Products</h4>
            <div className="shop-search mt-25 mb-50">
              <form className="shop-search-form">
                <input type="text" placeholder="Find a product" />
                <button type="submit">
                  <i className="icon-magnifier" />
                </button>
              </form>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Food Category </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">Canned Food</a>
                </li>
                <li>
                  <a href="#">Dry Food</a>
                </li>
                <li>
                  <a href="#">Food Pouches</a>
                </li>
                <li>
                  <a href="#">Food Toppers</a>
                </li>
                <li>
                  <a href="#">Fresh Food</a>
                </li>
                <li>
                  <a href="#">Frozen Food</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Top Brands </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">Authority</a>
                </li>
                <li>
                  <a href="#">AvoDerm Natural</a>
                </li>
                <li>
                  <a href="#">Bil-Jac</a>
                </li>
                <li>
                  <a href="#">Blue Buffalo</a>
                </li>
                <li>
                  <a href="#">Castor &amp; Pollux</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Tags </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">Food </a>
                </li>
                <li>
                  <a href="#">Fish </a>
                </li>
                <li>
                  <a href="#">Dog </a>
                </li>
                <li>
                  <a href="#">Cat</a>
                </li>
                <li>
                  <a href="#">Pet </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Health Consideration </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">
                    Bone Development <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Digestive Care <span>22</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    General Health <span>19</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Hip &amp; Joint <span>41</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Immune System <span>22</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Nutritional Option </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">
                    Grain Free <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Natural <span>22</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Recent Post</h4>
            <div className="recent-post-wrapper mt-25">
              <div className="single-recent-post mb-20">
                <div className="recent-post-img">
                  <a href="#">
                    <img src={blogS1} alt="" />
                  </a>
                </div>
                <div className="recent-post-content">
                  <h4>
                    <a href="#">My Dog, Aren</a>
                  </h4>
                  <span>April 19, 2018 </span>
                </div>
              </div>
              <div className="single-recent-post mb-20">
                <div className="recent-post-img">
                  <a href="#">
                    <img src={blogS2} alt="" />
                  </a>
                </div>
                <div className="recent-post-content">
                  <h4>
                    <a href="#">My Dog, Tomy</a>
                  </h4>
                  <span>April 19, 2018 </span>
                </div>
              </div>
              <div className="single-recent-post mb-20">
                <div className="recent-post-img">
                  <a href="#">
                    <img src={blogS3}alt="" />
                  </a>
                </div>
                <div className="recent-post-content">
                  <h4>
                    <a href="#">My Dog, Suju</a>
                  </h4>
                  <span>April 19, 2018 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
   </>
  )
}

export default ShopArea
