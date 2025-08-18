import React, { useRef } from "react";
import "./Folio.css";
import Header from "./Header";
import Profile from "../assets/me.png";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Folio = () => {
  const ref = useRef(null);

  const handleCLick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container-fluid">
      <Header />

      <div className="row justify-content-center pt-5" id="hero">
        <div className="header-text col-12 col-xl-5 col-lg-5 col-md-6 col-sm-7 pt-xl-5 pt-lg-5 pt-md-5 text-center">
          <h1>
                      Welcome to my corner of the web.</h1>
                  <br></br>
            <h2> I'm{" "}
            <span className="text-decoration-underline underline fw-bold">
              Ifechukwu Edet, 
            </span>
             &nbsp; front-end engineer and tech educator.
          </h2>
          <p className="fs-6 mt-xl-5 mt-lg-3 mt-md-3">
            I craft sleek, accessible, and engaging web apps using HTML, CSS,
            and React.
            Beyond building, I’m passionate about teaching and empowering others
            to grow their skills in web development.
          </p>
          <a href="/#contact">
            <button
              className="btn btn-outline contact-btn my-3 my-lg-5"
              onClick={handleCLick()}
            >
              Contact Me
            </button>
          </a>
          <a href="../../Ifechukwu Edet CV.pdf" download="Ifechukwu Max-Oti_CV">
            <button className="btn btn-outine contact-btn m-lg-5 m-3">
              View My Resume
            </button>
          </a>
        </div>

        <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-3 text-center">
          <img
            className="img-fluid text-center"
            alt="headshot of me"
            src={Profile}
          ></img>
        </div>
      </div>

      <div className="border-bottom border-top">
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div className="row contact" id="contact" ref={ref}>
        <Contact />
      </div>
    </div>
  );
};

export default Folio;
