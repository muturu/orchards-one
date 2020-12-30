import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = ({ close, handleToggle }) => {
  const closeNav = () => {
    handleToggle({
      close: false,
    });
   
  };
  return (
    <ul className="nav-links ">
      <div />
      <li className="nav-item">
        <Link onClick={closeNav} to="/">
          home
        </Link>
      </li>
      <div />
      <li className="nav-item">
        <Link onClick={closeNav} to="/courses/">
          courses
        </Link>
      </li>
      <div />
      <li className="nav-item">
        <Link onClick={closeNav} to="/about/">
          about
        </Link>
      </li>
      <div />
    </ul>
  );
};

export default QuickLinks;
