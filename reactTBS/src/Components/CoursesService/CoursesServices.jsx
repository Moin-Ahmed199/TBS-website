import React from "react";

function Services() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="bi bi-laptop custom-icon text-color mb-4"></i>
                <h5 className="mb-3">Computer Courses</h5>
                <p>
                  Learn coding, IT skills, and software tools for your career
                  growth and scalability
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="bi bi-translate custom-icon text-color mb-4"></i>
                <h5 className="mb-3">English language</h5>
                <p>
                  Improve your speaking, writing, and grammar skills with expert
                  guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="bi bi-person-video custom-icon text-color mb-4"></i>
                <h5 className="mb-3">Coaching classes</h5>
                <p>
                  Get personal attention and expert coaching to excel in your
                  academics
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="bi bi-globe2 custom-icon text-color mb-4"></i>
                <h5 className="mb-3">Online Classes</h5>
                <p>
                  Join our online sessions and learn from home with live expert
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
