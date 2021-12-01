import React from "react";
import companyLogo from "../../images/cocoPointCoolingBlack.jpg";
import "./style.css";

const Header = () => {
  return (
    <>
      <img src={companyLogo} className="logo" alt="Coconut Point Cooling" />
    </>
  );
};

export default Header;
