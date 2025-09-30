import { Component } from 'react';
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
              Hiatt is a Software Developer based in the Greater Seattle Area, blending a creative vision with technical expertise. In her recent role, she played a pivotal part in developing, maintaining, and optimizing a marketing website. Beyond front-end development, her computer science background has strengthened her skills in algorithms, data structures, and systems programming, preparing her to tackle complex software challenges. Proficient in C++, Python, SQL, and JavaScript/TypeScript, with experience designing and integrating RESTful APIs, building database-driven applications, and working with backend frameworks, she brings a detail-oriented and problem-solving mindset to every project.
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
