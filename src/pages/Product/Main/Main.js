import React from "react";
import { Row, Navbar } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import Navbars from "../../../components/Navbar/Navbar";
import Tshirt from "./../Tshirt/Tshirt";
import Shorts from "./../Shorts/Shorts";
import Trousers from "./../Trousers/Trousers";
import Sweatershirts from "./../Sweater/Sweater";
import Jacket from "./../Jacket/Jacket";
import Hoodie from "./../Hoodie/Hoodie";
import Shoes from "./../Shoes/Shoes";
import Socks from "./../Socks/Socks";
import Acc from "./../Acc/Acc";

import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navbars />

      <div className="mt-5 mb-4 product-container">
        <Row>
          <Navbar collapseOnSelect expand="lg" bg="dark">
            <Link
              to="/product"
              className="btn btn-light product-item mr-5 ml-5"
            >
              T-shirt & Vests
            </Link>
            <Link
              to="/product/shorts"
              className="btn btn-light product-item mr-5"
            >
              Shorts
            </Link>
            <Link
              to="/product/trousers"
              className="btn btn-light product-item mr-5"
            >
              Trousers
            </Link>
            <Link
              to="/product/sweatershirts"
              className="btn btn-light product-item mr-5"
            >
              SweaterShirts
            </Link>
            <Link
              to="/product/jacket"
              className="btn btn-light product-item mr-5"
            >
              Jacket
            </Link>
            <Link
              to="/product/hoodie"
              className="btn btn-light product-item mr-5"
            >
              Hoodie
            </Link>
            <Link
              to="/product/shoes"
              className="btn btn-light product-item mr-5"
            >
              Shoes
            </Link>
            <Link
              to="/product/socks"
              className="btn btn-light product-item mr-5"
            >
              Socks
            </Link>
            <Link to="/product/acc" className="btn btn-light product-item mr-5">
              Accessories
            </Link>
          </Navbar>
        </Row>

        <Switch>
          <Route exact path="/product" component={Tshirt}></Route>
          <Route path="/product/shorts" component={Shorts}></Route>
          <Route path="/product/trousers" component={Trousers}></Route>
          <Route
            path="/product/sweatershirts"
            component={Sweatershirts}
          ></Route>
          <Route path="/product/jacket" component={Jacket}></Route>
          <Route path="/product/hoodie" component={Hoodie}></Route>
          <Route path="/product/shoes" component={Shoes}></Route>
          <Route path="/product/socks" component={Socks}></Route>
          <Route path="/product/acc" component={Acc}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
