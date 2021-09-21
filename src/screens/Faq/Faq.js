import React from "react";
import "./faq.css";

const Faq = () => {
  const collapse = () => {
    const col = document.getElementsByClassName("collapsible");
    for (let i = 0; i < col.length; i++) {
      col[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };

  return (
    <div className="faq_container">
      <h1 className="faq_heading">FAQS</h1>
      <div className="collapisble_container">
        <button onClick={collapse} className="collapsible">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ?
        </button>
        <div className="content">
          <p className="collapse_para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, voluptas. Quo, nisi eligendi in molestias velit at
            pariatur illum, a sapiente commodi aspernatur doloribus modi facere
            placeat ullam est natus.
          </p>
        </div>
        <button onClick={collapse} className="collapsible">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ?
        </button>
        <div className="content">
          <p className="collapse_para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, voluptas. Quo, nisi eligendi in molestias velit at
            pariatur illum, a sapiente commodi aspernatur doloribus modi facere
            placeat ullam est natus.
          </p>
        </div>
        <button onClick={collapse} className="collapsible">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ?
        </button>
        <div className="content">
          <p className="collapse_para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, voluptas. Quo, nisi eligendi in molestias velit at
            pariatur illum, a sapiente commodi aspernatur doloribus modi facere
            placeat ullam est natus.
          </p>
        </div>
        <button onClick={collapse} className="collapsible">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ?
        </button>
        <div className="content">
          <p className="collapse_para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, voluptas. Quo, nisi eligendi in molestias velit at
            pariatur illum, a sapiente commodi aspernatur doloribus modi facere
            placeat ullam est natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
