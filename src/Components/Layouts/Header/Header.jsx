import React from "react";
import './Header.css'

const Header = () => {
  return (
    // <!-- Header -->
    <header className="main-header">
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              MockHub
            </a>
            <a href="#" data-activates="mobile-nav" className="button-collapse">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="active-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="solutions.html">Solutions</a>
              </li>
              <li>
                <a href="signup.html">Sign Up</a>
              </li>
              <li>
                <a href="#login-modal" className="btn purple modal-trigger">
                  Login
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <h4 className="purple-text text-darken-4 center">MockHub</h4>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a href="index.html">
                  <i className="fa fa-home grey-text text-darken-4"></i> Home
                </a>
              </li>
              <li>
                <a href="solutions.html">
                  <i className="fa fa-cog grey-text text-darken-4"></i> Solutions
                </a>
              </li>
              <li>
                <a href="signup.html">
                  <i className="fa fa-users grey-text text-darken-4"></i> Sign Up
                </a>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a href="#" className="btn purple">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
