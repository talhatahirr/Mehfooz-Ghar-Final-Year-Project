import React from "react";
import "./header.css";
import people from "../../assets/Group 81.png";
import nurse1 from "../../assets/nurse1.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTAButton from "../../buttons/CTAButton"
const benefits = [
  "Hassle Free, at-home healthcare \n",
  "Trustworthy caretakers for your loved ones \n",
  "Convenient handymen services \n",
  "Quality services for a range of needs \n",
];

const Header = () => {
  return (
    <div className="body">

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  div
                  className="d-flex justify-content-center flex-column col-md-6 pr-5 pt-lg-0 order-2 order-lg-1"
                >
                  <h1 className="fw-bold">
                    <span className="secondary-clr">Transform</span> Your House
                    & Workplace
                  </h1>
                  <p className="basic-clr my-3">
                    From skilled nurses and caretakers to reliable handyman
                    services, we offer everything you need to keep your home
                    running smoothly.
                  </p>
                  {benefits.map((e, i) => {
                    return (
                      <div className="d-flex align-items-center my-2 basic-clr">
                        <Icon
                          className="icon"
                          icon="mdi:tick-circle"
                          style={{
                            color: "#FA5D26",
                            width: "24px",
                          }}
                        />
                        <p className="mb-0 ms-1 fs-24"> {e}</p>
                      </div>
                    );
                  })}

                  <div>
                    
                    <CTAButton link="/home/types" btntext="Get Started"/>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={nurse1} alt="nurse1" className="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
