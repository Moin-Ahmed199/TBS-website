import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

function Navbar() {
  const [heading, setHeading] = useState("The Brighten Stars Academy");

  useEffect(() => {
    const updateHeading = () => {
      if (window.innerWidth <= 736) {
        setHeading("TBS Academy");
      } else {
        setHeading("The Brighten Stars Academy");
      }
    };

    updateHeading(); // Run once on load
    window.addEventListener("resize", updateHeading);

    return () => {
      window.removeEventListener("resize", updateHeading);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5 mx-sm-0 btn-color navbar-margin"
      >
        <img
          src={logo}
          alt="Logo"
          style={{ marginRight: "10px" }}
          className="img-design"
        />
        <h2 className="m-0 text-white" id="main-heading">
          {heading}
        </h2>
      </a>

      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link">
            About
          </a>
          <a href="courses.html" className="nav-item nav-link">
            Courses
          </a>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>

        <a
          href="Joinnow.jsx"
          className="btn btn-color py-4 px-lg-5 d-none d-lg-block"
        >
          Join Now <i className="bi bi-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
