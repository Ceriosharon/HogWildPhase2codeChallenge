import React from "react";
import piggy from "../assets/porco.png";
import "./Nav.css"; // Import CSS for animations
import "./Nav.css";


const Nav = () => (
  <header className="ui segment nav-wrapper">
    <div className="ui container nav-content">
      <h1 className="ui header">HogWild</h1>
      <img
        src={piggy}
        className="ui small image app-logo rotating" // Add rotating class
        alt="HogWild logo: a spinning piggy"
      />
      <p className="ui sub header">A React App for County Fair Hog Fans</p>
    </div>
  </header>
);

export default Nav;
