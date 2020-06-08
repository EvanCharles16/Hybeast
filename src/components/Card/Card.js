import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";

const card = (props) => {
  const { item } = props;
  const URL = `https://api.vannch.com/`;

  return (
    <CardDeck>
      <Card border="secondary" className=" main-card mr-5">
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
  );
};

export default card;
