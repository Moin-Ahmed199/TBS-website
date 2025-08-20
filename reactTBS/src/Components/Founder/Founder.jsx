import React from "react";
import profileImg from "../../assets/images/profile.webp"; // adjust path if needed

const FounderSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container" id="aboutid">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "500px" }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={profileImg}
                alt="profile"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-color pe-3">
              Owner & Founder
            </h6>
            <h1 className="mb-4">
              Bilal Awan — Founder of <br />
              The Brighten Stars Academy
            </h1>
            <p className="mb-4">
              The Brighten Stars Academy was founded by <strong>Bilal Awan</strong> with a clear mission — to establish a trusted learning center where students can develop practical skills and gain confidence. We specialize in professional computer courses, English language training, and academic coaching designed to meet both educational and career needs.
            </p>
            <p className="mb-4">
              <strong>Bilal Awan's</strong> vision is to empower learners through high-quality education, delivered by experienced instructors, with flexible learning options and government-certified programs that enhance their qualifications and open doors to future opportunities.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Expert Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Interactive Online Classes
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Government Certified Programs
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Flexible Learning Options
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Career-Oriented Courses
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Academic Support & Coaching
                </p>
              </div>
            </div>

            <a className="btn btn-color py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
