import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { BackTop } from "antd";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";
import Interests from "./Components/Interests";
import Experience from './Components/Experience';
import TechnicalSkills from "./Components/TechnicalSkills";
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <BackTop>
        <strong>
          {" "}
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="site-back-top-basic"
          />{" "}
        </strong>
      </BackTop>
      <Header />
      <Introduction />
      <AboutMe />
      <Experience/>
      <Interests />
      <TechnicalSkills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
