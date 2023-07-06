import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../DbLayer/firebase-config";

import { collection, getDocs } from "firebase/firestore";
import CTAButton from "../../buttons/CTAButton";

const AdminPanel = ({children}) => {
  const [admin, setAdmin] = useState([]);
  const adminRef = collection(db, "Admin");
  const { currentUser } = useContext(AuthContext);
  const adminAccess = currentUser.uid;

  useEffect(() => {
    const getAdmin = async () => {
      const data = await getDocs(adminRef);
      setAdmin(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAdmin();
  }, []);

  const found =
    admin &&
    admin.find((obj) => {
      return String(obj.id) === String(adminAccess);
    });
  console.log(found);

  return (
    <div>
      {found && (
        <>
        <h1 className="text text-success">Choose What You Want To Do</h1>
      <Link to="/viewUsers">
        <button className="btn btn-success">View Users</button>
      </Link>
      <br />
      <br />
      <Link to="/addemployee">
        <button className="btn btn-success">Add Employees</button>
      </Link>
      <br />
      <br />
{children}
      </>
      )}
      {!found && (<>
        <h1>access denied</h1>
        <CTAButton link='/signin' btntext="Sign in"/></>
      )}
    </div>
  );
};

export default AdminPanel;
