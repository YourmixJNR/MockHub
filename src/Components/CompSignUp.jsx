import React from 'react'

const CompSignUp = () => {
  return (
    <section className="section section-signup">
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <h4>Get a free account</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
          <h4>Download the free software</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
          <h4>Push to the platform</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
        </div>
        <div className="col s12 m6">
          <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
            <form>
              <div className="input-field">
                <input type="text" id="first_name" />
                <label>First Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="last_name" />
                <label>Last Name</label>
              </div>
              <div className="input-field">
                <input type="email" id="email" />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" />
                <label>Password</label>
              </div>
              <div className="input-field">
                <input type="text" id="company" />
                <label>Company</label>
              </div>
              <input type="submit" value="Signup" className="btn btn-large purple btn-extend" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CompSignUp
