import React, { Component } from 'react';
import '../../styles/Portfolio.css';
import ProjectList from './ProjectList';

export default class PortfolioDashboard extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolioTitleContainer">
          <h1 className="portfolioTitle">Select Work</h1>
        </div>
        <ProjectList />
      </div>
    );
  }
}
