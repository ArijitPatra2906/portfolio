import React from "react";
import "./About.css";
import { AiFillProject } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5 className="top_text">Get to know</h5>
      <h2 className="about_1">About me</h2>
      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdSchool className="about_icon" />
              <h5>Education</h5>
              <small>Graduate in Bsc(CMSA) </small>
            </article>

            <article className="about_card basic">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> 1.5 years working</small>
            </article>
            <article className="about_card normal">
              <AiFillProject className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p className="about">
            Hi! My name is Arijit Patra.I am a Web Developer and I'm very
            passionate and dedicated to my work.I have acquired the skills and
            knowledge necessary to make your project a success. I enjoy every
            step of the design process from discussion and collaboration.
            
          </p>
          <a href="#contact" className="btn btn-primary lets-talk">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
