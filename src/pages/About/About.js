import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./About.css";

import logoAbout from "../../image/about/logo-about.png";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5 mb-3">
          <Row>
            <Col>
              <h2 className="text-center">About Us</h2>
              <div className="underlineAbout mx-auto"></div>
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={12}>
              <h3 className="about-top">
                What is{" "}
                <span
                  style={{
                    borderBottom: "3px solid #FFD401",
                    fontWeight: "bold",
                  }}
                >
                  Hybeast
                </span>
                ?
              </h3>
              <p className="text-justify about-text">
                Hybeast is a clothing-retail company known for its fast-fashion
                clothing for teenagers. For 5 years, Hybeast has been one of the
                world's leading fashion organization in asia, Hybeast cooperated
                with 7 countries in asia with over 300 stores operated under the
                various company brands. Don't admit that you are up-to-date if
                you don't know Hybeast, hybeast is officially made for those who
                are obsessed with everything that is up-to-date, especially for
                matters of appearance.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <img src={logoAbout} alt="logo" className="logo-about-img" />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default About;
