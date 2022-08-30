import React, { useEffect, useRef } from "react";
// React router dom
import { Link } from "react-router-dom";
// CSS
import "./Job.css";
// Context
import { useItGlobally } from "../useContext";

const Job = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  const { jobs } = useItGlobally();
  const refJob = useRef(null);

  useEffect(() => {
    refJob.current.classList.add("onload-effect");
  }, []);

  return (
    <Link to={`about/job/${id}`} ref={refJob} className="job">
      <div
        style={{
          backgroundColor: logoBackground,
        }}
        className="logo-container"
      >
        <img src={logo} />
      </div>

      <div className="date-and-type">
        <p className="date">{postedAt}</p>
        <p className="dot">.</p>
        <p className="type">{contract}</p>
      </div>

      <h3 className="job-offer">{position}</h3>

      <p className="company-name">{company}</p>

      <p className="country">{location}</p>
    </Link>
  );
};

export default Job;
