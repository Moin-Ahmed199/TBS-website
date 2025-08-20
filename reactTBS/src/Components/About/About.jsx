import React from "react";
import aboutImage from "../../assets/images/about.webp"; // ✅ Update path to your actual image

function About() {
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
                src={aboutImage}
                alt="about"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h6 className="section-title bg-white text-start text-color pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <br /> The Brighten Stars
            </h1>
            <p className="mb-4">
              We are a dedicated learning center offering computer courses,
              English language classes, and academic coaching.
            </p>
            <p className="mb-4">
              Our mission is to empower students with practical skills and
              confidence to succeed in their careers and education.
              <br />
              At Brighten Stars, we believe in delivering quality education with
              experienced instructors, flexible learning modes, and recognized
              certifications.
            </p>

            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Hands-on Project Training
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Updated Curriculum
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Personalized Mentorship
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Job Placement Assistance
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  Real-World Case Studies
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-arrow-right text-color me-2 fs-5"></i>
                  24/7 Student Support
                </p>
              </div>
            </div>

            <a className="btn btn-color py-3 px-5 mt-2" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
