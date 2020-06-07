import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/loginActions";
import { connect } from "react-redux";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import logo from "../../image/Hybeast.png";

import "./Navbar.css";

const Navbars = (props) => {
  const [data, setData] = useState();
  const [viewLogin, setViewLogin] = useState();
  const history = useHistory();
  const [user, setUser] = useState([]);
  const URL = `https://api.vannch.com/product/show`;

  const logOut = () => {
    props.logout();
    history.push("/");
  };

  useEffect(
    () => {
      axios
        .get(URL)
        .then((res) => {
          const user = res.data;
          setUser(user);
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
            alert("Sorry , can't get the data from server..");
          }
        });

      if (props.viaLogin) {
        setViewLogin(
          <div className="showLogin">
            <NavDropdown
              className="navProfile nav-link-profile pl-4 pr-4 text-center"
              title={
                <span>
                  <i className="fa fa-user fa-fw "></i>Profile
                </span>
              }
            >
              <NavDropdown.Item className="navDropItem">
                <Link to="/profile" className="profileSetting">
                  <i className="fas fa-envelope fa-fw"></i> User Profile
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navDropItem">
                <Link to="/history" className="profileSetting">
                  <i className="far fa-clock mr-2"></i>History
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navDropItem" onClick={logOut}>
                <Link
                  to="#"
                  className="fas fa-sign-out-alt i-logout mr-2"
                ></Link>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        );
      } else {
        setData();
        setViewLogin(
          <Nav>
            <Link to="/login">
              <Button className="signInButton">
                Sign In
                <i className="fas fa-sign-in-alt ml-2"></i>
              </Button>
            </Link>
          </Nav>
        );
      }
    },
    [props.viaLogin],
    []
  );

  return (
    <div>
      <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#FFD401" }}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
          <Navbar.Brand>Hybeast</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav">
            {data}
            <Nav>{viewLogin}</Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar bg="light" expand="lg" fixed="top" className="fixed-top-2">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/product" className="navbar-item">
              Products
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/gallery" className="navbar-item">
              Gallery
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </Nav>
          <Nav className="ml-auto mr-3">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
