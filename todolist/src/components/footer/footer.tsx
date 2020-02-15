import React, { FunctionComponent } from "react";
import "./footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className="blockquote-footer todofooter">
      <span>
        Copyright ©Todolist.{" "}
        <cite title="Source Title">All rights reserved.</cite>
      </span>
      <hr />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
