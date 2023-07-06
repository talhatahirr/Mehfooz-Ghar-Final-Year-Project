import React, { useState, useEffect } from "react";
import { db } from "./DbLayer/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import img from "./assets/nurse1.png";
import "./containers/header/header.css";
const Profile = (props) => {
  const { id } = useParams();
  const [cl, setClient] = useState([]);

  const clientRef = collection(db, "Clients");

  useEffect(() => {
    const getClients = async () => {
      const data = await getDocs(clientRef);
      setClient(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getClients();
  }, []);

  const found =
    cl &&
    cl.find((obj) => {
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
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold">My Profile</h1>
                    <div className="mehfoozghar__header-content__input fs-16 mt-3">
                      <Link to="/home/types">
                        <button type="button" className="secondary-clr">
                          Edit Profile
                        </button>
                      </Link>
                      <Link to={`/appointments/${found.id}/${found.name}`}>
                        <button type="button" className="secondary-clr mx-2">
                          View Appointments
                        </button>
                      </Link>
                    </div>
                    <figure>
                      <img src={img} alt="contatUsImg" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="contact-rightside col-12 col-lg-7 my-3">
                    <h2 className="main-heading fw-bold">{found.name}</h2>
                    <div className="col-12 col-lg-12 ">
                      <h2>
                        Age: {found.age} <br />
                        Gender: {found.gender} <br />
                        Contact: {found.contact} <br />
                        Email: {found.email} <br />
                        Address: {found.address} <br />
                        City: {found.city} <br />
                      </h2>
                    </div><div className="mehfoozghar__header-content__input fs-16 mt-3">

                  <Link to="/signout">
                        <button type="button" className="secondary-clr">
                          Sign Out
                        </button>
                      </Link>
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

export default Profile;
