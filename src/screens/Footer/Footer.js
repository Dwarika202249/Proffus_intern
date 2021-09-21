import React from "react";
import "./footer.css";
import logo from "../../images/logo.PNG";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="upper_footer">
        <div className="left_container">
          <img src={logo} alt="footer_logo" className="footer_logo" />
        </div>
        <div className="right_container">
          <div className="column_container">
            <ul className="column_menu">
              <li className="column_item">Support</li>
              <li className="column_item">About Us</li>
              <li className="column_item">Privacy Policy</li>
            </ul>
          </div>
          <div className="column_container">
            <ul className="column_menu">
              <li className="column_item">Terms & Conditions</li>
              <li className="column_item">Return & Refund Policy</li>
              <li className="column_item">Shipping & Delivery Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower_footer">
        <p className="reserved">
          Sea Basket | All Rights Reserved | 2021 Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
