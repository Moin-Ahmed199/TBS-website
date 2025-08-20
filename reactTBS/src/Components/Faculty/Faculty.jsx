import React from "react";
import team1 from "../../assets/images/team-1.webp";
import team2 from "../../assets/images/team-2.webp";
import team3 from "../../assets/images/team-3.webp";
import team4 from "../../assets/images/team-4.webp";

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-color px-3">Instructors</h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-color">
              <div className="overflow-hidden">
                <img className="img-fluid" src={team1} alt="Instructor 1" />
              </div>
              <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-facebook"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-twitter-x"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Bilal Awan</h5>
                <small>Founder of TBs</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-color">
              <div className="overflow-hidden">
                <img className="img-fluid" src={team2} alt="Instructor 2" />
              </div>
              <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-facebook"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-twitter-x"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Rehmat Ullah</h5>
                <small>English language HOD</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-color">
              <div className="overflow-hidden">
                <img className="img-fluid" src={team3} alt="Instructor 3" />
              </div>
              <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-facebook"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-twitter-x"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Sir Moin Ahmed</h5>
                <small>Computer & IT HOD</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item bg-color">
              <div className="overflow-hidden">
                <img className="img-fluid" src={team4} alt="Instructor 4" />
              </div>
              <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-facebook"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-twitter-x"></i></a>
                  <a className="btn btn-sm-square btn-color mx-1" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Sir Nehal</h5>
                <small>Coaching HOD</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
