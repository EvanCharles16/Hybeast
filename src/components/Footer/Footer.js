import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="mt-5 pt-4 pb-4">
            <Col md={4} sm={12} className="text-center">
              <h5>Contact Us</h5>
              <hr className="border" />
              <p>Phone Number</p>
              <p>Email</p>
              <p>Address</p>
              <p>Capital City</p>
            </Col>
            <Col md={4} sm={12} className="text-center">
              <h5>Our Hours</h5>
              <hr className="border" />
              <p>Monday-Thursday</p>
              <p>Friday-Saturday</p>
              <p>Sunday</p>
            </Col>
            <Col md={4} sm={12} className="text-center">
              <h5>Service Area</h5>
              <hr className="border" />
              <p>City,State,0000</p>
              <p>City,State,0000</p>
              <p>City,State,0000</p>
              <p>City,State,0000</p>
            </Col>
          </Row>

          <hr className="border" />

          <Row>
            <Col md={{ offset: 4, span: 4 }}>
              <h4 className="text-center">@Hybeast 2020</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
