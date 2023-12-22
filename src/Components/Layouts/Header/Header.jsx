import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    // <!-- Header -->
    <header className="main-header">
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              MockHub
            </Link>
            <Link to="#" data-activates="mobile-nav" className="button-collapse">
              <i className="fa fa-bars"></i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link className="active-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="#" className="btn purple modal-trigger">
                  Login
                </Link>
              </li>
              <li>
                <Link to="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <h4 className="purple-text text-darken-4 center">MockHub</h4>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-home grey-text text-darken-4"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/solutions">
                  <i className="fa fa-cog grey-text text-darken-4"></i> Solutions
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <i className="fa fa-users grey-text text-darken-4"></i> Sign Up
                </Link>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <Link to="#" className="btn purple">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
