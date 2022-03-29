import React from "react";
import img2 from "../../Assets/solai.jpg";
import "./Aboutme.css";
import Resume from "../../Assets/solaikumar.pdf";
function Aboutme() {
  return (
    <div id="Aboutme">
      <div className="Aboutme__top">
        <h2 className="Aboutme__tittle">Who I am</h2>
        <div className="Aboutme__line"></div>
        <p className="Aboutme__subtittle">
          My name is Solaikumar I'm a Front End Engineer located in India. I
          describe myself as a passionate developer who loves the web platform
          ❤️. In my free time you can find me at the gym 🏋️‍♂️
        </p>
        <div className="resume">
          <a href={Resume} download className="click">
            Download Cv
          </a>
        </div>
      </div>
      <div className="Aboutme__bottom">
        <img src={img2} alt="solai second img" />
      </div>
    </div>
  );
}

export default Aboutme;
