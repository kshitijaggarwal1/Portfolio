import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faExternalLinkAlt,
  faEyeDropper,
  faPizzaSlice,
  faSimCard,
  faSpellCheck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Tabs } from "antd";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Projects() {
  config({ ssrFadeout: true });
  const { TabPane } = Tabs;
  return (
    <Container id="Projects" className="ProjectsContainer" fluid>
      <Fade bottom>
        <Row className="heading_intro_text">
          <Col lg={true}>
            <p className="introText">
              <span className="firstLetter">P</span>
              <span className="Heading">rojects</span>
              <hr className="hrHeading" />
            </p>
          </Col>
        </Row>

        <Row className="main_content_Experience main_content_project">
          <Col className="next_row">
            <Tabs
              defaultActiveKey="1"
              size="large"
              centered
              className="tab_header"
            >
              <TabPane
                tab="Data structures &amp; Algorithms"
                key="1"
                className="tab_header_value"
              >
                <Row className="main_content_Interests">
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faSpellCheck}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            Auto-Termination
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          This project is based on the very known feature of
                          Auto-completion which is used my nearly all the
                          softwares and websites in today's world. Search,
                          Insertion &amp; Deletion of words is totally supported
                          in this project.Project is desgnied using Tries in
                          C++.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/Text-Auto-Termination",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faSimCard}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            SIM Management System
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          It is a mini project built using C programming
                          language that clearly defines the working and
                          functions of different features in the SIM company
                          using various data structures like linked list, stack
                          &amp; queue.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/SIM-database-management-system",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab="Frontend Development"
                key="2"
                className="tab_header_value"
              >
                <Row className="main_content_Interests">
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faEyeDropper}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            Brain Traning RGB Game
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          It is a quiz desgined to improve the detection of RGB
                          code of a particular color by a human. Designed
                          keeping in mind the advantage of color codes in
                          Front-end programming.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/Brain-Training-RGB-Game",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            Personal Portfolio
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          The website you are currently on is the same portfolio
                          designed using ReactJs.
                          <br />
                          It is designed on the hackerRank theme just made in
                          dark mode.
                          <br />
                          Hope you like it.
                        </Card.Text>
                      </Card.Body>
                      {/* I have to provide the github link once placed on the same */}
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() => window.open("https://github.com/kshitijaggarwal1/Portfolio", "_blank")}
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon icon={faClone} className="cardIcons" />

                        <center>
                          <Card.Title className="cardTitle">
                            Patatap Clone
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          Desgined using specific javacript library to create a
                          clone to the website. Here, even on a click, touch, or
                          keypress, various animations and sounds could be
                          visualised and heard.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/Patatap-Clone",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Data Science" key="3" className="tab_header_value">
                <Row className="main_content_Experience">
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faUtensils}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            Foodie Junction
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          It is an automated Instagram Bot desgined using web
                          scraping in Selenium. Instead of SAMPLE USERNAME &amp;
                          SAMPLE PASSWORD, just fill in your credentials to
                          explore some interesting facts about FOOD. Gives a
                          call to al foodies out there.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/Foodie-Junction",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="next_row" md={6} lg={6} xl={4}>
                    <Card className="cardMain card_project">
                      <Card.Body className="cardBody">
                        <FontAwesomeIcon
                          icon={faPizzaSlice}
                          className="cardIcons"
                        />
                        <center>
                          <Card.Title className="cardTitle">
                            Zomato: Data-Extraction
                          </Card.Title>
                        </center>
                        <Card.Text className="cardText">
                          <hr className="cardHr" />
                          This project is used to extract data from the Zomato
                          API using OAuth2 with the python scripts. It can be
                          used to dsiplay restaurants; their views, comments and
                          ratings that can help user to ease their selection
                          process. It also establishes the populaity of company
                          in country.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className="CompanyDescBack github_link_button"
                        onClick={() =>
                          window.open(
                            "https://github.com/kshitijaggarwal1/Zomato---Data-Extraction",
                            "_blank"
                          )
                        }
                      >
                        Visit &nbsp;
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="visitLinkIcon"
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Projects;
