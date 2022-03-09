import React from "react";
import img1 from "../../Assets/intro1.png";
import "./Intro.css";
function Intro() {
  return (
    <div id="Intro">
      <div className="Intro__right">
        <h1 className="Intro__tittle">
          hi,Iam <br /> <strong>Solai Kumar</strong>
        </h1>
        <p className="Intro__subtittle">Front-end dev</p>
      </div>
      <div className="Intro__left">
        <img src={img1} alt=" solai" />
      </div>
    </div>
  );
}

export default Intro;
