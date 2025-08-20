import React from "react";

// ✅ Import images
import course1 from "../../../assets/images/course-1.webp";
import course2 from "../../../assets/images/course-2.webp";
import course3 from "../../../assets/images/course-3.webp";

const PopulorCourses = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-color px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Course 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="course-item bg-color">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={course1} alt="Course 1" />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">
                  <span className="text-darkk">Rs 2500</span>{" "}
                  <span
                    className="text-muted text-decoration-line-through me-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Rs 3500
                  </span>
                </h3>
                <div className="mb-3">
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small>(153+)</small>
                </div>
                <h5 className="mb-4">Spoken English language</h5>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-person-badge fs-5 text-color me-2"></i> Sir
                  Rehmat Ullah
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-clock fs-5 text-color me-2"></i> 1.49 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="bi bi-person fs-5 text-color me-2"></i> 50+
                  Students
                </small>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="course-item bg-color">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={course2} alt="Course 2" />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">
                  <span className="text-darkk">Rs 3000</span>{" "}
                  <span
                    className="text-muted text-decoration-line-through me-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Rs 4000
                  </span>
                </h3>
                <div className="mb-3">
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small>(127+)</small>
                </div>
                <h5 className="mb-4">Graphic Designing</h5>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-person-badge fs-5 text-color me-2"></i> Sir
                  Bilal Awan
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-clock fs-5 text-color me-2"></i> 1 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="bi bi-person fs-5 text-color me-2"></i> 20+
                  Students
                </small>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="course-item bg-color">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={course3} alt="Course 3" />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="flex-shrink-0 btn btn-sm btn-color px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">
                  <span className="text-darkk">Rs 5000</span>{" "}
                  <span
                    className="text-muted text-decoration-line-through me-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Rs 7000
                  </span>
                </h3>
                <div className="mb-3">
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small className="bi bi-star-fill text-color"></small>
                  <small>(216+)</small>
                </div>
                <h5 className="mb-4">Web Design & Development</h5>
              </div>
              <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-person-badge fs-5 text-color me-2"></i> Sir
                  Moin Ahmed
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="bi bi-clock fs-5 text-color me-2"></i> 2 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="bi bi-person fs-5 text-color me-2"></i> 50+
                  Students
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulorCourses;
