import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer deep-purple lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About Us</h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ducimus, hic id quod enim voluptate{" "}
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" href="index.html">
                  Home 1
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" href="solutions.html">
                  Solutions
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" href="signup.html">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright deep-purple darken-1">
        <div className="container">
          Quazzu &copy; 2018
          <Link className="grey-text text-lighten-4 right" href="#!">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
