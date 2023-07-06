import React from "react";
import "./category.css";
import blog2 from "../../assets/blog2.PNG";

import blog3 from "../../assets/blog3.jpg";
import { Link } from "react-router-dom";
const types = [
  {
    img: blog2,
    id: 0,
    title: "Permanent",
    text: "Hire our Muhafiz on permanent basis. Sign a contract with them and transform your house & workplace.",
  },
  {
    img: blog3,
    id: 1,
    title: "Temporary",
    text: "Hire our Muhafiz on temporary basis. per-hour service charges will apply.",
  },
];
const Category = (props) => {
  return (
    <>
      {typeof props.id == "undefined" && (
        
        <div className="container mt-5">
          <div className="row">
            {types.map((e, i) => {
              return (
                <div className="col d-flex my-3 justify-content-center">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src={e.img}
                      alt="Card image cap"
                    />
                    <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                      <h5 class="card-title green-clr">{e.title}</h5>
                      <p class="card-text">{e.text}</p>
                    </div>
                    <Link to = "/home/Feature">
                    <button type="button" class="btn btn-success">Browse</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
    </>
  );
};

export default Category;
