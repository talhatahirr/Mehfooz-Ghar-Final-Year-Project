import React from "react";
import "./footer.css";
import logo from "../../assets/LOGO.png";
import { Icon } from "@iconify/react";
const footer_menu = {
  Home: "#",
  "About Us": "#",
  "Mehfooz Ghar": "#",
  Categories: "#",
  Testimonials: "#",
  "Contact Us": "#",
};
const social_media = {
  "skill-icons:instagram": "",
  "logos:facebook": "",
  "skill-icons:twitter": "",
  "logos:google-gmail": "",
  "skill-icons:linkedin": "",
  "vscode-icons:file-type-outlook": "",
};

const Footer = () => {
  return (
    <div className="div-footer bg-basic p-5" id="contactus">
      <div className="div-footer bg-basic d-flex  justify-content-center ">
        <div className=" d-flex menu text-white col-lg-9 border-bottom">
          {Object.entries(footer_menu).map(([name, url]) => {
            return (
              <div className="mx-auto">
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center ">
        <div className="   menu text-white col-lg-7 mt-5 ">
          <div className="d-flex justify-content-center align-items-center">
            {Object.entries(social_media).map(([name, url]) => {
              return (
                <div className="mx-auto d-flex justify-content-center align-items-center border rounded-circle social_handles">
                  <div className="">
                    <Icon
                      icon={name}
                      style={{ color: "black", width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
      <p className="text-white text-center mt-5 ">© 2020-2023 Privacy — Terms</p>
      
    </div>
  );
};

export default Footer;
