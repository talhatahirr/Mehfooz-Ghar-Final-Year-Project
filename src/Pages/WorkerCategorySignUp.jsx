import React from 'react'

const WorkerCategorySignUp = () => {
  const jobsInfo = [
   {Category: "Medical",
   SubCategory:[
    {1:"Doctor"},
    {2:"Nurse"}]
  },   
   {Category: "CareTaker",
    SubCategory:[
    {  1:"Day-Care Nanny"},
    {2:"Babysitter"},
    {3:"Governess"},
    {4:"Housemaid"},
    {5:"Mother's Helper"},
   {6:"Caregiver"}]
  },
   {Category: "Others",
    SubCategory:[{1:"Housekeeper"},
   {2: "Office Assistant"},
 { 3:   "Electrician"},
{    4: "Painter"},
  {   5:"Mechanic"},
  {   6:"Plumber"}
    ]
  },
  ]
  
  return (
    <div>
      <h1 class="text-center text-success my-5">Choose Which Category you want to apply for</h1>
      <div class="card-group">
      <div>
      {jobsInfo.map((job) => (
        <div class ="card my-5">
       
          <h3 class ="text-success my-2">{job.Category}</h3> 
          <br/> 
          <h4>Check All that apply</h4>
          {job.SubCategory.map((subJob) => (
            <div>
              <input type="checkbox" id={Object.values(subJob)} />

            </div>
          ))}
        </div>
      ))}

    </div>
      </div>
    </div>
  )
}

export default WorkerCategorySignUp
