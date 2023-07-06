import React from "react";
import img from "../assets/nurse1.png";
import { useState } from "react";
import { db } from "../DbLayer/firebase-config";
import { setDoc, doc ,collection} from "firebase/firestore";
import { Link } from 'react-router-dom'
import "../App.css"
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
    address: "",
    city: "",
    age: null,
    date:new Date(),
    prevIllness:false,
    gender: "",
  });

  const employeeCollectionRef = collection(db, "contact");

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "contact", userData.phone), {
      ...userData,
    });
  };
  return (
    <section className="contactus-section">
      <div className="container card my-5 p-5">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-leftside col-12 col-lg-5">
                <h1 className="main-heading fw-bold">Have any queries?</h1>
                <p className="main-hero-para">
                  Whether you were unable to find any service you were looking for, or you have special request or a query, feel free to contact us!
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
                     <label htmlFor="fName"> First Name<input
                        type="text"
                        name="firstName"
                        id="fName"
                        className="form-control"
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}
                      /></label>
                   
                    <label htmlFor="lName"> Last Name<input
                        type="text"
                        name="firstName"
                        id="lName"
                        className="form-control"
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}
                      /></label>
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

                 
          
    <br />
    <h4>Please eleborate on what you were not able to find</h4>
    <input
          type="text"
          name="elaborate"
          id=""
          className="form-control"
          placeholder="Elaborate"
          value={userData.elaborate}
          onChange={postUserData}
        />

          <Link to="../">
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                  </Link>
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
