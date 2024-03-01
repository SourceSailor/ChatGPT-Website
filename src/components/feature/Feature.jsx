import React from "react";
import "./feature.css";

const Feature = ({ title, text, featureClass }) => {
  return (
    <div className={`gpt3__features-container__feature `}>
      <div
        className={`gpt3__features-container__feature-title ${featureClass}`}
      >
        <span className="gpt3__features-container__features-bar"></span>
        <div className="gpt3__feature-title">
          <h1>{title}</h1>
        </div>

        <div className="gpt3__features-container__feature-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
