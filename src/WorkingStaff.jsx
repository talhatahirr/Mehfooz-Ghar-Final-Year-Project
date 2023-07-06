import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./api/employees";
const WorkingStaff = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("/Employees").then((res) => setMyData(res.data));
  });
  return (
    <div>
      <h1>Staff</h1>
      {myData.map((post) => {
        const { name, age } = post;
        return (
          <div className="card" key={`_id`}>
            <h2>{name}</h2>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkingStaff;
