import React, { useState ,useEffect} from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { db } from "./DbLayer/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router";


const WorkersTable = () => {

    const {type} = useParams()
    console.log(type)
  const [workers, setWorkers] = useState([]);


  const muhafizRef = collection(db, type)

  
  useEffect(() => {
    const getMuhafiz = async () => {
      const data = await getDocs(muhafizRef);
      setWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMuhafiz();
  }, []);
  const handleEdit = (id) => {
    // Handle edit worker logic
    console.log("Edit worker with ID:", id);
  };

  const handleDelete = (id) => {
    // Handle delete worker logic
    console.log("Delete worker with ID:", id);
    setWorkers(workers.filter((worker) => worker.id !== id));
  };

  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>Job Completed</th>
          <th>Ratings</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((worker) => (
          <tr key={worker.id}>
            <td>
              <img src={worker.image.downloadURL} alt={worker.name} width={50} />
            </td>
            <td>{worker.username}</td>
            <td>{worker.name}</td>

            <td>{worker.email}</td>
            <td>{worker.contact}</td>
            <td>{worker.gender}</td>
            <td>{worker.qualification}</td>
            <td>{worker.users}</td>
            <td>{worker.star}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(worker.id)}>
                <FaEdit />
              </Button>{" "}
              <Button variant="danger" onClick={() => handleDelete(worker.id)}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default WorkersTable;
