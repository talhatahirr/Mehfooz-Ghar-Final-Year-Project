import React, { useContext, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Abar from "./Abar";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mg__top">
      <div className="mg__top-text">
        <div>
          <Abar />
        </div>
      </div>
      <div className=" mehfoozghar__navbar">
        <div className="mehfoozghar__navbar-links">
          <div className="mehfoozghar__navbar-links_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="mehfoozghar__navbar-links_container">
          <p>
            <Link to="/header">Home</Link>
          </p>
          <p>
            <Link to="/howItWorks">How It Works</Link>
          </p>
          <p>
            <Link to="/whychooseus">Why Choose Us</Link>
          </p>
          <p>
            <Link to="/home/feature">Categories</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
          {!props.currUser && (
            <p>
              <Link to="/home/types">Register</Link>
            </p>
          )}
          {!props.currUser && (
            <p>
              <Link to="/signin">Login</Link>
            </p>
          )}{props.currUser && (
          <p>
            <Link to={`/user/${props.currUser}`}>View Profile</Link>
          </p>)}
          
        </div>
        <div className="mehfoozghar__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000000"
              size={16}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000000"
              size={16}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="mehfoozghar__navbar-menu_container">
              <div className="mehfoozghar__navbar-menu_container-links">
                <p>
                  <Link to="/header">Home</Link>
                </p>
                <p>
                  <Link to="/howItWorks">How It Works</Link>
                </p>
                <p>
                  <Link to="/whychooseus">Why Choose Us</Link>
                </p>
                <p>
                  <Link to="/home/feature">Categories</Link>
                </p>
                <p>
                  <Link to="/contact">Contact Us</Link>
                </p>
                {!props.currUser && (
                  <p>
                    <Link to="/home/types">Register</Link>
                  </p>
                )}
                {!props.currUser && (
                  <p>
                    <Link to="/signin">Login</Link>
                  </p>
                )}
                <p>
                  <Link to="/">View Profile</Link>
                </p>
               
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
