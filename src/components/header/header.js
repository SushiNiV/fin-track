import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SecondNav from '../header/secondNav/secondNav';
import logo from '../../assets/BLOGO.png';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Saving Sake" className="logo" />
      </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>

        {/* Dashboard with Dropdown */}
        <li 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('dashboard')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/dashboard">
            Dashboard <span className={`caret ${activeDropdown === 'dashboard' ? 'rotate' : ''}`}>&#9662;</span>
          </Link>
          {activeDropdown === 'dashboard' && <SecondNav type="dashboard" />}
        </li>

        {/* Reports with Dropdown */}
        <li 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('reports')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/reports">
            Reports <span className={`caret ${activeDropdown === 'reports' ? 'rotate' : ''}`}>&#9662;</span>
          </Link>
          {activeDropdown === 'reports' && <SecondNav type="reports" />}
        </li>

        {/* Settings with Dropdown */}
        <li 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('settings')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/settings">
            Settings <span className={`caret ${activeDropdown === 'settings' ? 'rotate' : ''}`}>&#9662;</span>
          </Link>
          {activeDropdown === 'settings' && <SecondNav type="settings" />}
        </li>
      </ul>
      <div className="getStart">
        <Link to="/login">LOG IN</Link>
      </div>
    </nav>
  );
}

export default NavBar;
