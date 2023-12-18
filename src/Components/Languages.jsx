import React from "react";

const Languages = () => {
  return (
    // <!-- Section: Languages -->
    <section className="section section-language grey lighten-4">
      <div className="container">
        <div className="row">
          <h4 className="center">
            Work With
            <span className="deep-purple-text text-darken-1"> Any Language</span>
          </h4>
          <br />
          <br />
          <div className="row">
            <div className="col s2">
              <img src="/Images/python-logo.png" className="responsive-img" alt="" />
            </div>
            <div className="col s2">
              <img src="/Images/ruby-logo.png" className="responsive-img" alt="" />
            </div>
            <div className="col s2">
              <img src="/Images/php-logo.png" className="responsive-img" alt="" />
            </div>
            <div className="col s2">
              <img src="/Images/node-logo.png" className="responsive-img" alt="" />
            </div>
            <div className="col s2">
              <img src="/Images/c-sharp-logo.png" className="responsive-img" alt="" />
            </div>
            <div className="col s2">
              <img src="/Images/java-logo.png" className="responsive-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
