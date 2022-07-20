import React, { Component } from "react";
import "./About.css";
import profileImage from "../assets/javier_arango.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profileImage}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Javier Arango</div>
            <div className="brief_description">
              I am a third-year Computer Science undergraduate student at the
              University of Florida. Currently learning new technologies and
              getting ideas to start new projects. Looking for opportunities to
              join current or new projects to gain experience as a Software
              Engineer and improve my programing skills.
              <br /> <br />I enjoy working with new people and learning new
              skills along the way. Skills/Interests: Java, C++, Python, SQL,
              HTML, CSS, JavaScript, React, Machine Learning.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
