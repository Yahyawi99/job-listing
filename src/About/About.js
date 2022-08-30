import React, { useEffect } from "react";
// React router dom
import { useParams } from "react-router-dom";
// Components
import Site from "./Site";
import Details from "./Details";
import Footer from "./Footer";
// Data
import { Data } from "../data";

const About = () => {
  const { id } = useParams();
  const clickedJob = Data.find((job) => job.id == id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedJob]);

  return (
    <>
      <Site {...clickedJob} />
      <Details {...clickedJob} />
      <Footer {...clickedJob} />
    </>
  );
};

export default About;
