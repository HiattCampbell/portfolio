import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

export default function Nav() {
  return (
    <div>
      <nav className="nav-container">
        <Link className="nav-link logo" href="" to={`/`}>
          <h2 className="logo">Hiatt Campbell</h2>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="" to={`/about`}>
            About
          </Link>
          <Link className="nav-link" href="" to={`/portfolio`}>
            Portfolio
          </Link>
          <Link className="nav-link" href="" to={`/contact`}>
            Contact
          </Link>
        </div>
        <div className="burger-container">
          <Menu right>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
