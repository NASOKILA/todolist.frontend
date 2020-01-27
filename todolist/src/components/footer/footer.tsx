import React, { FunctionComponent } from "react";
import "./footer.css";

type FooterPropsType = {};

const Footer: FunctionComponent<FooterPropsType> = () => {
  return (
    <div className="footer">
      <hr />
      <span>Copyright © ChartChecker. All rights reserved.</span>
    </div>
  );
};

export default Footer;
