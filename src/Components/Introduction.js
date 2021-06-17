import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Jumbotron, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Introduction.css";

function Introduction() {
  return (
    <Jumbotron id="Introduction" className="introduction" fluid>
      <Container className="IntroContainer">    
        <h1 className="myName">Kshitij Aggarwal</h1>
        <h3 className="description">
          I'm a&nbsp;
          <ReactTypingEffect
            className="cursor_text"
            speeed="1"
            typingDelay="1"
            eraseSpeed="40"
            eraseDelay="700"
            text={[
              "Software Developer",
              "Sport Programmer",
              "Guitarist",
            ]}
            cursorRenderer={(cursor) => <h3 className="cursor">{cursor}</h3>}
            displayTextRenderer={(text, i) => {
              return (
                <h3>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span className="cursor_text" key={key} style={{ color: "#009945", fontWeight: 600, backgroundColor: "#e1c775" }}>
                        {char}
                      </span>
                    );
                  })}
                </h3>
              );
            }}
          />
        </h3>
        <ul className="myLinks">
          <li>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kshitijaggarwal1/",
                  "_blank"
                )
              }
              className="myLinks-elements"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() =>
                window.open("https://github.com/kshitijaggarwal1", "_blank")
              }
              className="myLinks-elements"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/kshitij.aggarwal.733",
                  "_blank"
                )
              }
              className="myLinks-elements"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              onClick={() =>
                window.open("https://www.instagram.com/k.sh.itij/", "_blank")
              }
              className="myLinks-elements-last"
            />
          </li>
        </ul>
      </Container>
    </Jumbotron>
  );
}

export default Introduction;
