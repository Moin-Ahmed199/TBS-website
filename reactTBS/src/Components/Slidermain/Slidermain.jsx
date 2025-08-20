import React from "react";
import carousel1 from "../../assets/images/carousel-1.webp"; // adjust path based on your folder

function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="position-relative header-banner">
        {/* Background Image */}
        <img src={carousel1} alt="carousel" className="img-fluid w-100 h-100 object-fit-cover" />

        {/* Overlay Content */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center overlay-bg">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-color text-uppercase mb-3 animated slideInDown">
                  Learn & Grow
                </h5>
                <h1 className="display-3 text-white animated slideInDown fw-bold">
                  The Brighten Stars Academy
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                  Our one-stop learning center for computer courses, English
                  language classes, and academic coaching
                </p>

                {/* Buttons */}
                <a
                  href="#"
                  className="btn btn-color py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </a>
                <a
                  href="/joinnow"
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
