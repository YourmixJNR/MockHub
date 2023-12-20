import React from "react";
import { Link } from "react-router-dom";
import './Podcasts.css'

const Podcasts = () => {
  return (
    <section className="section section-podcast white-text">
      <div className="primary-overlay valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <h4>Listen to the Quazzu Podcast</h4>
              <p>Every Thursday at 5pm EST</p>
            </div>
            <div className="col s12 m4">
              <Link to="#" className="btn purple btn-large">
                <i className="fa fa-podcast"></i> Listen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
