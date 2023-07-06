import { useState, useEffect } from "react";
import { auth, db, storage } from "../DbLayer/firebase-config";
import {  setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
const ClientSignUp = () => {
  const [newName, setNewName] = useState("");
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [file, setFile] = useState("");
  
  const [per, setPerc] = useState(null);
  const [image, setImage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user= userCredential.user;
    })
    .catch((error)=>{
      const errorCode=error.code;
      const errorMessage = error.message;
    })
  };

  
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
  const createUser = async (e) => {
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "Clients", res.user.uid), {
      name: newName,
      age: age,
      city: city,
      contact: contact,
      gender: gender,
      email: email,
      image: image,
    });
  };

  return (
    <div className="container card my-5">
      <form onSubmit={handleSignUp}>
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
          type="number"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button disabled={per !== null && per < 100} onClick={createUser}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default ClientSignUp;
