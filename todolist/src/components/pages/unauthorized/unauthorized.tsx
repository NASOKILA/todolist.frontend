import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { OfficialPropsType } from "../../../types/types";
import "./unauthorized.scss";

const Unauthorized: FunctionComponent<OfficialPropsType> = (
  props: OfficialPropsType
) => {
  return (
    <Card className="text-center unauthorizedpage page">
      <Card.Body>
        <h1>Oops!</h1>
        <h2>403 Unauthorized</h2>
        <div className="error-details">
          Sorry, an error has occured, user is not authorized to view this page!
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

export default Unauthorized;
