import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./navigation";

type NavigationProps = {};

const Navigation: FunctionComponent = (props: NavigationProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">TODO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/create">Create</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/lists">My lists</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/shared">Shared</Link>
        </Nav.Link>
      </Nav>
      <Form inline>
        <Nav.Link>
          <Link to="/login">Login</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/register">Register</Link>
        </Nav.Link>
      </Form>
    </Navbar>
  );
};
//   <Link to="/create">Create</Link>
Navigation.propTypes = {};

export default Navigation;
