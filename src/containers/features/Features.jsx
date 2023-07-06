import React from "react";
import "./features.css";
import blog5 from "../../assets/blog5.PNG";
import { Link } from "react-router-dom";
import blog2 from "../../assets/blog2.PNG";

import blog3 from "../../assets/blog3.jpg";

const featuresData = [
  {
    id:0,
    title: "Medical",
    text: "Professional and compassionate healthcare providers available for your loved ones' needs.",
    img: blog5,
  },
  {
    id:1,
    title: "Caretakers",
    text: "Choose from our reliable caretakers for exceptional care and peace of mind.",
    img: blog3,
  },
  {
    id:2,
    title: "Other Staff",
    text: "Skilled and reliable support staff available to assist you and your loved ones.",
    img: blog2,
  },
];

const Features = () => {
  return (
    <>
    <div id="aboutus">

      <div className=" p-5 ">


        <div className="d-flex flex-column align-items-center">
          <h2 className="green-clr">Browse Our Categories</h2>
          <div className=" w-50">
            <p className="card-text text-center">
              From skilled nurses and caretakers to reliable other staff, we
              offer everything you need to keep your home running smoothly.{" "}
            </p>
          </div>
        </div>

        <div className=" mt-5">
          <div className="row">
            {featuresData.map((e, i) => {
              return (
                <div className="col-lg-4 d-flex my-3 justify-content-center">
                  {e.title == "Other Staff"? 
                  <Link to ="../home/categories/others">
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
                  :
                  <Link to={`../home/categories/${e.title}`}>
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
                  </Link>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Features;
