import React from "react";
import "./read.css";

const Read = () => {
  return (
    <div className="read_container">
      <h1 className="read_heading">HAVE A READ</h1>
      <div className="details_container">
        <h2 className="detail_heading">The right quality</h2>
        <p className="detail_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          fugiat quidem assumenda repudiandae quis deserunt distinctio earum
          mollitia voluptatibus, aperiam, quod facere est numquam enim unde
          consequatur exercitationem, repellendus soluta.
        </p>
        <div className="btn_container">
          <button className="read_more_btn">
            READ MORE <span className="forward_arrow"> &gt; </span>
          </button>
        </div>
      </div>
      <div className="details_container">
        <h2 className="detail_heading">The right time</h2>
        <p className="detail_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          fugiat quidem assumenda repudiandae quis deserunt distinctio earum
          mollitia voluptatibus, aperiam, quod facere est numquam enim unde
          consequatur exercitationem, repellendus soluta.
        </p>
        <div className="btn_container">
          <button className="read_more_btn">
            READ MORE <span className="forward_arrow"> &gt; </span>
          </button>
        </div>
      </div>
      <div className="details_container">
        <h2 className="detail_heading">The basis of a balanced diet</h2>
        <p className="detail_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          fugiat quidem assumenda repudiandae quis deserunt distinctio earum
          mollitia voluptatibus, aperiam, quod facere est numquam enim unde
          consequatur exercitationem, repellendus soluta.
        </p>
        <div className="btn_container">
          <button className="read_more_btn">
            READ MORE <span className="forward_arrow"> &gt; </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Read;
