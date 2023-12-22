import React from "react";
import CallSignUp from "./CallSignUp";

const Features = () => {
  return (
    <section class="section section-features grey lighten-3">
      <div class="container">
        <h4 class="purple-text text-darken-1 center">Powerful & Innovative</h4>
        <h6 class="grey-text text-darken-2 center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          eligendi?
        </h6>
        <br />
        <br />
        {/* <!-- Row 1 --> */}
        <div class="row">
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-user"></i> Unlimited Users
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-database"></i> Scalable Data
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-chart-line"></i> Data Analytics
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
        </div>

        {/* <!-- Row 2 --> */}
        <div class="row">
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-github"></i> Github Integration
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-plus"></i> Add-ons
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
          <div class="col s12 m4">
            <h5>
              <i class="fa fa-hdd"></i> Smart Storage
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deserunt quo ipsum beatae rerum consequuntur maiores voluptates
              adipisci quaerat sint.
            </p>
          </div>
        </div>
        <CallSignUp />
      </div>
    </section>
  );
};

export default Features;
