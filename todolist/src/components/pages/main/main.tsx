import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faRegistered,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { MainPropsType } from "../../../types/types";
import { isUserLoggedIn } from "../../../utils/Auth";
import "./main.scss";

const Main: FunctionComponent<MainPropsType> = (props: MainPropsType) => {
  return (
    <Card className="text-center mainpage page">
      <Card.Body>
        {!isUserLoggedIn() ? (
          <>
            <Card.Title>Welcome to my To do list application!</Card.Title>
            <Card.Text>It's nice to meet you.</Card.Text>
            <hr />
            <br />
            <Button
              className="authBtn loginBtn"
              variant="primary"
              size="lg"
              onClick={() => props.history.push("/login")}
            >
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Button>
            <span className="main-or-buttons">OR</span>
            <Button
              className="authBtn registerBtn"
              variant="primary"
              size="lg"
              onClick={() => props.history.push("/register")}
            >
              <FontAwesomeIcon icon={faRegistered} /> Register
            </Button>
          </>
        ) : (
          <>
            <h3>To do list</h3>
            <Card.Text>
              The TODO project ideally should be considered as a distributed
              system solution that enables end-users to register TODO items and
              keeping track on what is left to be done. Your task is to pick the
              area of the whole system that you feel most familiar with and
              provide as close as possible to a working solution in a time-box
              manner that demonstrates your skills, knowledge and ambition in
              the best possible way. It is recommended to pay attention to the
              production-readiness of the solution rather than its completeness.
              For example having similar, aka copy/paste, implementation for add
              and remove REST API calls will be less important than having HTTP
              params validation for only one of the REST API calls.
            </Card.Text>
            <Button
              variant="primary"
              size="lg"
              onClick={() => props.history.push("/lists/create")}
            >
              <FontAwesomeIcon icon={faPlus} /> Create List
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

Main.propTypes = {};

export default Main;
