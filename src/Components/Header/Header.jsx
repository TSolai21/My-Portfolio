import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../Assets/sk-logo.png";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
function Header(props) {
  const [navbar, setnavbar] = useState(false);
  const toggle = () => setnavbar(!navbar);
  return (
    <div id="Header">
      <div className="Header__left">
        <Link
          to="IntroContainer"
          smooth={true}
          duration={500}
          className="header__logo"
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={navbar ? "Header__right active" : "Header__right"}>
        <Link to="IntroContainer" smooth={true} duration={500}>
          <FaHome size={35} />
        </Link>
        <Link to="AboutContainer" smooth={true} duration={500}>
          <BsFillPersonFill size={35} />
        </Link>
        <Link to="SkillsContainer" smooth={true} duration={500}>
          <MdHomeRepairService size={35} />
        </Link>
        <Link to="MyworkContainer" smooth={true} duration={500}>
          <FaProjectDiagram size={35} />
        </Link>
        <Link to="FormContainer" smooth={true} duration={500}>
          <MdContacts size={35} />
        </Link>
      </div>
      <div className="Header__menu">
        <div className="hamburger" onClick={toggle}>
          <div className="menu__line1"></div>
          <div className="menu__line2"></div>
          <div className="menu__line3"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
