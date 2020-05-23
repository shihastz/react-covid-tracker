import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/india" className="nav-link">
              India
            </Link>
            <Link to="/world" className="nav-link">
              World
            </Link>
          </Nav>

          <Nav style={{ color: "white" }}>{this.state.date}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
