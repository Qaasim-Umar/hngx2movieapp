import React from "react";
import "./sidebar.css";
import Tv from "./tv.svg";
import Homelogo from "./Home.svg";
import Tvshow from "./Tvshow.svg";
import Movie from "./Movie.svg";
import Calender from "./Calendar.svg";
import Logout from "./Logout.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={Tv} className="tvlogo" alt="tvLogo" />
        <p>
          <b> MovieBox</b>
        </p>
      </div>
{/* link to navigate to various movie details */}

      <Link to="/" className="link">
        <div className="sideicon-flex">
          <img src={Homelogo} alt="" />
          <p>Home</p>
        </div>
      </Link>
      <div className="sideicon-flex-moive">
        <img src={Movie} alt="" />
        <p>Movie</p>
      </div>

      <div className="sideicon-flex">
        <img src={Tvshow} alt="" />
        <p>Tv Series</p>
      </div>
      <div className="sideicon-flexs">
        <img src={Calender} alt="" />
        <p>Upcoming</p>
      </div>
      <div className="sideicon-flex">
        <img src={Logout} alt="" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
