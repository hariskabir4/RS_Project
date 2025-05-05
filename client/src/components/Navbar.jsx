import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ isLoggedIn, userName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="Navbar_NavBar">
      <div className="Navbar_NavBar_Left">
        <ul className="Navbar_NavBar_List">
          <li className="Navbar_NavBar_Item"><a href="/">Home</a></li>
          <li className="Navbar_NavBar_Item"><a href="/about">About</a></li>
          <li className="Navbar_NavBar_Item"><a href="/services">Services</a></li>
          <li className="Navbar_NavBar_Item"><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="Navbar_NavBar_Right">
        <div className="Navbar_NavBar_User">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            onClick={toggleDropdown}
            className="Navbar_NavBar_User_Svg"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
          </svg>
          {isLoggedIn && <span className="Navbar_NavBar_User_Name">{userName}</span>}
          {dropdownOpen && isLoggedIn && (
            <div className="Navbar_NavBar_Dropdown">
              <button className="Navbar_NavBar_Dropdown_Item">View Reports</button>
              <button className="Navbar_NavBar_Dropdown_Item">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
