import { BiAlignRight, BiCut, BiX } from "react-icons/bi";

import React, { Component } from "react";
import QuickLinks from "./QuickLinks";
import QuickNav from "./QuickNav";
class Navbar extends Component {
  state = {
    sidebar: false,
  };
  handleToggle = () => {
    this.setState({
      sidebar: !this.state.sidebar,
    });
  };
  render() {
    const { sidebar } = this.state;
    return (
      <>
        <nav className="navbar">
          <div className="navbar-center">
            <div className="orchards">
              <h1>ORCHARDS</h1>
            </div>
            <div className="nav-btn">
              {sidebar ? (
                <BiX
                  className="nav-icon nav-cancel"
                  onClick={() => this.handleToggle()}
                />
              ) : (
                <BiAlignRight
                  className="nav-icon"
                  onClick={() => this.handleToggle()}
                />
              )}
            </div>
          </div>
          <QuickNav />
        </nav>

        <div
          className={
            this.state.sidebar ? "side-nav show-side-nav" : "side-nav "
          }
        >
          <div className="close-nav">
            <BiCut className="nav-icon" onClick={() => this.handleToggle()} />
          </div>
          <QuickLinks
            close={this.state.sidebar}
            handleToggle={this.handleToggle}
          />
        </div>
        <div
          className={
            this.state.sidebar
              ? " sidebar-overlay show-side-nav"
              : "sidebar-overlay"
          }
          onClick={this.handleToggle}
        ></div>
      </>
    );
  }
}

export default Navbar;
