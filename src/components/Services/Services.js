import React from "react";
import "./Services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Frontend Developement</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="list_icon" />
              <p>Develope website user interface using React JS</p>
            </li>
            <li>
              <BsCheck className="list_icon" />
              <p>Develope responsive website for Dekstop,Mobile and Tab</p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="list_icon" />
              <p>Develope website Backend using MERN stack</p>
            </li>
            <li>
              <BsCheck className="list_icon" />
              <p>Develope website Backend using MYSQL</p>
            </li>
            <li>
              <BsCheck className="list_icon" />
              <p>User authentication using Firebase</p>
            </li>
            <li>
              <BsCheck className="list_icon" />
              <p>Develope website Backend using Node JS</p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>App Developement</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="list_icon" />
              <p>App Developement using React Native</p>
            </li>
            <li>
              <BsCheck className="list_icon" />
              <p>Expo CLI</p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
            <li>
              {/* <BsCheck className="list_icon" /> */}
              <p></p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
