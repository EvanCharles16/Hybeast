import React, { Component } from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, Row, Col } from "react-bootstrap";

import tshirt from "../../../image/category/tshirt.png";
import shorts from "../../../image/category/short.png";
import trousers from "../../../image/category/trousers.png";
import sweater from "../../../image/category/sweater.png";
import jacket from "../../../image/category/jacket.png";
import hoodie from "../../../image/category/hoodie.png";
import shoes from "../../../image/category/shoes.png";
import socks from "../../../image/category/socks.png";
import acc from "../../../image/category/acc.png";

import "./Category.css";

export default class CategoryCarousel extends Component {
  render() {
    return (
      <div id="product">
        <Jumbotron className="containerCarousel mb-5 bg-white">
          <Row>
            <Col>
              <h2 className="text-center">CATEOGRY</h2>
              <div className="underlineCarousel mb-5 mx-auto"></div>
              <Carousel
                centered
                infinite
                arrows
                slidesPerPage={4}
                autoPlay={2500}
                breakpoints={{
                  320: {
                    slidesPerPage: 1,
                    arrows: false,
                  },
                  480: {
                    slidesPerPage: 1,
                    arrows: false,
                  },
                  769: {
                    slidesPerPage: 1,
                    arrows: false,
                  },
                  900: {
                    slidesPerPage: 2,
                    arrows: false,
                  },
                  1280: {
                    slidesPerPage: 3,
                  },
                  1400: {
                    slidesPerPage: 3,
                  },
                }}
              >
                <div className="text-center">
                  <img
                    src={tshirt}
                    alt="T-Shirt & Vests"
                    className="carouselImg"
                  />
                  <h4 className="categoryBlock">T-Shirts & Vests </h4>
                </div>
                <div className="text-center">
                  <img src={shorts} alt="Shorts" className="carouselImg" />
                  <h4 className="categoryBlock">Shorts</h4>
                </div>
                <div className="text-center">
                  <img src={trousers} alt="Trousers" className="carouselImg" />
                  <h4 className="categoryBlock">Trousers</h4>
                </div>
                <div className="text-center">
                  <img
                    src={sweater}
                    alt="Sweatershirts"
                    className="carouselImg"
                  />
                  <h4 className="categoryBlock">Sweatershirts</h4>
                </div>
                <div className="text-center">
                  <img
                    src={jacket}
                    alt="Jacket & Coats"
                    className="carouselImg"
                  />
                  <h4 className="categoryBlock">Jacket & Coats</h4>
                </div>
                <div className="text-center">
                  <img src={hoodie} alt="Hoodie" className="carouselImg" />
                  <h4 className="categoryBlock">Hoodie</h4>
                </div>
                <div className="text-center">
                  <img src={shoes} alt="Shoes" className="carouselImg" />
                  <h4 className="categoryBlock">Shoes</h4>
                </div>
                <div className="text-center">
                  <img src={socks} alt="Socks" className="carouselImg" />
                  <h4 className="categoryBlock">Socks</h4>
                </div>
                <div className="text-center">
                  <img src={acc} alt="Accessories" className="carouselImg" />
                  <h4 className="categoryBlock">Accessories</h4>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
