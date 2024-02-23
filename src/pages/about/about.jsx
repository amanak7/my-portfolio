import React from "react";
import "./about.css";
import Aboutimg from "../../assets/dp2.jpg";
import { FaDotCircle, FaDownload } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import Items from "../../component/items";
import Skill from "../../component/skill";
const About = () => {
  return (
    <main id="about">
      <div className="about">
        <h1 className="about__heading">About</h1>
        <div className="about__content">
          <div className="detail">
            <span className="subheading">Personal Info</span>
            <Items />
            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <img src={Aboutimg} alt="" className="about__img" />
        </div>
      </div>

      <div className="separator"></div>

      <section className="skill">
        <h1 className="skill__heading">My Skills</h1>
        <div className="skill__container">
          {" "}
          <Skill />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h1 className="edu__heading">Education</h1>
        <div className="collage">
          <h1>Indian Institute of Technology (ISM) Dhanbad</h1>

          <span>
            B.Tech in Mechanical Engineering <FaDotCircle /> Nov 2022 - May 2026
          </span>
          <span>CGPA - 8.51</span>
        </div>

        <div className="collage">
          <h1>Satya's The Aryan School</h1>

          <span>
            PCM with Physical Education <FaDotCircle /> April 2019 - July 2021
          </span>
          <span>Scored : 92.60%</span>
        </div>
      </section>
    </main>
  );
};

export default About;
