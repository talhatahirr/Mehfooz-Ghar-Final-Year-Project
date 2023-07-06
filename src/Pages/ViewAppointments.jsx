import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { db } from "../DbLayer/firebase-config";
import { collection, getDocs } from "firebase/firestore";
const ViewAppointments = (props) => {
  const { id, name } = useParams();
  const [appo, setAppo] = useState([]);

  const muhafizRef = collection(db, "appointments");


  
  useEffect(() => {
    const getAppointments = async () => {
      const data = await getDocs(muhafizRef);
      setAppo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAppointments();
  }, []);

  
  return (
    <div>
      <div>
        <section className="table__header">
          <h1>Appointments</h1>
        </section>
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Customer's ID</th>
              <th>Worker's ID</th>
              <th>Customer's Name</th>
              <th>Patient's Name</th>
              <th>Contact Number</th>
              <th>Gender</th>
              <th>Meeting Date Preference</th>
              <th>Previous Illness</th>
              <th>Accepted by Worker?</th>
              <th>Meet Link</th>
            </tr>
          </thead>
          
          <tbody>
            {appo.map((a) => (
              <tr key={a.id}>
                <td>{String(props.custid)}</td>
                <td>{a.id}</td>
                <td>{name}</td>
                <td>
                  {a.firstName} {a.lastName}
                </td>
                <td>{a.phone}</td>
                <td>{a.gender}</td>
                <td>
                  {a.preffDate} till {a.tillDate}
                </td>
                <td>{String(a.prevIllness)}</td>
                <td>No</td>
                <td>{a.googleMeetLink && (
                     <Link to={`${a.googleMeetLink}`}>
                  <button>Meet Link</button>
                  </Link>
                ) || <button>Meet Link</button>}
                   
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewAppointments;
