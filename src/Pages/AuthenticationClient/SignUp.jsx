import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/nurse1.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../DbLayer/firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [newName, setNewName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if (currentUser) {
  //     const timer=setTimeout(() => {
       
  //       navigate("/");
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [currentUser, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const createUser = async (e) => {
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "Clients", res.user.uid), {
      name: newName,
      age: age,
      city: city,
      contact: contact,
      gender: gender,
      email: email,
      address: address,
      role: "client",
    });

    navigate("/signin");
  };

  return (
    <div>
      
        <section className="contactus-section">
          <div className="container card my-5">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row">
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold">
                      Sign Up as a client
                    </h1>
                    <p className="main-hero-para">
                      Discover top-notch service providers across various
                      categories. Sign up now for hassle-free booking.
                    </p>
                    <figure>
                      <img src={img} alt="contatUsImg" className="img-fluid" />
                    </figure>
                  </div>

                  {/* right side contact form  */}
                  <div className="contact-rightside col-12 col-lg-7 my-5">
                    <form method="POST" onSubmit={handleSignUp}>
                      <div className="row">
                        <div className="col-12 col-lg-6 my-1">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="name"
                            onChange={(e) => {
                              setNewName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 col-lg-6 my-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 my-1 email">
                        <input
                          type="password"
                          placeholder="password"
                          className="form-control"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="age"
                          className="form-control"
                          onChange={(e) => {
                            setAge(e.target.value);
                          }}
                        />
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 my-1">
                          <input
                            type="text"
                            placeholder="contact"
                            className="form-control"
                            onChange={(e) => {
                              setContact(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row my-1">
                        <div className="col-12 ">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Add Address"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 my-1">
                          <input
                            type="text"
                            placeholder="city"
                            className="form-control"
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 my-1">
                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={gender === "male"}
                              onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                          </label>

                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={gender === "female"}
                              onChange={(e) => setGender(e.target.value)}
                            />{" "}
                            Female
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value="none"
                              checked={gender === "none"}
                              onChange={(e) => setGender(e.target.value)}
                            />{" "}
                            Prefer not to say
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success w-100"
                        onClick={createUser}
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
      
    </div>
  );
};

export default SignUp;
                   
