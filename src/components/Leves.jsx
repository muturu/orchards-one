import React from "react";
import LevelHeading from "./LevelHeading";

const Levels = ({ level }) => {
  return (
    <>
      <LevelHeading title={level.level} levelunits="alignstart" />
      <div className="level-unit">
        {level.units.map((unit, ind) => {
          return (
            <div key={ind} className="lev-unit">
              <div className="lev-unit-dec"></div>
              <h5>{unit}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Levels;
