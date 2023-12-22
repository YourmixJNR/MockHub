import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div>
      {/* <!-- Section: Solutions About --> */}
      <section className="section section-solutions-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <h2>What We Do...</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                corporis autem assumenda sed labore quo facere dolorum suscipit,
                fuga quam sequi id quaerat, perferendis unde quos soluta
                incidunt nostrum voluptatum?
              </p>
            </div>
            <div className="col s12 m6 offset-m1">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s4">
                      <Link to="#" className="purple-text">
                        Cloud Hosting
                      </Link>
                    </li>
                    <li className="tab col s4">
                      <Link to="#" className="purple-text">
                        Cloud Storage
                      </Link>
                    </li>
                    <li className="tab col s4">
                      <Link to="#" className="purple-text">
                        Cloud Database
                      </Link>
                    </li>
                  </ul>
                </div>
                <div id="tab1" className="col s12">
                  <h5>Cloud Hosting</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt cupiditate aspernatur aliquam nobis dolorum quae
                    assumenda nemo necessitatibus voluptates deserunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
