import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Tshirt = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://api.vannch.com/product/show`;

    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(16, 19);
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
      <Col
        lg={3}
        md={6}
        sm={10}
        className="my-2 mt-5 pt-2 pl-0 pr-0"
        key={index}
      >
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
      <Container className="browseContainer mt-5 pt-5">
        <Row>
          <h2 className="mb-3 ml-5">Shorts</h2>
        </Row>

        <Row>
          <div
            className=" mb-4 ml-5"
            style={{
              border: "2px solid #FFD401",
              height: "2px",
              width: "120px",
            }}
          ></div>
        </Row>

        <Row className="rowEvent">{showProduct}</Row>
      </Container>
    </div>
  );
};
export default Tshirt;
