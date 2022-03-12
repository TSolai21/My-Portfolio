import React from "react";
import "./Form.css";
import img from "../../Assets/Form.jpg";
function Form() {
  return (
    <div className="Container">
      <div className="Form__img">
        <img src={img} alt="Form left image" />
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
