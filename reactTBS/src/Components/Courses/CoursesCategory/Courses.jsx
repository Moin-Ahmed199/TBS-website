import React from "react";
import cat1 from "../../../assets/images/cat-1.webp";
import cat2 from "../../../assets/images/cat-2.webp";
import cat4 from "../../../assets/images/cat-4.webp";
import cat5 from "../../../assets/images/cat-5.webp";

function Categories() {
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-color px-3">
            Categories
          </h6>
          <h1 className="mb-5">Courses Categories</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="#"
                >
                  <img className="img-fluid" src={cat1} alt="Web Design" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Web Design</h5>
                    <small className="text-color">2 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="#"
                >
                  <img className="img-fluid" src={cat2} alt="Graphic Design" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Graphic Design</h5>
                    <small className="text-color">3 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="#"
                >
                  <img
                    className="img-fluid"
                    src={cat5}
                    alt="Web Development"
                  />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Web Development</h5>
                    <small className="text-color">4 Courses</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: "350px" }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href="#"
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={cat4}
                alt="English language"
                style={{ objectFit: "cover" }}
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">English language</h5>
                <small className="text-color">3 Courses</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
