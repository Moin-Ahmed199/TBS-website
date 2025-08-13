import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 d-flex flex-column">
            <h4 className="text-white mb-3">Quick Link</h4>
            <a href="#">
              <i className="bi bi-arrow-right-short me-2"></i>About Us
            </a>
            <a href="#">
              <i className="bi bi-arrow-right-short me-2"></i>Contact Us
            </a>
            <a href="#">
              <i className="bi bi-arrow-right-short me-2"></i>Complaint
            </a>
            <a href="#">
              <i className="bi bi-arrow-right-short me-2"></i>FAQs &amp; Help
            </a>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="bi bi-geo-alt fs-5 me-3"></i>Plot no 578, sector 4f
              Baldia Town, Karachi
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone fs-5 me-3"></i>+923485208826
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope fs-5 me-3"></i>thebrightenstars1.com
            </p>

            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Stay updated with our latest courses, offers, and news.</p>

            <form
              id="newsletter-form"
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="btn btn-color py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Subscribe
              </button>
            </form>

            <p
              id="status-message"
              style={{ display: "none", color: "green" }}
            >
              Thanks for subscribing!
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                The Brighten Stars Academy
              </a>
              , All Right Reserved.
              <br />
              developed By{" "}
              <a
                className="border-bottom"
                href="https://buildifywebsite.netlify.app/"
              >
                Buildify Web Services
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Complaint</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
