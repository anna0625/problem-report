import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>What do you have in mind?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-problem" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Report a Problem
      </Link>

      <Link to="/problems" className="btn btn-block">
        <FaTicketAlt /> View My Problems
      </Link>
    </>
  );
};

export default Home;
