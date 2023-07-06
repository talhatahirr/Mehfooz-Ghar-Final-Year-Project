import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const jobsInfo = [
    { Category: "Medical", SubCategory: [{ 1: "Doctor" }, { 2: "Nurse" }] },
    {
      Category: "CareTaker",
      SubCategory: [
        { 1: "Day-Care Nanny" },
        { 2: "Babysitter" },
        { 3: "Governess" },
        { 4: "Housemaid" },
        { 5: "Mother's Helper" },
        { 6: "Caregiver" },
      ],
    },
    {
      Category: "Others",
      SubCategory: [
        { 1: "Housekeeper" },
        { 2: "Office Assistant" },
        { 3: "Electrician" },
        { 4: "Painter" },
        { 5: "Mechanic" },
        { 6: "Plumber" },
      ],
    },
  ];

  return (
    <div className="col-12 ">
      {jobsInfo.map((job) => (
        <div>
          <br />
          <h3 class="text-success">{job.Category}</h3>

          {job.SubCategory.map((subJob) => (
            <div>

              <Link to={`${Object.values(subJob)}`}>
              <button>{Object.values(subJob)}</button></Link>
            </div>
          ))}
        </div>
      ))}
      <h3 className="text-sucess">Customers</h3>
      <Link><button>Customers</button></Link>
    </div>
  );
};

export default Users;
