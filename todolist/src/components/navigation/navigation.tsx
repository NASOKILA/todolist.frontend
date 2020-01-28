import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./navigation.scss";

type NavigationProps = {};

const Navigation: FunctionComponent = (props: NavigationProps) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TODO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="navlink">
            Home
          </Link>
          <Link to="/create" className="navlink">
            Create
          </Link>
          <Link to="/list" className="navlink">
            My lists
          </Link>
          <Link to="/shared" className="navlink">
            Shared
          </Link>
        </Nav>
        <Form inline>
          <Link to="/login" className="navlink">
            Login
          </Link>
          <Link to="/register" className="navlink">
            Register
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {};

export default Navigation;
