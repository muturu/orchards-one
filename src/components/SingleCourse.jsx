import React from "react";
import { Link } from "react-router-dom";
import InfoContainer from "./InfoContainer";
import LevelHeading from "./LevelHeading";

const SingleCourse = ({ course }) => {
  const { slug, initials, image, name } = course;
  return (
    <>
      <article className="feature-course">
        <div className="img-feature-course">
          <Link to={`/courses/${slug}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="info-container">
          <LevelHeading title={initials} subtitle={name} />
          <InfoContainer course={course}  />
        </div>
      </article>
    </>
  );
};

export default SingleCourse;
