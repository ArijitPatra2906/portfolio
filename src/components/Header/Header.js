import React from "react";
import "./Header.css";
import CTA from "./CTA";
import { BsArrowDown } from "react-icons/bs";
import Typical from "react-typical"
// import ME from "../../assets/215045869_2595205060788464_364199866587183869_n-removebg-preview.png"
import Social from "./Social";
const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h2>Hi,</h2>
        <h2>
          I' am <span className="span">Arijit</span>{" "}
        </h2>
        <h3 className="text-light">
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Web Developer',1600,
          'UI/UX Designer',1600,
          'Blogger',1600,
        ]}
        />
        </h3>
        <CTA />
        <Social />
        <div className="me">
          <img src="" alt="" />
        </div>

        <div className="side">
          <a href="#footer" className="scroll_down">
            Scroll Down
          </a>
          <a href="#footer" className="arrow">
            <BsArrowDown />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
