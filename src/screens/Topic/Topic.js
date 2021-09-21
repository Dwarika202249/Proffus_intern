import React from "react";
import "./topic.css";
import fragile from "../../images/fragile.jpg";
import cutfish from "../../images/cutfish.jpg";

const Topic = () => {
  return (
    <div className="topic_container">
      <h1 className="topic_heading">TOPICS YOU CANT'T MISS</h1>
      <div className="topic_card">
        <div className="details">
          <h2 className="detail_heading">TOPICS YOU CANT'T MISS</h2>
          <p className="detail_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            fugiat quidem assumenda repudiandae quis deserunt distinctio earum
            mollitia voluptatibus, aperiam, quod facere est numquam enim unde
            consequatur exercitationem, repellendus soluta.
          </p>
          <div className="btn_container" id="btn">
            <button className="read_more_btn">
              READ MORE <span className="forward_arrow"> &gt; </span>
            </button>
          </div>
        </div>
        <div className="blur_image_container">
          <img src={fragile} alt="fragile_img" className="blur_img" />
        </div>
      </div>
      <div className="topic_card">
        <div className="details">
          <h2 className="detail_heading">TOPICS YOU CANT'T MISS</h2>
          <p className="detail_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            fugiat quidem assumenda repudiandae quis deserunt distinctio earum
            mollitia voluptatibus, aperiam, quod facere est numquam enim unde
            consequatur exercitationem, repellendus soluta.
          </p>
          <div className="btn_container" id="btn">
            <button className="read_more_btn">
              READ MORE <span className="forward_arrow"> &gt; </span>
            </button>
          </div>
        </div>
        <div className="blur_image_container">
          <img src={cutfish} alt="fragile_img" className="blur_img" />
        </div>
      </div>
    </div>
  );
};

export default Topic;
