import React from "react";
// CSS
import "./Footer.css";

const Footer = ({ position, location, apply }) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="position">
          <h3>{position}</h3>
          <p className="location">{location}</p>
        </div>
        <a href={apply} className="apply-now-btn">
          Apply Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
