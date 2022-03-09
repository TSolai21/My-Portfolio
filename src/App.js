import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import IntroContainer from "./Components/IntroContainer/IntroContainer";
import SkillsContainer from "./Components/SkillsContainer/SkillsContainer";
import AboutContainer from "./Components/AbourContainer/AboutContainer";
import MyworkContainer from "./Components/MyworkContainer/MyworkContainer";
import FooterContainer from "./Components/FooterContainer/FooterContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <IntroContainer />
      <AboutContainer />
      <SkillsContainer />
      <MyworkContainer />
      <FormContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
