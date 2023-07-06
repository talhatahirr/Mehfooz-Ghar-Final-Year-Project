import React from "react";
import img from "../assets/nurse1.png";
import { useState } from "react";
import { db } from "../DbLayer/firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { Link } from 'react-router-dom'
const ApplicationForm = () => {

  const jobsInfo = [
    {Category: "Medical",
    SubCategory:[
     {1:"Doctor"},
     {2:"Nurse"}]
   },   
    {Category: "CareTaker",
     SubCategory:[
     {  1:"Day-Care Nanny"},
     {2:"Babysitter"},
     {3:"Governess"},
     {4:"Housemaid"},
     {5:"Mother's Helper"},
    {6:"Caregiver"}]
   },
    {Category: "Others",
     SubCategory:[{1:"Housekeeper"},
    {2: "Office Assistant"},
  { 3:   "Electrician"},
 {    4: "Painter"},
   {   5:"Mechanic"},
   {   6:"Plumber"}
     ]
   },
   ]

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    category: "",
    subMedical: "",
    subCaretaker:"",
    subOthers:"",
    age: null,
    qualification: "",
    checks:[],
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "application", userData.phone), {
      ...userData,
    });
  };
  return (
    <section className="contactus-section">
      <div className="container card my-5">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-leftside col-12 col-lg-5">
                <h1 className="main-heading fw-bold">Apply For Us</h1>
                <p className="main-hero-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt eaque alias similique.
                </p>
                <figure>
                  <img src={img} alt="contatUsImg" className="img-fluid" />
                </figure>
              </div>

              {/* right side contact form  */}
              <div className="contact-rightside col-12 col-lg-7 my-5">
                <form method="POST">
                  <div className="row">
                    <div className="col-12 col-lg-6 my-1">
                      <input
                        type="text"
                        name="firstName"
                        id=""
                        className="form-control"
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}
                      />
                    </div>
                    <div className="col-12 col-lg-6 my-1">
                      <input
                        type="text"
                        name="lastName"
                        id=""
                        className="form-control"
                        placeholder="Last Name"
                        value={userData.lastName}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 my-1">
                      <input
                        type="text"
                        name="phone"
                        id=""
                        className="form-control"
                        placeholder="Phone Number "
                        value={userData.phone}
                        onChange={postUserData}
                      />
                    </div>
                    <div className="col-12 col-lg-6 my-1">
                      <input
                        type="text"
                        name="email"
                        id=""
                        className="form-control"
                        placeholder="Email ID"
                        value={userData.email}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="row my-1">
                    <div className="col-12 ">
                      <input
                        type="text"
                        name="address"
                        id=""
                        className="form-control"
                        placeholder="Add Address"
                        value={userData.address}
                        onChange={postUserData}
                      />
                    </div>
                    <div className="col-12 my-1">
                      <input
                        type="text"
                        name="city"
                        id=""
                        className="form-control"
                        placeholder="Add City"
                        value={userData.city}
                        onChange={postUserData}
                      />
                    </div>
                  </div>

                  <div className="row">
                    < div className="col-12 ">
                    
                    {jobsInfo.map((job) => (
  <div>
    <br />
    <h3 className="text-success">{job.Category}</h3>
    <h4>Check All that apply</h4>
    {job.SubCategory.map((subJob) => (
      <div>
        <li>{Object.values(subJob)}</li>
      </div>
    ))}
    {job.Category === "Medical" && (
      <div className="col-12 my-1">
        <input
          type="text"
          name="subMedical"
          id=""
          className="form-control"
          placeholder="Add Subcategory numbers"
          value={userData.subMedical}
          onChange={postUserData}
        />
      </div>
    )
     } 
      {job.Category==="CareTaker" &&(
      <div className="col-12 my-1">
      <input
        type="text"
        name="subCaretaker"
        id=""
        className="form-control"
        placeholder="Add Subcategory numbers"
        value={userData.subCaretaker}
        onChange={postUserData}
      />
    </div>
    )}
    {job.Category==="Others" &&(
      <div className="col-12 my-1">
      <input
        type="text"
        name="subOthers"
        id=""
        className="form-control"
        placeholder="Add Subcategory numbers"
        value={userData.subOthers}
        onChange={postUserData}
      />
    </div>
    )}
  </div>
))}

        
                      <label>
                        Enter your date of birth
                        <input
                          type="date"
                          name="age"
                          className="form-control my-1"
                          placeholder="Enter your age"
                          value={userData.age}
                          onChange={postUserData}
                        />
                      </label>
                    </div>
                    <label>
                      Qualification
                      <input
                        type="Qualification"
                        name="qualification"
                        className="form-control my-1"
                        placeholder=""
                        value={userData.qualification}
                        onChange={postUserData}
                      ></input>
                    </label>
                  </div>
                  <div class="form-check form-checkbox-style">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label">
                      I agree that the information that I have provided is
                      correct and I will bring the relevant documents on
                      interview day.
                    </label>
                  </div>
<Link to=""></Link>
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
