import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const ProjectCountArea = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure the animation only happens once
    threshold: 0.2,    // Adjust the threshold as needed
  });

  return (
    <div className="project-count-area pb-70 pt-100 gray-bg" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="single-count mb-30 text-center">
              <h2 className="count">
                {inView ? <CountUp end={18} duration={2} /> : '0'}
              </h2>
              <span>Months in Business</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="single-count mb-30 text-center">
              <h2 className="count">
                {inView ? <CountUp end={290} duration={2} /> : '0'}
              </h2>
              <span>Happy People</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="single-count mb-30 text-center">
              <h2 className="count">
                {inView ? <CountUp end={24} duration={2} /> : '0'}
              </h2>
              <span>Billion Sales</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="single-count mb-30 text-center">
              <h2 className="count">
                {inView ? <CountUp end={17} duration={2} /> : '0'}
              </h2>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCountArea;
