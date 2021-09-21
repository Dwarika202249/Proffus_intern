import React from "react";
import "./glance.css";

const Glance = () => {
  return (
    <div className="glance_container">
      <div className="glance_heading_container">
        <h1 className="glance_heading">A GLANCE AT OUR PRODUCT</h1>
      </div>
      <div className="video_container">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default Glance;
