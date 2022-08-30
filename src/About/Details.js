import React from "react";
// CSS
import "./Details.css";

const Details = ({
  position,
  postedAt,
  contract,
  location,
  description,
  requirements,
  role,
  apply,
}) => {
  return (
    <section className="details-container">
      <div className="date-and-contract">
        <p className="date">{postedAt}</p>
        <p className="dot">.</p>
        <p className="type">{contract}</p>
      </div>

      <div className="apply-now">
        <div className="position">
          <h1>{position}</h1>
          <p>{location}</p>
        </div>
        <a href={apply} className="apply-now-btn">
          Apply Now
        </a>
      </div>

      <p className="description">{description}</p>

      <h3>Requirements</h3>
      <p className="requirements-content">{requirements.content}</p>
      <ul className="requirements-items">
        {requirements.items.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>

      <h3>What You Will Do</h3>
      <p className="role-content">{role.content}</p>
      <ul className="role-items">
        {role.items.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </section>
  );
};

export default Details;
