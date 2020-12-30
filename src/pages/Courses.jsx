import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedCourses from "../components/FeaturedCourses";
import Hero from "../components/Hero";
import { kasneb } from "../data/data";

const Courses = () => {
  const courses = kasneb;

  return (
    <>
      <Hero hero="courseHero">
        <Banner title="Our Course">
          <Link to="/" className="btn-primary">
            home
          </Link>
        </Banner>
      </Hero>
      <FeaturedCourses title="our courses" featured={kasneb} />
    </>
  );
};

export default Courses;
