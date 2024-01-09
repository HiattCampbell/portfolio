import React, { Component } from 'react';
import githubLogo from '../../images/github-logo.png';
import '../../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <a className="github-link" href="https://github.com/HiattCampbell">
          <img className="github-img" src={githubLogo} alt="Github" />
        </a>
      </div>
    );
  }
}
