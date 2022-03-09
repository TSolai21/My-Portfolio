import React from "react";
import "./Skills.css";
import { Link } from "react-scroll";
function Skills() {
  return (
    <div id="Skills">
      <h1 className="Skills__tittle">Skills</h1>
      <div className="Skills">
        <div className="Skill">
          <h2>Html</h2>
        </div>
        <div className="Skill">
          <h2>Css</h2>
        </div>
        <div className="Skill">
          <h2>Js</h2>
        </div>
        <div className="Skill">
          <h2>React</h2>
        </div>
      </div>
      <div className="button">
        <Link to="FormContainer" smooth={true} duration={500} className="btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Skills;
