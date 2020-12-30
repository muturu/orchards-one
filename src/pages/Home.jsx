import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedCourses from "../components/FeaturedCourses";
import Hero from "../components/Hero";
import { featured } from "../data/data";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero hero="defaultHero">
          <Banner title="welcome to orchards">
            <Link to="/courses/" className="btn-primary">
              our courses
            </Link>
          </Banner>
        </Hero>
        <FeaturedCourses title="featured courses" featured={featured}/>
      </>
    );
  }
}

export default Home;
