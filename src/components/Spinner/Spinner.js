import React from "react";
import "./Spinner.css";

const Spinner = ({ mensaje }) => {
  return (
    <div className="card p-2">
      <h2 className="text-center card-title">{mensaje}</h2>
      <div className="card-body">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
