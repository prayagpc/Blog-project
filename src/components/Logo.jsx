import React from "react";
import logo from "../assets/logo.jpg";
function Logo({ width = "100px" }) {
  return (
    <div className="flex justify-center items-center">
      <img height="80px" width="80px" src={logo} />
    </div>
  );
}

export default Logo;
