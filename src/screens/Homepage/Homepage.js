import React from "react";
import Navbar from "../Navbar/Navbar";
import homepic from "../../images/homepic.PNG";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage_container">
        <div className="img_container">
          <img src={homepic} alt="homepic" className="homepic" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
