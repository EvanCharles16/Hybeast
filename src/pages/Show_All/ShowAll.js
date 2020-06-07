import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";
import axios from "axios";

import Card from "../../components/Card/Card";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./../Home/Main/Main.css";
import "./ShowAll.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const params = new URLSearchParams(props.location.search);
  const searchQuery = params.get("search");

  // show data when user go to page
  useEffect(() => {
    const URL = `https://api.vannch.com/product/show`;
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
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

  useEffect(() => {
    const URL2 = `https://api.vannch.com/product/show?search=${searchQuery}`;

    axios
      .get(URL2)
      .then((res) => {
        setSearch(res.data);
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
  }, [searchQuery]);

  const showAllEvent = data.map((data) => {
    return (
      <Col
        key={data.id}
        lg={3}
        md={6}
        sm={12}
        className="my-2 mt-5 pt-2 pl-0 pr-0"
      >
        <Card item={data} />
      </Col>
    );
  });

  const showAllSearch = search.map((data) => {
    return (
      <Col
        key={data.id}
        lg={3}
        md={6}
        sm={12}
        className="my-2 mt-5 pt-2 pl-0 pr-0"
      >
        <Card item={data} />
      </Col>
    );
  });

  const showAll = searchQuery ? showAllSearch : showAllEvent;

  return (
    <div>
      <Navbar />
      <Container className="mt-5 pt-3">
        <Row>
          <Col>
            <h2 className="text-center">DISCOVER EVENTS</h2>
            <div className="underlineShowAll mx-auto "></div>
          </Col>
        </Row>

        {/* New Feature : Add Search bar for ShowAll Product */}

        <Container>
          <Row className="rowEvent mb-5">{showAll}</Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default ShowAll;
