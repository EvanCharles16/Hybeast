import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardDeck,
  Form,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import "../Main/Main.css";

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import Trend from "../Trend/Trend";
import Category from "./../Category/Category";

const Main = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    const { search } = values;
    history.push({
      pathname: "/showAll",
      search: `?search=${search}`,
    });
  };
  useEffect(() => {
    const URL = `https://api.vannch.com/product/show`;

    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(0, 8);
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
          alert("Sorry we have server problem , Try again later.. ");
        }
      });
  }, []);

  const showProduct = data.map((item, index) => {
    const URL = `https://api.vannch.com/`;
    return (
      <Col lg={3} md={6} sm={10} className="my-2 mt-5 pt-2 pl-0 pr-0">
        <CardDeck>
          <Card
            border="secondary"
            className="main-card"
            id="mainCard"
            key={index}
          >
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
                to={`/event/${item.id}`}
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
      <Navbars />
      <Jumbotron fluid className="main-background">
        <Container className="pt-3 contQuotes">
          <h1 className="text-center mt-5 pt-3 mb-3 quotesLanding quotes1">
            ➤➤➤ The Difference between ➤➤➤
          </h1>
          <h1 className="text-center quotesLanding quotes2">
            "Style and Fashion is Quality."{" "}
          </h1>
          <Row>
            <Form
              inline
              className="mx-auto mt-5 pt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl
                type="text"
                placeholder="Search Product by Name or Category"
                className="mainInput"
                name="search"
                autoComplete="off"
                ref={register({ required: true })}
              />

              <i className="fa fa-search buttonSearch "></i>
            </Form>
          </Row>
        </Container>
      </Jumbotron>

      <Category />

      <Container className="browseContainer mt-5 pt-5">
        <Row>
          <h2 className="mb-4 ml-5 browseEve">PRODUCTS</h2>
        </Row>

        <Row>
          <div className="underlineMain mb-4 ml-5"></div>
        </Row>

        <Row className="rowEvent">{showProduct}</Row>

        <Row>
          <Col className="text-center mt-4 mb-3">
            <Link to="/showall" className="btn buttonMore mt-4 mb-4">
              <h5>Show More</h5>
            </Link>
          </Col>
        </Row>
      </Container>

      <Trend />
      <br />
      <Footer />
    </div>
  );
};

export default Main;
