import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#Introduction">
        <img className="nameLogo" src="favicon.ico" alt="K" />
        SHITIJ
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#About" className="Navbar-link">
            &nbsp;&nbsp;About&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#Experience" className="Navbar-link">
            &nbsp;&nbsp;Experience&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#Interests" className="Navbar-link">
            &nbsp;&nbsp;Interests&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#TechnicalSkills" className="Navbar-link">
            &nbsp;&nbsp;Skills&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#Projects" className="Navbar-link">
            &nbsp;&nbsp;Projects&nbsp;&nbsp;
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#Contact" className="Navbar-link">
            &nbsp;&nbsp;Contact&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link
            href="KshitijAggarwal_SDE_Resume.pdf"
            download="KshitijAggarwal_Resume"
            className="ResumeDownloadButton"
          >
            <Button variant="outline-success" className="ResumeDownloader">
              Resume&nbsp;
              <FontAwesomeIcon icon={faArrowDown} />
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
