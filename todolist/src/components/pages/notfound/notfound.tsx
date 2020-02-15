import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NotFoundPropsType } from "../../../types/types";
import "./notfound.scss";

const NotFound: FunctionComponent<NotFoundPropsType> = (
  props: NotFoundPropsType
) => {
  return (
    <Card className="text-center notfoundpage page">
      <Card.Body>
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div className="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div className="error-actions">
          <Button variant="primary" onClick={() => props.history.push("/home")}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NotFound;
