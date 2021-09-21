import React from "react";
import "./navbar.css";
import logo from "../../images/logo.PNG";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="menu_container">
        <ul className="menu">
          <li className="menu_item">Category</li>
          <li className="menu_item">FAQs</li>
          <li className="menu_item">MyCart</li>
        </ul>
        <button className="login_button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
