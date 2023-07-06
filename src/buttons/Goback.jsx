import React from "react";
import { useNavigate } from "react-router-dom";

import "./goback.css";
const Goback = (props) => {
const navigate = useNavigate();
const goBack=()=>{
  navigate(-1);
}
  return (

    <div className={`container ${props.class==='btn-browse'?'d-flex justify-content-center align-items-center mb-4':''}`} >
      <button type="button" className={`btn  ${props.class}  text-white`} onClick={goBack}>
        {props.children}
      </button>
    </div>
  );
};

export default Goback;
