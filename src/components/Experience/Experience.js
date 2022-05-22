import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Skills</h2>

      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Frontend Developement</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Material-ui</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_backend">
          <h3>Backend Developement</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Python</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article> */}

            {/* <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article> */}

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>

            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />

              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
