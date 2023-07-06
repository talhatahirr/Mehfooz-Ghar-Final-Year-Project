import React from "react";
import service from "../assets/service.png";
import job from "../assets/job.png";
import { Link } from "react-router-dom";
import "../containers/features/features.css";
import CTAButton from "../buttons/CTAButton";
import "./cta.css"
const SignUpTypes = () => {
  const types = [
    {
      type: service,
      title: "I Am Looking For Services ",
      link: "../clientSignUp",
    },
    { type: job, title: "I Am Looking For A Job", link: "../ApplicationForm" },
  ];
  return (
    <div className="d-flex flex-column align-items-center ">
      <div className="container mt-5 ">
        <div className="row mx-auto">
          {types.map((t) => {
            return (
              <div className="col-lg-6 d-flex mt-3 justify-content-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={t.type} alt={t.type} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{t.title}</h5>
                    <div className="d-flex justify-content-center " >
                      <CTAButton link={t.link} btntext="Get Started" className="cta"/>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <div
          class="card my-5 col-lg-12 mx-auto text-center"
         
        >
          <h4>Already a member? Sign In Now</h4>
          <CTAButton link="../signin" btntext="Sign In Now" className="cta" />
        </div>
      </div>
    </div>
  );
};

export default SignUpTypes;
