import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../main/main.css";
type MainPropsType = {};

const Main: FunctionComponent<MainPropsType> = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Todo list</Card.Title>
        <Card.Text>
          The TODO project ideally should be considered as a distributed system
          solution that enables end-users to register TODO items and keeping
          track on what is left to be done. Your task is to pick the area of the
          whole system that you feel most familiar with and provide as close as
          possible to a working solution in a time-box manner that demonstrates
          your skills, knowledge and ambition in the best possible way. It is
          recommended to pay attention to the production-readiness of the
          solution rather than its completeness. For example having similar, aka
          copy/paste, implementation for add and remove REST API calls will be
          less important than having HTTP params validation for only one of the
          REST API calls.
        </Card.Text>
        <Button variant="primary">Create a list</Button>
      </Card.Body>
    </Card>
  );
};

Main.propTypes = {};

export default Main;
