import React from 'react';
import team1 from '../../../assets/img/team/team-1.jpg';
import team2 from '../../../assets/img/team/team-2.jpg';
import team3 from '../../../assets/img/team/team-3.jpg';
import team4 from '../../../assets/img/team/team-4.jpg';
import {
    AiFillTwitterCircle,
    AiFillInstagram,
  
  } from "react-icons/ai";
  import { FaFacebookF, FaPinterestP } from "react-icons/fa";
const TeamArea = () => {
  return (
    <>
      <div className="team-area pt-95 pb-70">
        <div className="container">
          <div className="section-title text-center mb-55">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-wrapper mb-30">
                <div className="team-img">
                  <a href="#">
                    <img src={team1} alt="Adam Jonson" />
                  </a>
                  <div className="team-social">
                    <a href="#">
                  <FaFacebookF size={30} />
                    </a>
                    <a href="#">
                    <FaPinterestP size={30} />
                    </a>
                    <a href="#">
                    <AiFillTwitterCircle color="#1DA1F2" size={30} />
                    </a>
                    <a href="#">
                    <AiFillInstagram color="#E4405F" size={30} />
                    </a>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>Adam Jonson</h4>
                  <span>Customer </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-wrapper mb-30">
                <div className="team-img">
                  <a href="#">
                    <img src={team2} alt="Rose Evans" />
                  </a>
                  <div className="team-social">
                    <a href="#">
                    <FaFacebookF size={30} />
                    </a>
                    <a href="#">
                    <FaPinterestP size={30} />
                    </a>
                    <a href="#">
                    <AiFillTwitterCircle color="#1DA1F2" size={30} />
                    </a>
                    <a href="#">
                    <AiFillInstagram color="#E4405F" size={30} />
                    </a>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>Rose Evans</h4>
                  <span>Manager </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-wrapper mb-30">
                <div className="team-img">
                  <a href="#">
                    <img src={team3} alt="Bruce Cole" />
                  </a>
                  <div className="team-social">
                    <a href="#">
                    <FaFacebookF size={30} />
                    </a>
                    <a href="#">
                    <FaPinterestP size={30} />
                    </a>
                    <a href="#">
                    <AiFillTwitterCircle color="#1DA1F2" size={30} />
                    </a>
                    <a href="#">
                    <AiFillInstagram color="#E4405F" size={30} />
                    </a>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>Bruce Cole</h4>
                  <span>Customer </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-wrapper mb-30">
                <div className="team-img">
                  <a href="#">
                    <img src={team4} alt="Debra Lane" />
                  </a>
                  <div className="team-social">
                    <a href="#">
                    <FaFacebookF size={30} />
                    </a>
                    <a href="#">
                    <FaPinterestP size={30} />
                    </a>
                    <a href="#">
                    <AiFillTwitterCircle color="#1DA1F2" size={30} />
                    </a>
                    <a href="#">
                    <AiFillInstagram color="#E4405F" size={30} />
                    </a>
                  </div>
                </div>
                <div className="team-content text-center">
                  <h4>Debra Lane</h4>
                  <span>Manager </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamArea;
