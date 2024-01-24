import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeLinks extends Component {
  render() {
    return (
      <div className="home-links">
        <Link className="home-link" href="" to={`/portfolio`}>
          <h1>Portfolio</h1>
        </Link>
        <Link className="home-link" href="" to={`/about`}>
          <h1>About</h1>
        </Link>
        <Link className="home-link" href="" to={`/contact`}>
          <h1>Contact</h1>
        </Link>
      </div>
    );
  }
}
