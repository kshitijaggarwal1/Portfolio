import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCode,
  faGuitar,
  faSwimmer,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import {
  Hackerrank,
  Codeforces,
  Codechef,
  Hackerearth,
  Leetcode,
} from "@icons-pack/react-simple-icons";
import "./Interests.css";

function Interests() {
  config({ ssrFadeout: true });
  return (
    <Container id="Interests" className="InterestsContainer" fluid>
      <Fade bottom>
        <Row className="heading_intro_text">
          <Col lg={true}>
            <p className="introText">
              <span className="firstLetter">I</span>
              <span className="Heading">nterests</span>
              <hr className="hrHeading" />
            </p>
          </Col>
        </Row>

        <Row className="main_content_Interests">
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="cardMain">
              <Card.Body className="cardBody">
                <FontAwesomeIcon icon={faLaptop} className="cardIcons" />
                <center>
                  <Card.Title className="cardTitle">
                    Software Development
                  </Card.Title>
                </center>
                <Card.Text className="cardText">
                  <hr className="cardHr" />
                  Aims to improve the quantity and quality of technologies in
                  the pre-exisiting technical stack that aids in developing the
                  production-ready softwares.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="cardMain">
              <Card.Body className="cardBody">
                <FontAwesomeIcon icon={faCode} className="cardIcons" />
                <center>
                  <Card.Title className="cardTitle">
                    Competitive Programming
                  </Card.Title>
                </center>
                <Card.Text className="cardText">
                  <hr className="cardHr" />
                  A sport programmer with a decent mathematical aptitude. Varios
                  platforms where I practice the same:
                  <br />
                  <ul className="interestsIcons">
                    <li>
                      <Codeforces
                        className="myLinks-elements"
                        onClick={() =>
                          window.open(
                            "https://codeforces.com/profile/kshitijaggarwal1",
                            "_blank"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Codechef
                        className="myLinks-elements"
                        onClick={() =>
                          window.open(
                            "https://www.codechef.com/users/kaggarwal1",
                            "_blank"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Hackerrank
                        className="myLinks-elements"
                        onClick={() =>
                          window.open(
                            "https://www.hackerrank.com/kshitijaggarwal2",
                            "_blank"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Hackerearth
                        className="myLinks-elements"
                        onClick={() =>
                          window.open(
                            "https://www.hackerearth.com/@kshitijaggarwal1",
                            "_blank"
                          )
                        }
                      />
                    </li>
                    <li>
                      <Leetcode
                        className="myLinks-elements-last"
                        onClick={() =>
                          window.open(
                            "https://leetcode.com/kshitijaggarwal1/",
                            "_blank"
                          )
                        }
                      />
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="cardMain">
              <Card.Body className="cardBody">
                <FontAwesomeIcon icon={faGuitar} className="cardIcons" />
                <center>
                  <Card.Title className="cardTitle">Music</Card.Title>
                </center>
                <Card.Text className="cardText">
                  <hr className="cardHr" />
                  Passionate about playing guitar and listening music. It
                  relieves me in the time of stress and improves the efficiency
                  in work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="cardMain">
              <Card.Body className="cardBody">
                <FontAwesomeIcon icon={faSwimmer} className="cardIcons" />
                <center>
                  <Card.Title className="cardTitle">Swimming</Card.Title>
                </center>
                <Card.Text className="cardText">
                  <hr className="cardHr" />
                  My love for swimming hepled me gain certain styles and strokes
                  such as Freestyle, Backstroke, Breaststroke, and Butterfly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="cardMain">
              <Card.Body className="cardBody">
                <FontAwesomeIcon icon={faRoute} className="cardIcons" />
                <center>
                  <Card.Title className="cardTitle">Travelling</Card.Title>
                </center>
                <Card.Text className="cardText">
                  <hr className="cardHr" />
                  It helps to not only explore and gain experiences, but also in
                  inventing ideas that I try to implement in daily life.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Interests;
