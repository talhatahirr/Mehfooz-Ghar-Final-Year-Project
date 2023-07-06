import React, { useState ,useEffect} from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { db } from "./DbLayer/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./table.css";
import { useParams } from "react-router";


const AppointmentsData = (props) => {


  const [appo, setApp] = useState([]);


  const appointmentsRef = collection(db, "appointments")

  
  useEffect(() => {
    const getAppointments = async () => {
      const data = await getDocs(appointmentsRef);
      setApp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAppointments();
  }, []);


  return (
    <div>
    <section className="table__header"><h1>Appointments</h1></section>
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>Worker's Name</th>
          <th>Customer's ID</th>
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
        {appo.map((worker) => (
          <tr key={worker.id}>
            <td>{worker.doctorName}</td>
            <td>{String(props.custid)}</td>
            <td>{String(props.custname)}</td>
            <td>{worker.firstName} {worker.lastName}</td>
            <td>{worker.phone}</td>
            <td>{worker.gender}</td>
            <td>{worker.preffDate} till {worker.tillDate}</td>
            <td>{String(worker.prevIllness)}</td>
            <td>No</td>
            <td><button>Meet Link</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default AppointmentsData;
