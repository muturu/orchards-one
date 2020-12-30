import React, { Component } from "react";
import InfoContainer from "../components/InfoContainer";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

import Hero from "../components/Hero";

import { comp } from "../data/CompData";
class Compare extends Component {
  state = {
    activelevel: "foundation",
    aPart: "part one",
    activeComparison: [],
    activePart: [],
    cours: {},
  };
  componentDidMount() {
    const slug = this.props.match.params.slug;
    let course = this.findCourse(slug);
    //console.log(course.newlevels);
    // console.log(course.modes);
    /* let { newlevels, oldparts } = course;
    let [level1, level2, level3] = newlevels;
    console.log(level1);
    const { partone, parttwo, partthree } = oldparts;
    const lev1 = level1.level;
    const lev1unit = level1.units; */

    this.setState(
      {
        cours: course,
        activeLevel: "foundation",
        aPart: "part one",
      },
      () => {
        this.handleActiveLevel();
      }
    );
  }

  findCourse = (slug) => {
    return comp.find((course) => {
      return course.slug === slug;
    });
  };

  handleClickItem = (act) => {
    this.setState(
      {
        activelevel: act,
      },
      () => this.handleActiveLevel()
    );
  };
  handleActiveLevel = () => {
    const { cours, activelevel } = this.state;
    
    let { newlevels, oldparts } = cours;
    let [level1, level2, level3] = newlevels;
    const { partone, parttwo, partthree } = oldparts;

    if (activelevel === "foundation") {
      this.setState({
        activeComparison: level1.units,
        activePart: partone,
        aPart: "part one",
      });
    } else if (activelevel === level2.level) {
      this.setState({
        activeComparison: level2.units,
        activePart: parttwo,
        aPart: "part Two",
      });
    } else {
      this.setState({
        ...this.state,
        activeComparison: level3.units,
        activePart: partthree,
        aPart: "part Three",
      });
    }
  };
  render() {
    const {
     /*  cpa,
      cpaDesc, */
      cours,
      activeComparison,
      activePart,
      aPart,
    } = this.state;
    const { name, duration, examiner, intake, school, newlevels } = cours;
    const activelevel = this.state.activelevel;
    console.log(this.state);
    //this.handleActiveLevel();
    return (
      <>
        {cours && (
          <>
            <Hero hero="courseHero">
              <Banner title="current and old syllabus compared">
                <Link to="/" className="btn-primary">
                  home
                </Link>
              </Banner>
            </Hero>
            <div className="comp-wrapper">
              <InfoContainer
                course={{ name, duration, examiner, intake, school }}
              />
              <div className="comp-wrapper-2">
                <div className="comp-understand">
                  <h6>
                    compare how old syllabus is replaced by the following levels
                  </h6>
                </div>
                <div className="active-section active">
                  {newlevels &&
                    newlevels.map((level, index) => {
                      return (
                        <div
                          onClick={() => this.handleClickItem(level.level)}
                          key={index}
                          className={`part-container par p-1 ${
                            level.level === activelevel
                              ? "active-bg"
                              : "notactive-bg"
                          }`}
                        >
                          {level.level}
                        </div>
                      );
                    })}
                </div>
                <div className="comp-sect describe">
                  <h5>
                    this compares {activelevel} with {aPart}
                  </h5>
                </div>
                <div className="disp-sec compare">
                  <div className="out-syl syl new">
                    <div className="sect-title">
                      <h4>{activelevel}</h4>
                      <div />
                    </div>

                    {activeComparison &&
                      activeComparison.map((unit, index) => {
                        return (
                          <div key={index} className="unitt">
                            <h5>{unit}</h5>
                          </div>
                        );
                      })}
                  </div>
                  <div className="in-syl syl old">
                    {activePart &&
                      activePart.map((sectionn, index) => {
                        const section = sectionn.section;
                        const sect = sectionn.sect;
                        return (
                          <div key={index} className="old-sect">
                            <div className="old-sect-units">
                              <div className="sect-title">
                                <h4>{section}</h4>
                                <div />
                              </div>
                              {sect.map((unit, ind) => {
                                return (
                                  <div key={ind} className="unitt">
                                    <h5>{unit}</h5>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Compare;
