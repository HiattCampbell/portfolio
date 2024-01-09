import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeLinks extends Component {
  render() {
    return (
      <div className="homeLinks">
        <Link className="homeLink" href="" to={`/portfolio`}>
          <h1>Portfolio</h1>
        </Link>
        <Link className="homeLink" href="" to={`/about`}>
          <h1>About</h1>
        </Link>
        <Link className="homeLink" href="" to={`/contact`}>
          <h1>Contact</h1>
        </Link>
      </div>
    );
  }
}
