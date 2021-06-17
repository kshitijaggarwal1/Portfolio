import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./TechnicalSkills.css";

function TechnicalSkills() {
  config({ ssrFadeout: true });
  return (
    <Container id="TechnicalSkills" className="InterestsContainer" fluid>
      <Fade bottom>
        <Row className="heading_intro_text techSkils_heading">
          <Col lg={true}>
            <p className="introText">
              <span className="firstLetter">T</span>
              <span className="Heading">echnical Skills</span>
              <hr className="hrHeading" />
            </p>
          </Col>
        </Row>
        <Row className="main_content_Skills">
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">
                    Programming Languages
                  </Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar variant="success" now={98} label="C++" />
                  <br />
                  <ProgressBar variant="success" now={98} label="C" />
                  <br />
                  <ProgressBar variant="success" now={75} label="Python" />
                  <br />
                  <ProgressBar variant="success" now={30} label="Java" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">
                    Frontend Web Development
                  </Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar variant="success" now={100} label="HTML" />
                  <br />
                  <ProgressBar variant="success" now={95} label="CSS" />
                  <br />
                  <ProgressBar variant="success" now={80} label="Javascript" />
                  <br />
                  <ProgressBar variant="success" now={100} label="Bootstrap" />
                  <br />
                  <ProgressBar variant="success" now={75} label="ReactJS" />
                  <br />
                  <ProgressBar variant="success" now={100} label="NPM" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">Databases</Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar variant="success" now={80} label="MySQL" />
                  <br />
                  <ProgressBar variant="success" now={20} label="MongoDB" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">Data Science</Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar variant="success" now={60} label="Numpy" />
                  <br />
                  <ProgressBar variant="success" now={65} label="Pandas" />
                  <br />
                  <ProgressBar variant="success" now={40} label="Matplotlib" />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={75}
                    label="Web Scrapping"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">
                    Other Softwares
                  </Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar
                    variant="success"
                    now={90}
                    label="Microsoft Office Suite"
                  />
                  <br />
                  <ProgressBar variant="success" now={78} label="Git" />
                  <br />
                  <ProgressBar variant="success" now={20} label="MATLAB" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="next_row" md={6} lg={6} xl={4}>
            <Card className="card_main">
              <Card.Body className="card_body">
                <center>
                  <Card.Title className="card_title">
                    Other Packages &amp; Libraries
                  </Card.Title>
                </center>
                <Card.Text className="card_text">
                  <ProgressBar variant="success" now={50} label="SkLearn" />
                  <br />
                  <ProgressBar variant="success" now={70} label="Paper.js" />
                  <br />
                  <ProgressBar variant="success" now={50} label="Streamlit" />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={100}
                    label="FontAwesome"
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={100}
                    label="Google-fonts"
                  />
                  <br />
                  <ProgressBar variant="success" now={100} label="Ant Design" />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={80}
                    label="React Reveal"
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={100}
                    label="Simple Icons"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default TechnicalSkills;
