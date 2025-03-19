import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SecondNav from "../header/secondNav/secondNav";
import logo from "../../assets/BLOGO.png";
import wm from "../../assets/WMlogo.png";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Saving Sake" className="logo" />
        <img src={wm} alt="Saving Sake" className="wm" />
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* DASHBOARD */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("dashboard")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/dashboard" className={`nav-link ${activeDropdown === "dashboard" ? "active" : ""}`}>
            Dashboard <span className={`caret ${activeDropdown === "dashboard" ? "rotate" : ""}`}>&#9662;</span>
          </Link>
          <SecondNav type="dashboard" isVisible={activeDropdown === "dashboard"} onHover={handleMouseEnter} />
        </li>

        {/* REPORTS */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("reports")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/reports" className={`nav-link ${activeDropdown === "reports" ? "active" : ""}`}>
            Reports <span className={`caret ${activeDropdown === "reports" ? "rotate" : ""}`}>&#9662;</span>
          </Link>
          <SecondNav type="reports" isVisible={activeDropdown === "reports"} onHover={handleMouseEnter} />
        </li>

        {/* SETTINGS */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("settings")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/settings" className={`nav-link ${activeDropdown === "settings" ? "active" : ""}`}>
            Settings <span className={`caret ${activeDropdown === "settings" ? "rotate" : ""}`}>&#9662;</span>
          </Link>
          <SecondNav type="settings" isVisible={activeDropdown === "settings"} onHover={handleMouseEnter} />
        </li>
      </ul>

      <div className="getStart">
        <Link to="/login">LOG IN</Link>
      </div>
    </nav>
  );
};

export default NavBar;