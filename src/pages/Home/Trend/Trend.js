import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  Card,
  CardDeck,
} from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

import "./Trend.css";

const Trend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://api.vannch.com/`;

    axios
      .get(`${URL}product/show`)
      .then((res) => {
        const data = res.data.slice(1, 5);
        setData(data);
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          alert(err.response.data.message);
        } else {
          alert("Sorry we have server problem , Please wait.. ");
        }
      });
  }, []);

  const showTrend = data.map((item, index) => {
    const URL = `https://api.vannch.com/`;
    return (
      <Col lg={3} md={6} sm={10} className="my-2 mt-5 pt-2 pl-0 pr-0">
        <CardDeck>
          <Card border="secondary" className="trendCard mr-5" key={index}>
            <div style={{ borderTop: "1px solid black" }}></div>
            <Card.Img
              variant="top"
              src={`${URL}${item.imageProduct}`}
              alt="imageProduct"
            />
            <div style={{ borderTop: "1px solid black" }}></div>
            <Card.Body className="mainBody bg-white">
              <Card.Text>{item.name}</Card.Text>
              <Card.Text>Category : {item.category}</Card.Text>
              <Card.Text>Rp.{item.price}</Card.Text>
              <Link
                // to={`/event/${item.id}`}
                to="#"
                className="btn btn-outline-dark btn-block"
              >
                Add to Cart
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    );
  });

  return (
    <div>
      <Jumbotron fluid className="trend-background">
        <Container className="containerHost">
          <h1 className="mb-4 hostEvent">Sell Your Own Products</h1>
          <Form inline>
            <Link to="/product/create">
              <Button className="buttonCreate both-line-light mx-auto">
                Create Products
              </Button>
            </Link>
          </Form>
        </Container>
      </Jumbotron>

      <Container className="mb-5">
        <Row>
          <h2 className="mb-2 mt-5 ml-5">BEST SELLER</h2>
        </Row>
        <Row>
          <div className="underlineTrend mb-2 ml-5"></div>
        </Row>

        <Row className="rowEvent rowTrend">{showTrend}</Row>
      </Container>
    </div>
  );
};

export default Trend;
