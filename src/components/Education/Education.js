import React from "react";
import "./Education.css";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <section id="education">
      <div className="container edu_container">
        <h5 className="top_text">Get to know</h5>
        <h2> My Education</h2>
        <div className="edu_cards">
          <article className="edu_card cart1">
            <FaSchool className="edu_icon" />
            <h5 className="text-light hello">Secondery,Jagadbandhu Institution,Kolkata</h5>
            <p>Parcentage 65%</p>
            <h7>Passing Year-March,2016</h7>
          </article>

          <article className="edu_card cart2">
            <FaSchool className="edu_icon" />
            <h5 className="text-light">Higher Secondery,Jagadbandhu Institution,Kolkata</h5>
            <p>Parcentage 59%</p>
            <h7>Passing Year-june,2018</h7>
          </article>

          <article className="edu_card cart3">
            <MdSchool className="edu_icon" />
            <h5 className="text-light">Bsc,Computer Science,New Alipore College,Kolkata</h5>
            <p>CGPA 7.50</p>
            <h7>Passing Year-July,2022</h7>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
