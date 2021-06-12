import React from "react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import "./Footer.css";
import { Jumbotron, Container, Table, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faPhoneAlt,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  config({ ssrFadeout: true });
  return (
    <Jumbotron id="Contact" className="FooterJumbotron" fluid>
      <Container className="FooterContainer">
        <Fade bottom>
          <Row>
            <Col className="footerCol" xs={12} md={6} lg={4} xl={4}>
              <h1>
                <img src="favicon.ico" className="FooterImage" alt="K" />
              </h1>
              <Table responsive="md" borderless="true">
                <tbody className="FooterTableBody">
                  <tr>
                    <th>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="FooterIcon"
                      />
                    </th>
                    <td>kshitijaggarwal1@gmail.com</td>
                  </tr>
                  <tr>
                    <th>
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="FooterIcon"
                      />
                    </th>
                    <td>(+91) - 9997688065</td>
                  </tr>
                  <tr>
                    <th>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="FooterIcon"
                      />
                    </th>
                    <td>
                      183 (new-232), Stone street, near Main Market <br />
                      Roorkee-247667, Uttarakhand <br />
                      India
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="footerCol" xl={4} lg={4} md={6}>
              <p className="FooterReachingText">
                Current Instituion: <br />
              </p>
              <Table responsive="md" borderless="true">
                <tbody className="FooterTableBody">
                  <tr>
                    <th>
                      <FontAwesomeIcon icon={faSchool} className="FooterIcon" />
                    </th>
                    <td>
                      Jaypee Institute of Information Technology&nbsp;{" "}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="visitLinkIcon"
                        onClick={() =>
                          window.open("https://www.jiit.ac.in/", "_blank")
                        }
                      />{" "}
                      <br />
                      A-10, Sector-62 <br />
                      Noida-201309, Uttar Pradesh <br />
                      India
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col className="footerCol" xl={4} lg={4} md={12}>
              <p className="FooterReachingText">
                Reach me out on:
                <br />
              </p>
              <ul className="myLinks FooterLinks">
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
                      window.open(
                        "https://github.com/kshitijaggarwal1",
                        "_blank"
                      )
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
                      window.open(
                        "https://www.instagram.com/k.sh.itij/",
                        "_blank"
                      )
                    }
                    className="myLinks-elements-last"
                  />
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={12} md={12} xl={12}>
              <hr className="FooterHr" />
              <p className="FooterCopyrightText">
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="FooterCopyrightIcon"
                />
                &nbsp;Kshitij Aggarwal: All rights reserved
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
