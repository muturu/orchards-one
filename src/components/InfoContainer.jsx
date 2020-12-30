import React from "react";

const InfoContainer = ({ course, infostyle }) => {
  const { duration, school, examiner, intake, name } = course;
  return (
    <>
      <div className={`info-cont-wrapper ${infostyle}`}>
        <div className="duration info-cont">
          <div className="info-cont-1">
            <h5>duration</h5>
          </div>
          <div className="info-cont-2">
            <h6>{duration}</h6>
          </div>
        </div>
        <div className="school info-cont">
          <div className="info-cont-1">
            <h5>School</h5>
          </div>
          <div className="info-cont-2">
            <h6>{school}</h6>
          </div>
        </div>
        <div className="examiner info-cont">
          <div className="info-cont-1">
            <h5>examiner</h5>
          </div>
          <div className="info-cont-2">
            <h6>{examiner}</h6>
          </div>
        </div>
        <div className="intake info-cont">
          <div className="info-cont-1">
            <h5>Intake</h5>
          </div>
          {intake && (
            <div className="info-cont-2">
              {intake.map((int, ind) => {
                return <h6 key={ind}>{int}</h6>;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoContainer;
