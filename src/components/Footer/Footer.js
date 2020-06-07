import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoFooter from "../../image/Hybeast.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="text-center">
            <Col md={4} sm={12}>
              <div className="mt-5">
                <Link to="/">
                  <img
                    src={logoFooter}
                    alt="logo"
                    className="mx-auto d-block mb-3 logoFooter"
                  />
                </Link>
                <p className="text-wheat-50 text-center">
                  Hybeast is a clothing-retail company known for its
                  fast-fashion clothing for teenagers.
                </p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="mt-5 pt-5  text-center">
                <Link to="/about" className="footerNav">
                  <h5>About Us</h5>
                </Link>
                <Link to="/contact" className="footerNav">
                  <h5>Contact Us</h5>
                </Link>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="text-left mt-5 pt-3">
                <h5>
                  <b>Subscribe to our Newsletter</b>
                </h5>
                <h6>Get Notification for new Events or Offers</h6>
                <Form inline className="mx-auto mt-3 mb-3">
                  <FormControl
                    type="text"
                    placeholder="Enter your email here"
                    className="formInput"
                  />
                  <Button variant="primary" className="buttonSubscribe ml-2">
                    SUBSCRIBE
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>

          <Row className="mt-4 mb-4">
            <Col>
              <h4 className="text-center">
                <h4 className="text-center">Follow Us For More Information </h4>

                <a
                  href="https://wa.me/6281234567890"
                  target="blank"
                  className="social-media"
                >
                  <i className="fab fa-whatsapp fa-2x mr-3"></i>
                </a>
                <a
                  href="https://www.instagram.com/hybeast.clothing/?hl=id"
                  target="blank"
                  className="social-media"
                >
                  <i className="fab fa-instagram fa-2x "></i>
                </a>
              </h4>
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
