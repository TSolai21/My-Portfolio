import React from "react";
import "./Form.css";
function Form() {
  return (
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
  );
}

export default Form;
