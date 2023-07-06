import React from "react";
import { useState } from "react";
import "./login.css";

import { auth } from "../DbLayer/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const {dispatch}= useContext(AuthContext)
  // if(dispatch !== null || dispatch !== undefined){
  //   navigate("/")
  // }
  const handleLogin = (e) => {
    e.preventDefault();
  
    signInWithEmailAndPassword(auth, email, password)
    .then ((userCredential)=>{
      const user = userCredential.user;

      dispatch({type:"LOGIN", payload:user})
      if(user.email==="admin@mehfoozghar.com"){
        navigate("../Admin")
      }
      else 
       {
          navigate("/")
        }
      
      
    })
    .catch((error)=>{
      setError(true)
    })
  };
  return (
    <div className="login card my-2 mx-5 mb-5">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password</span>}
        {!error && <span>Success</span>}
      </form>
    </div>
  );
};

export default Login;
