import React from "react";
import "./Header.css";
import menu from "./menu.svg";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
        {/* <h4 data-aos="fade-down"><span>EnviroFeast</span>  : Fostering Sustainable Dining</h4> */}
        </div>

        <ul className="header__menu">
          <li>
            <a href="#food">Menu</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          {isLoggedIn && (
            <li>
             <button className="logout-button" onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
