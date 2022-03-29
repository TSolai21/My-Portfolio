import React from "react";
import "./Form.css";
function Form() {
  return (
    <div className="Container">
      <div className="Form__contact">
        <h1 className="Contact__tittle">my Contacts</h1>
        <div className="Contact__address">
          <h2 className="head">address</h2>
          <h2 className="subhead">
            1/36 South Street, <br /> Rajavinkovil, <br /> Thoothukudi-628402
          </h2>
        </div>
        <div className="Contact__phone">
          <h2 className="head">phone</h2>
          <h2 className="subhead"> +91-9629192376</h2>
        </div>
        <div className="Contact__email">
          <h2 className="head">email</h2>
          <h2 className="subhead">solaikumar.t@gmail.com</h2>
        </div>
      </div>
      <div id="Form">
        <h1> Quick Contact Form</h1>
        <label htmlFor="Username">Name</label>
        <input id="Username" type="text" placeholder="Enter your name"></input>
        <label htmlFor="Email">Email</label>
        <input id="Email" type="email" placeholder="Enter your email"></input>
        <label htmlFor="Msg">Message</label>
        <textarea id="Msg" placeholder="Message"></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </div>
    </div>
  );
}

export default Form;
