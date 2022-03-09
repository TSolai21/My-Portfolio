import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div id="Footer">
      <h3>solaikumar.t@gmail.com</h3>
      <h3>+919629192376</h3>
      <ul className="Social__links">
        <li className="Social__links--item1">
          <a className="Social__link" href="#">
            <BsGithub size={25} className="hover" />
          </a>
        </li>
        <li className="Social__links--item1">
          <a className="Social__link" href="#">
            <AiFillLinkedin size={25} className="hover" />
          </a>
        </li>
        <li className="Social__links--item1">
          <a className="Social__link" href="#">
            <BsInstagram size={25} className="hover" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
