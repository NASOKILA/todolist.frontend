import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import "./footer.css";

type FooterPropsType = {};

const Footer: FunctionComponent<FooterPropsType> = () => {
  return (
    <Card.Body>
      <footer className="blockquote-footer">
        <span>
          Copyright ©Todolist.{" "}
          <cite title="Source Title">All rights reserved.</cite>
        </span>
      </footer>
    </Card.Body>
  );
};

Footer.propTypes = {};

export default Footer;
