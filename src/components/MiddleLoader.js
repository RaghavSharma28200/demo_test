import React from "react";
import { PropagateLoader } from "react-spinners";

const MiddleLoader = () => {
  return (
    <div className="middle_loader_container">
      <PropagateLoader className="loader_position" color="#8f78fb" size={30} />
    </div>
  );
};

export default MiddleLoader;
