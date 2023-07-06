import React from "react";
import "./whatMEHFOOZ.css";
import img from "../../assets/svg/1.svg"
import img2 from "../../assets/svg/2.svg"
import img3 from "../../assets/svg/3.svg"
import img4 from "../../assets/svg/4.svg"
import img5 from "../../assets/svg/5.svg"
import img6 from "../../assets/svg/6.svg"
import img7 from "../../assets/svg/7.svg"
import img8 from "../../assets/svg/8.svg"
import img9 from "../../assets/svg/9.svg"
import img10 from "../../assets/svg/10.svg"

const WhatMEHFOOZ = () => {

  const images =[img,img2,img3,img4,img5,img6,img7,img8,img9,img10]
  const title = "Why Choose Us";
  const subtitle =
    " Mehfooz Ghar provides hassle free, at-home quality services for a range of your needs.";
  const benefits = [
    "One platform. Multiple services. Total convenience.",
    "Reliable services for your peace of mind.",
    "Schedule an appointment with professionals anytime, anywhere.",
    "Browse our Muhafiz in just one application.",
  "Verified professionals at your service.",
    "Trust us for all your healthcare and handyman needs.",
    "Your ultimate solution for home and workplace services.",
    "Simplify your life with our one-stop-shop.",
    "The easiest way to transform your space.",
    "Experience a hassle-free and seamless service.",
  ];
  return (
    <div>
      <div className="text-center" id="services">
        <h2 className="green-clr">{title}</h2>
        <p>{subtitle}</p>
      </div>
      
        < div class="catchphrase-boxes">
          {benefits.map((b,i)=>{return(<div class="catchphrase-box">
            <div class="catchphrase-box__svg">
             <img className="svgs" src={images[i]}/> 
            </div>
            <div class="catchphrase-box__text">
              <h2>{b}</h2>
            </div>
          </div>)})}
        
       
      </div>
    </div>
  );
};

export default WhatMEHFOOZ;
