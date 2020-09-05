import React from "react";
import Logo from "../Logo/Logo";
import "./Navigation.css";
import ZipCodeForm from "../ZipCodeForm/ZipCodeForm";

function Navigation() {
  return (
    <div className="navigation">
      <Logo />
      <ZipCodeForm />
    </div>
  );
}

export default Navigation;
