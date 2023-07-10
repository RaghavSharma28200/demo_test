import React from "react";
import { images } from "../actions/customFn";

const RecordNotFound = ({ Height }) => {
  return (
    <div style={{ height: Height }} className="record_not_found">
      <img src={images["recordnotfound.png"]} alt="" />
      <h2>Record Not Found</h2>
    </div>
  );
};

export default RecordNotFound;
