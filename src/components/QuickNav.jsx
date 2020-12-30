import React from "react";
import { Link } from "react-router-dom";

const QuickNav = () => {
  return (
    <ul className="nav-links-nav">
      <li className="nav-item-nav">
        <Link to="/">home</Link>
      </li>
      <li className="nav-item-nav">
        <Link to="/courses/">courses</Link>
      </li>
      <li className="nav-item-nav">
        <Link to="/about/">about</Link>
      </li>
    </ul>
  );
};

export default QuickNav;
