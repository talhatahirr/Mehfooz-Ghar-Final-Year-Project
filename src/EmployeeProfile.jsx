import React, { useState, useEffect, useContext } from "react";
import { db } from "./DbLayer/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContext } from "./context/AuthContext";
import "./App.css"
config.autoAddCss = false;

const EmployeeProfile = (props) => {
  const { employeeType, id } = useParams();
  const [emp, setEmp] = useState([]);

  const employeeCollectionRef = collection(db, employeeType);
  const currentUser = props.custid;
  

  console.log(currentUser)
  console.log(id)
  useEffect(() => {
    const getEmployees = async () => {
      const data = await getDocs(employeeCollectionRef);
      setEmp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEmployees();
  }, []);

  const found =
    emp &&
    emp.find((obj) => {
      return String(obj.id) === String(id);
    });


  return (
    <div className="container my-3">
      {found && (
        <section className="contactus-section">
          <div className="container card my-5">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row">
                <div className="mehfoozghar__header-content__input fs-16 mt-3">
                      <Link to="/home/types">
                        <button type="button" className="secondary-clr">
                        ← Go Back
                        </button>
                      </Link>
                      
                    </div>
                  <div className="contact-leftside col-12 col-lg-5">
                    <h3 className="main-heading fw-bold">{found.name}</h3>  
                    <figure>
                      <img
                        src={found.image.downloadURL}
                        alt="contatUsImg"
                        className="img-fluid"
                        width="150"
                        border-radius="75px"
                      />
                    </figure>
                  </div>
                  <div className="contact-rightside col-12 col-lg-7 my-3">
                    <h2 className="main-heading fw-bold">{employeeType}</h2>
                    <div className="col-12 col-lg-12 ">
                      <FontAwesomeIcon icon={faStar} className="mx-0" color="yellow" />{" "}
                      {found.star} by {found.users} users
                      <h2>
                        Age: {found.age} <br />
                        Gender: {found.gender} <br />
                        Contact: {found.contact} <br />
                        Email: {found.email} <br />
                        Address: {found.address} <br />
                        City: {found.city} <br />
                      </h2>
                    </div>{" "}
                    <div className="mehfoozghar__header-content__input fs-16 mt-3">
                      {currentUser === found.id? (
                    <Link to={`/ViewAppointments/${found.id}`}>
                  
                      <button type="button" className="secondary-clr ">
                        View Appointments
                      </button>
                    </Link>): (
                      <Link to={`/appointment/${found.id}`}>
                  
                      <button type="button" className="secondary-clr ">
                        Book an Appointment
                      </button>
                    </Link>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
      )}
    </div>
  );
};

export default EmployeeProfile;
