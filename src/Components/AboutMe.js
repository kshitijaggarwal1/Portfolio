import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import "./AboutMe.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe() {
  config({ ssrFadeout: true });
  return (
    <Container id="About" className="aboutMeContainer" fluid>
      <Fade bottom>
        <Row>
          <Col lg={true}>
            <p className="introText">
              <span className="firstLetter">A</span>
              <span className="Heading">bout</span>
              <hr className="hrHeading" />
            </p>
          </Col>
        </Row>
        <Row className="main_content_about_me">
          <Col xs={12} md={12} lg={5} className="imageContent">
            <Image src="aboutMePic.jpg" className="aboutMePic" thumbnail />
          </Col>
          <Col xs={12} md={12} lg={7}>
            <p className="introDescText">
              Hi there,
              <br />I am chasing perfection for inventing solutions to the
              real-world problems in the field of{" "}
              <span className="partText">technology</span> by <br />
              improving the pre-existing or creating the future{" "}
              <span className="partText">softwares</span>.<br />
              <br />
              Always ready to learn, explore &amp; connect.
              <br />
              <br />
              Belongs to a <span className="partText">
                business-background
              </span>{" "}
              family, hence persues its <br />
              knowledge as well.
              <br />
              <br />
              Could work efficiently under high-pressure and music along-side
              could make the word <br /> 'efficiently' as 'perfectly'.
              <br />
              <br />
              Your search for an{" "}
              <span className="partText">adventure-loving</span> guy ends
              here&#128513;
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default AboutMe;
