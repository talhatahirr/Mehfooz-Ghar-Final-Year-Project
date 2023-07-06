import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./layout.css";
import "../../App.css"
import { AuthContext } from "../../context/AuthContext";
const Layout = (props) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <div className="gradient__bg content">
    
      <Navbar />

        {props.children}
        </div>
        
    </>
  );
};

export default Layout;
