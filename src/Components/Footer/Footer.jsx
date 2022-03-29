import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import logo from "../../Assets/sk-logo.png";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div id="Footer">
      <Link to="Header" smooth={true} duration={500} className="logo">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul className="Social__links">
        <li className="Social__links--item1">
          <a className="Social__link" href="https://github.com/TSolai21">
            <BsGithub size={25} className="hover" />
          </a>
        </li>
        <li className="Social__links--item1">
          <a
            className="Social__link"
            href="https://www.linkedin.com/in/solaikumart21/"
          >
            <AiFillLinkedin size={25} className="hover" />
          </a>
        </li>
        <li className="Social__links--item1">
          <a
            className="Social__link"
            href="https://www.instagram.com/solaikumar.t/"
          >
            <BsInstagram size={25} className="hover" />
          </a>
        </li>
      </ul>
      <h2 className="text">copyright-2022 developed by solaikumar</h2>
    </div>
  );
}

export default Footer;
