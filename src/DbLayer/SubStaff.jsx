import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Medical.css";
config.autoAddCss = false;
function SubCategoryStaff() {
  const [muhafiz, setMuhafiz] = useState([]);
  const {subCategory} = useParams();
  const muhafizCat = subCategory
  const muhafizRef = collection(db, subCategory);

  useEffect(() => {
    const getMuhafiz = async () => {
      const data = await getDocs(muhafizRef);
      setMuhafiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMuhafiz();
  }, []);


  return (
    <div>
      
       <h1 className="text-center text-success my-5">Our {subCategory} Staff</h1>
    <div class="card-wrapper">
       {muhafiz.map((employee) => {
          return (
            <div>
              {" "}
              <div class="card my-5 mx-5">
                <div class="card-header">{employee.name}</div>
                <div class="card-body ">
                <FontAwesomeIcon icon={faStar}  color="yellow" /> {employee.star} by {employee.users} users
                  <p>Age: {employee.age}</p>
                  <p>City: {employee.city}</p>
                  <p>Gender: {employee.gender == 1 ? "female" : "male"}</p>
                 
                  <Link to={`/${muhafizCat}/${employee.id}`}>
                    <button class="btn btn-primary">View More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  
  
  )
}

export default SubCategoryStaff;
