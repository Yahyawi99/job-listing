import React, { useState, useEffect } from "react";
// CSS
import "./Site.css";

const Site = ({ logo, logoBackground, apply, company, website }) => {
  return (
    <div className="header">
      <div
        style={{
          backgroundColor: logoBackground,
        }}
        className="about-logo-container"
      >
        <img src={logo} alt="logo" />
      </div>

      <div className="container">
        <div className="container-one">
          <h2 className="company">{company}</h2>
          <p className="link">{apply}</p>
        </div>
        <a href={website} className="site-btn">
          company Site
        </a>
      </div>
    </div>
  );
};

export default Site;
