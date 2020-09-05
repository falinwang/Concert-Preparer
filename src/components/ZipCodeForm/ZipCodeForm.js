import React from "react";
import "./ZipCodeForm.css";

function ZipCodeForm() {
  return (
    <div className="zipCodeForm">
      <input type="text" placeholder="Enter Postal Code" />
      <button type="submit">Search</button>
    </div>
  );
}

export default ZipCodeForm;
