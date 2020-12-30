import React from "react";
//import { featured } from "../data/data";
import SingleCourse from "./SingleCourse";
import Title from "./Title";

const FeaturedCourses = ({ title, featured }) => {
  const courses = featured;

  return (
    <>
      <section className="featured-courses">
        <Title title={title} />

        <div className="featured-course-center">
          {courses.map((course) => {
            return <SingleCourse key={course.id} course={course} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedCourses;
