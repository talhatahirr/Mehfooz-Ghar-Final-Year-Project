import React from "react";
import "./brand.css";

import choose from "../../assets/choose.png";
import browse from "../../assets/browse.png";
import schedule from "../../assets/schedule.png";
const Brand = () => {
  return (
    <div className="div_works pb-5 " id="whatM">
      <div className="text-center text-center d-flex flex-column justify-content-center align-items-center">
        <h2 className="green-clr my-lg-5 my-sm-5 ">How It Works</h2>
        <p className="col-5">
          Opting for our services is easy. Simply choose your desired Muhafiz
          from our categories to get started.
        </p>
      </div>

      <div className="row mt-5 position-relative  ">
        <div className="col-lg-4 ">
          <div>
            <div className="d-flex  justify-content-center ">
              <div className="position-relative">
                <div className="major d-flex justify-content-center align-items-center">
                  <img src={choose} alt="" className="works_img" />
                  <div className="bg-green bg-green-1 d-flex justify-content-center align-items-center text-white">
                    <p className="mb-0">1</p>
                  </div>
                </div>

                <div className="minor bg-basic position-absolute"></div>
              </div>
            </div>
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
              <h4>Choose From Our Categories</h4>
              <div className="w-75 text-center">
                <p>
                  Choose your desired category ranging from healthcare services
                  to other staff.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="d-flex  justify-content-center ">
            <div className="position-relative">
              <div className="major d-flex justify-content-center align-items-center">
                <img src={browse} alt="" className="works_img" />
                <div className="bg-green bg-green-1 d-flex justify-content-center align-items-center text-white">
                  <p className="mb-0">2</p>
                </div>
              </div>

              <div className="minor-2 bg-basic position-absolute"></div>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <h4>Browse Our Muhafiz</h4>
            <div className="w-75 text-center">
              <p>
                We’ll show you which Muhafiz are the best fit for your service
                needs. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="d-flex  justify-content-center ">
            <div className="position-relative">
              <div className="major d-flex justify-content-center align-items-center">
                <img src={schedule} alt="" className="works_img" />
                <div className="bg-green bg-green-1 d-flex justify-content-center align-items-center text-white">
                  <p className="mb-0">3</p>
                </div>
              </div>

              <div className="minor bg-basic position-absolute"></div>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <h4>Set An Appointment</h4>
            <div className="w-75 text-center">
              <p>
                Select the Muhafiz that meets your needs and get started on
                getting our amazing services.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="arrow1">
          <img src={arrow1} alt="arrow" />

        </div>
        <div className="arrow2">
          <img src={arrow2} alt="arrow" />

        </div> */}
      </div>
    </div>
  );
};

export default Brand;
