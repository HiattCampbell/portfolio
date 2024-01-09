import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../images/profileImg.png';
import '../../styles/About.css';

export default class AboutDashboard extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutContainer">
          <div>
            <img className="headshot" src={profileImg} alt="Headshot of Hiatt" />
          </div>
          <div className="aboutTextContainer">
            <h1 className="aboutTitle">About</h1>
            <p>
              Hiatt is a Web Developer based in the Greater Seattle Area, blending a creative vision with technical expertise. In her recent role, she played a pivotal part in developing, maintaining,
              and optimizing a marketing website. Notably, she developed a React-based web application project that enhanced user experience significantly. Proficient in a range of technologies,
              including React, Javascript, and Typescript, and skilled in managing marketing communications through templating languages, such as Liquid Templating Language, she constantly seeks to
              merge innovation with functionality in her work.
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
