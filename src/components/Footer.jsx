import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sect-footer">
      <div className="quick-links">
        <Link to="/">orchards</Link>
        <Link to="/">home</Link>
        <Link to="/">about us</Link>
        <Link to="/">our courses</Link>
      </div>
    </div>
  );
};

export default Footer;
