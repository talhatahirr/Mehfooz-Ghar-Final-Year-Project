import React from 'react'
import { Link } from 'react-router-dom'
const AddEmployee = () => {
  const employees = ["Doctor","Nurse","Housemaid", "Mother's Helper","Caregiver","Governess","Babysitter","Nanny","Plumber","Electrician","Mechanic","House Painter", "Housemaid","Office Assistant"]
  return (
    <div>
      <h1>Choose which employee you want to add</h1>
      <div className='card'>
        {employees.map((employee)=>{
          return(
          <Link to ={`../EmployeeFields/${employee}`}>
            <div className="my-2">
          <button className="btn btn-success w-100">{employee}</button></div></Link>)
        })}
      </div>
    </div>
  )
}

export default AddEmployee
