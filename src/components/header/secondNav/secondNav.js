import React from 'react';
import './secondNav.css';

const SecondNav = ({ type }) => {
  let menuItems = [];

  if (type === "dashboard") {
    menuItems = ["Overview", "Trends", "Insights", "Export Data"];
  } else if (type === "reports") {
    menuItems = ["Monthly Report", "Yearly Report", "Custom Reports"];
  } else if (type === "settings") {
    menuItems = ["Profile Settings", "Preferences", "Security"];
  }

  return (
    <nav className="second-navbar">
      <ul className="sub-nav-list">
        {menuItems.map((item, index) => (
          <li key={index}><a href="#">{item}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default SecondNav;
