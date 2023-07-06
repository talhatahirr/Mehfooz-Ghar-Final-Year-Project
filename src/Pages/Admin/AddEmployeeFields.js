import React from "react";
import { useState, useEffect, useContext } from "react";
import { auth, db, storage } from "../../DbLayer/firebase-config";
import {  setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Admin() {
  const employeeType = useParams()
  const [newName, setNewName] = useState("");
  const [Category, setNewCategory] = useState(0);
  const [gender, setGender] = useState(0);
  const [experience, setExperience] = useState(0.0);
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [qualification, setQualification] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [star, SetStar]= useState();
  const [tUsers,setUsers]= useState();
  const [file, setFile] = useState("");
  
  const [per, setPerc] = useState(null);
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  useEffect(() => {



    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage({ downloadURL });
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  const createEmployee = async (e) => {
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, employeeType.type, res.user.uid), {
      name: newName,
      age: age,
      city: city,
      contact: contact,
      qualification: qualification,
      category: Category,
      gender: gender,
      experience: experience,
      username: userName,
      email: email,
      image: image,
      star: star,
      users: tUsers,
  
    });
    navigate(-1);
  };


  return (
    <div className="App">
      <div class="card mx-5 my-5">
        <h4>Create New {employeeType.type}</h4>
        <input
          type="file"
          id="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
         <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="qualification"
          onChange={(e) => {
            setQualification(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="work experience"
          onChange={(e) => {
            setExperience(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
                <input
          type="number"
          placeholder="ratings"
          onChange={(e) => {
            SetStar(e.target.value);
          }}
        />
                        <input
          type="number"
          placeholder="users"
          onChange={(e) => {
          setUsers(e.target.value);
          }}
        />
       
        <button disabled={per !== null && per < 100} onClick={createEmployee}>
          Create Employee
        </button>
      </div>
      <br />
    </div>
  );
}

export default Admin;
