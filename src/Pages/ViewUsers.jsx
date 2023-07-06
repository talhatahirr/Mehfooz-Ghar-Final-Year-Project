import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../DbLayer/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import { useEffect } from 'react';
import WorkersTable from '../WorkersData';
const ViewUsers = () => {
//   const {type}= useParams()
//   const [data,setData]= useState([]);
// useEffect(()=>{
//   const fetchData = async()=>{
//     let list=[]
//     try{
//       const querySnapshot = await getDocs(collection(db,type));
//       querySnapshot.forEach((doc)=>{
//         list.push({id:doc.id, ...doc.data()})
//       })
//       setData(list)
      
//     }
//     catch (err){
//       console.log(err)
//     }
//   }

//   fetchData()
// },[])

  return (
    <div className="card-group my-3 mx-auto">
     <WorkersTable/>
    </div>
  )
}

export default ViewUsers
