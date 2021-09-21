import React from "react";
import "./category.css";
import fish from "../../images/fish.jpg";
import crustan from "../../images/crustan.jpg";
import exotic from "../../images/exotic.png";

const Category = () => {
  return (
    <div className="pure_container">
      <div className="heading_container">
        <h1 className="heading">HOW IT WORKS</h1>
        <p className="small_heading">
          Sea Basket delivers fresh sourced seafood in a few easy clicks
        </p>
      </div>
      <div className="category_container">
        <h2 className="category_heading">CATEGORIES</h2>
        <div className="category">
          <div className="category_card">
            <img src={fish} alt="category_image" className="category_img" />
            <h3 className="category_name">FISH</h3>
          </div>
          <div className="category_card">
            <img src={crustan} alt="category_image" className="category_img" />
            <h3 className="category_name">CRUSTANCEANS</h3>
          </div>
          <div className="category_card">
            <img src={exotic} alt="category_image" className="category_img" />
            <h3 className="category_name">EXOTIC</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
