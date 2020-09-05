import React from "react";
import Logo from "../Logo/Logo";
import "./Navigation.css";
import ZipCodeForm from "../ZipCodeForm/ZipCodeForm";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <div className="logo__text">
          <p>Concert Preparer</p>
        </div>
      </div>
      {/* <ZipCodeForm /> */}
    </div>
  );
}

export default Navigation;
