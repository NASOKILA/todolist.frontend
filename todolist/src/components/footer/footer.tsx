import React, { FunctionComponent } from "react";
import "./footer.scss";

type FooterPropsType = {};

const Footer: FunctionComponent<FooterPropsType> = () => {
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
