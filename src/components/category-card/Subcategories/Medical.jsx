import React from "react";
import { Link } from "react-router-dom";

import blog2 from "../../../assets/blog2.PNG";

import blog3 from "../../../assets/blog3.jpg";
const Medical = [
  {
    id: 0,
    title: "Doctor",
    text: "In this world, with the increase in pandemics and business and all the hustle, booking a nurse or a nanny or a caretaker is becoming a trend now. It has a lot of perks of using this website",
    img: blog2,
  },
  {
    id: 1,
    title: "Nurse",
    text: "In this world, with the increase in pandemics and business and all the hustle, booking a nurse or a nanny or a caretaker is becoming a trend now. It has a lot of perks of using this website",
    img: blog3,
  },
];

const MedicalCategory = () => {
  return (
    <div id="aboutus">
      <div className="my-3 p-5">
        <div className="d-flex flex-column align-items-center">
          <h2 className="green-clr">Browse Our Categories</h2>
          <div>
            <p className="card-text text-center">
              From skilled nurses and caretakers to reliable other staff, we
              offer everything you need to keep your home running smoothly.{" "}
            </p>
          </div>
        </div>

        <div className=" mt-5">
          <div className="row">
            {Medical.map((e, i) => {
              return (
                <div className="col-lg-4 my-3 d-flex justify-content-center">
                  <Link to={`/staff/${e.title}`}>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        class="card-img-top"
                        src={e.img}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title green-clr">{e.title}</h5>
                        <p class="card-text">{e.text}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCategory;
