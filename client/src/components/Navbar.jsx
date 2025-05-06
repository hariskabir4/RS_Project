import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((open) => !open);
  const navigate = useNavigate();
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
        <div
          className="Navbar_NavBar_User"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        >
          <span className="Navbar_NavBar_User_Name">{isLoggedIn ? userName : 'User'}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="Navbar_NavBar_User_Svg"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
          </svg>
          {dropdownOpen && (
            <div className="Navbar_NavBar_Dropdown">
              {isLoggedIn ? (
                <>
                <button onClick={() => navigate('/veiw-reports')} className="Navbar_NavBar_Dropdown_Item">Veiw Reports</button>
                <button className="Navbar_NavBar_Dropdown_Item">Logout</button>
                </>
              ) : (
                <>
                <button onClick={() => navigate('/veiw-reports')} className="Navbar_NavBar_Dropdown_Item">Veiw Reports</button>
                <button onClick={() => navigate('/login')} className="Navbar_NavBar_Dropdown_Item">Login</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
