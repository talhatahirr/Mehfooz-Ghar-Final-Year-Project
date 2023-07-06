import React from "react";
import { Link } from "react-router-dom";
import "./abar.css";
const Abar = () => {
  return (
    <div className="announcement_bar d-flex justify-content-center align-items-center ">
      <Link to="/ApplicationForm">
      <p className=" abar-text text-white fw-bold mb-0 "> We are Hiring | Click Here to Apply Now</p>
      </Link>
    </div>
  );
};

export default Abar;
