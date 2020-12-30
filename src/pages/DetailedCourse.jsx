import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import InfoContainer from "../components/InfoContainer";
import LevelHeading from "../components/LevelHeading";
import Levels from "../components/Leves";
import { StyledHero } from "../components/StyledHero";
import Title from "../components/Title";
import { kasneb } from "../data/data";

const DetailedCourse = (props) => {
  const slug = props.match.params.slug;
  const findCourse = (slug) => {
    return kasneb.find((course) => {
      return course.slug === slug;
    });
  };
  const course = findCourse(slug);
  const { initials, image, name, levels, compare } = course;
  return (
    <>
      {course && (
        <>
          <StyledHero image={image}>
            <Banner title={name}>
              <Link to="/" className="btn-primary">
                back home
              </Link>
            </Banner>
          </StyledHero>
          <LevelHeading title={initials} subtitle={name} />
          <div className="detailed-course-wrapper">
            <InfoContainer course={course} infostyle="course-retrieve" />

            <div className="levels-section">
              {levels.map((level, ind) => {
                return <Levels key={ind} level={level} />;
              })}
            </div>
          </div>
          {compare ? (
            <div className="btn-pri">
              <div className="btn-prim">
                <Link to={`/compare/${slug}/`}>
                  <h3>compare syllabus</h3>
                </Link>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default DetailedCourse;

{
  /* <div className="detail-info">
            <div className="initial-course ini">
              <div className="initial-1">
                <h3>{initials}</h3>
              </div>
              <div className="initial-2">
                <h5>{name}</h5>
              </div>
            </div>
            <div className="initial-course exam">
              <div className="initial-1">
                <h3>examiner</h3>
              </div>
              <div className="initial-2">
                <h5>{examiner}</h5>
              </div>
            </div>
            <div className="initial-course sch">
              <div className="initial-1">
                <h3>Department</h3>
              </div>
              <div className="initial-2">
                <h5>{school}</h5>
              </div>
            </div>
            <div className="initial-course dur">
              <div className="initial-1">
                <h3>Duration</h3>
              </div>
              <div className="initial-2">
                <h5>{duration}</h5>
              </div>
            </div>
          </div> */
}
