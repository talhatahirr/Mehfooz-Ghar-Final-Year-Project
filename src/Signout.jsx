import React from "react";
import "./Pages/login.css";

import { auth } from "./DbLayer/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./containers/header/header.css";

const Signout = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: "LOGOUT" });
        console.log("Signed out successfully");
        navigate("../header")
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <h1>Sign Out</h1>
      <div className="mehfoozghar__header-content__input fs-16 mt-3 ">
      <button onClick={handleLogout}>Sign Out</button>
    </div>
    </div>
  );
};

export default Signout;
