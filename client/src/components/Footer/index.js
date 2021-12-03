import React from "react";

import "./style.css";
const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>
          &copy; {new Date().getFullYear()} - Coconut Point Cooling - CAC1820666
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
