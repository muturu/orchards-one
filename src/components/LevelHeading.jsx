import React from "react";

const LevelHeading = ({ title, subtitle, levelunits }) => {
  return (
    <div className={levelunits ? levelunits : "lev-heading"}>
      <h3>{title}</h3>
      <div />
      <h5>{subtitle}</h5>
    </div>
  );
};

export default LevelHeading;
