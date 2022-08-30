import React, { useState, useEffect } from "react";
// Data
import { Data } from "../data";
// Components
import Input from "./Input";
import Job from "./Job";
// Context
import { useItGlobally } from "../useContext";

const Home = () => {
  const { jobs, setJobs, searchMode } = useItGlobally();

  return (
    <>
      <Input />

      <section className="Jobs">
        {jobs.map((job) => {
          return <Job key={job.id} {...job} />;
        })}
      </section>

      {jobs.length < 15 && !searchMode ? (
        <button
          className="more"
          onClick={() => {
            setJobs(Data);
          }}
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
