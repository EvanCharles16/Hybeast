import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./About.css";

import calender from "../../image/calender.png";

import contact from "../../image/about/contact.jpg";
import host from "../../image/about/host.jpg";
import event from "../../image/about/event.jpg";

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
                    borderBottom: "3px solid #ffc205",
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
              <img src={calender} alt="calender" className="calender-img" />
            </Col>
          </Row>
        </Container>

        <Container className="mb-5 pb-3 mt-4 ">
          <Row>
            <Col md={4} sm={12}>
              <div className="photo-grid">
                <div className="grid-item">
                  <Link to="/event/create">
                    <figure>
                      <img src={host} height="100%" width="100%" alt="host" />
                      <figcaption>
                        <p>Organize an Event</p>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="photo-grid">
                <div className="grid-item">
                  <Link to="/">
                    <figure>
                      <img src={event} height="100%" width="100%" alt="event" />
                      <figcaption>
                        <p>Find your next Experience</p>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="photo-grid">
                <div className="grid-item">
                  <Link to="/contact">
                    <figure>
                      <img
                        src={contact}
                        height="100%"
                        width="100%"
                        alt="contact"
                      />
                      <figcaption>
                        <p>Contact Us for more Information</p>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default About;
