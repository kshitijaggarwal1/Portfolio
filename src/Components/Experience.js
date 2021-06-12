import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import "./Experience.css";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";

function Experience() {
  config({ ssrFadeout: true });
  return (
    <Container id="Experience" className="ExperienceContainer" fluid>
      <Fade bottom>
        <Row className="heading_intro_text">
          <Col lg={true}>
            <p className="introText Experience_heading">
              <span className="firstLetter">E</span>
              <span className="Heading">xperience</span>
              <hr className="hrHeading" />
            </p>
          </Col>
        </Row>
        <Row className="main_content_Experience">
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Accordion defaultActiveKey="1">
              <Card className="Experience_Card">
                <center>
                  <Card.Img
                    variant="top"
                    src="GSlogo.png"
                    className="experienceCardImage"
                  />
                </center>
                <Card.Body className="experience_card_body">
                  <Card.Title className="CompanyName">Goldman Sachs</Card.Title>
                  <Card.Text className="CompanyDesc">
                    Summer Intern
                    <br />
                    Jun 2021 - Jul 2021
                  </Card.Text>
                </Card.Body>
                <Card.Header>
                  <center>
                    <Accordion.Toggle
                      as={Button}
                      variant="Success"
                      eventKey="0"
                      className="togglerButton"
                    >
                      More Details
                    </Accordion.Toggle>
                  </center>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="CompanyDescBack">
                    To be known yet.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Accordion defaultActiveKey="1">
              <Card className="Experience_Card">
                <center>
                  <Card.Img
                    variant="top"
                    src="IITRLogo.png"
                    className="experienceCardImage"
                  />
                </center>
                <Card.Body className="experience_card_body">
                  <Card.Title className="CompanyName">IIT Roorkee</Card.Title>
                  <Card.Text className="CompanyDesc">
                    Software Developer Intern
                    <br />
                    Jul 2020 - Oct 2020
                  </Card.Text>
                </Card.Body>
                <Card.Header>
                  <center>
                    <Accordion.Toggle
                      as={Button}
                      variant="Success"
                      eventKey="0"
                      className="togglerButton"
                    >
                      More Details
                    </Accordion.Toggle>
                  </center>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="CompanyDescBack">
                    Designated as Frontend tech lead in designing of a hospital
                    website that aimed at collaborating doctors and patients
                    online. <br />
                    <br />
                    Technologies used: HTML, CSS, Javascript, Bootstrap, NPM
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Accordion defaultActiveKey="1">
              <Card className="Experience_Card">
                <center>
                  <Card.Img
                    variant="top"
                    src="CNlogo.png"
                    className="experienceCardImage"
                  />
                </center>
                <Card.Body className="experience_card_body">
                  <Card.Title className="CompanyName">
                    Coding Ninjas India
                  </Card.Title>
                  <Card.Text className="CompanyDesc">
                    Technical Content Developer Intern
                    <br />
                    May 2020 - Jul 2020
                  </Card.Text>
                </Card.Body>
                <Card.Header>
                  <center>
                    <Accordion.Toggle
                      as={Button}
                      variant="Success"
                      eventKey="0"
                      className="togglerButton"
                    >
                      More Details
                    </Accordion.Toggle>
                  </center>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="CompanyDescBack">
                    Created and designed the C++ and Python notes for various
                    Data structures and algorithms . I also invented various
                    problem statements for competitive Programming along with
                    upgradation of test cases to the pre-existing ones.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Accordion defaultActiveKey="1">
              <Card className="Experience_Card">
                <center>
                  <Card.Img
                    variant="top"
                    src="CNlogo.png"
                    className="experienceCardImage"
                  />
                </center>
                <Card.Body className="experience_card_body">
                  <Card.Title className="CompanyName">
                    Coding Ninjas India
                  </Card.Title>
                  <Card.Text className="CompanyDesc">
                    Teaching Assistant
                    <br />
                    Sep 2019 - Jan 2020
                  </Card.Text>
                </Card.Body>
                <Card.Header>
                  <center>
                    <Accordion.Toggle
                      as={Button}
                      variant="Success"
                      eventKey="0"
                      className="togglerButton"
                    >
                      More Details
                    </Accordion.Toggle>
                  </center>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="CompanyDescBack">
                    I was alloted a batch of 50+ students whose C++ programs and
                    doubts need to addressed timely along with maintaining the
                    sync with their project &amp; assignment evaluations.
                    Majority part of this job was debugging others' to obtain
                    the desired output.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Experience;
