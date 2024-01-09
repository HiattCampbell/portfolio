import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navContainer">
          <Link className="navLink logo" href="" to={`/`}>
            <h2>Hiatt Campbell</h2>
          </Link>
          <div className="navLinks">
            <Link className="navLink" href="" to={`/about`}>
              About
            </Link>
            <Link className="navLink" href="" to={`/portfolio`}>
              Portfolio
            </Link>
            <Link className="navLink" href="" to={`/contact`}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
