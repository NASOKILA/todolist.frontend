import React, { FunctionComponent, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { isUserLoggedIn, userLogout } from "../../utils/Auth";
import { toast } from "react-toastify";
import { UserDataType } from "../../types/types";
import { decript } from "../../utils/Encrypt";
import "react-toastify/dist/ReactToastify.css";
import "./navigation.scss";

const Navigation: FunctionComponent = () => {
  const [, setRerender] = useState(false);
  const [userData, setUserData] = useState<UserDataType>({
    email: "",
    lists: [],
    isAdmin: false
  });

  useEffect(() => {
    if (isUserLoggedIn()) {
      const userData: UserDataType = decript();
      setUserData(userData);
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg" id="main-nav">
      <Navbar.Brand>TO DO LIST</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="navlink home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          {isUserLoggedIn() && (
            <>
              <Link to="/lists/create" className="navlink createList">
                <FontAwesomeIcon icon={faPlus} /> Create list
              </Link>
              <Link to="/myLists" className="navlink mylists">
                <FontAwesomeIcon icon={faList} /> My lists
              </Link>
              <Link to="/shared" className="navlink shared">
                <FontAwesomeIcon icon={faShareAlt} /> Shared
              </Link>
              {userData.isAdmin === true && (
                <Link to="/users" className="navlink shared">
                  <FontAwesomeIcon icon={faUsers} /> Users
                </Link>
              )}
            </>
          )}
        </Nav>
        <Form inline>
          {isUserLoggedIn() ? (
            <>
              <span className="welcome-name">
                {userData.isAdmin && <b>( Admin ) </b>}
                {userData.email}
              </span>
              <Link
                to="/"
                onClick={(): void => {
                  userLogout();
                  toast("Logout successfull!");
                  setRerender(true);
                }}
                className="navlink logout"
              >
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="navlink login">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
              <Link to="/register" className="navlink register">
                <FontAwesomeIcon icon={faRegistered} /> Register
              </Link>
            </>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {};

export default Navigation;
