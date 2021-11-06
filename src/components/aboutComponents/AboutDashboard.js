import React, { Component } from "react";
import profileImg from "../../images/profileImg.jpg";
import { Link } from "react-router-dom";
import "../../styles/About.css";

export default class AboutDashboard extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutContainer">
          <div>
            <img
              className="headshot"
              src={profileImg}
              alt="Headshot of Hiatt"
            />
          </div>
          <div className="aboutTextContainer">
            <h1 className="aboutTitle">About</h1>
            <p>
              Hiatt Campbell is a full-stack web developer based in Seattle,
              Washington. Hiatt has her BA in Political Science and
              International Relations from the University of California, Davis.
              In addition to her Bachelors, Hiatt recently received a
              certificate in Full-Stack Web Development with JavaScript from the
              University of Washington.
            </p>
            <p>
              Hiatt is currently accepting freelance clients for Front-End and
              Full-Stack web development.
            </p>
          </div>
        </div>
        <button className="connectButton">
          <Link className="connectLink" href="" to={`/contact`}>
            <p className="connectLink">Connect</p>
          </Link>
        </button>
      </div>
    );
  }
}
