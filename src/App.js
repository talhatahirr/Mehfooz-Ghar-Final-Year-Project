import "./App.css";
import React from "react";
import About from "./Pages/About";
import Features from "./containers/features/Features";
import { Routes, Route, Navigate } from "react-router-dom";
import Category from "./components/category-card/Category";
import Layout from "./containers/layout/Layout";

import SubStaff from "./DbLayer/SubStaff";
import MedicalSub from "./components/category-card/Subcategories/Medical";
import CTSub from "./components/category-card/Subcategories/Caretaker";
import OSCategory from "./components/category-card/Subcategories/Otherstaff";
import EmployeeProfile from "./EmployeeProfile";
import ContactForm from "./Pages/ContactForm";
import WorkingStaff from "./WorkingStaff";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin/AddEmployeeFields"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AddEmployee from "./Pages/Admin/AddEmployee";
import ApplicationForm from "./Pages/ApplicationForm";
import SignUpTypes from "./Pages/SignUpTypes";
import WorkerCategorySignUp from "./Pages/WorkerCategorySignUp";
import AdminPanel from "./Pages/Admin/AdminPanel";
import Users from "./DbLayer/Users";
import ViewUsers from "./Pages/ViewUsers";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatMEHFOOZ from "./containers/whatMEHFOOZ/WhyChooseUs";
import Appointment from "./Pages/Appointment";
import SignUp from "./Pages/AuthenticationClient/SignUp";
import Signout from "./Signout";
import CustomerProfile from "./CustomerProfile";
import SpecialJob from "./Pages/SpecialJob";
import ViewAppointmentsClients from "./Pages/ViewAppointments";
import WorkerAppointmentRequest from "./Pages/WorkerAppointmentRequest";
import AppointmentsReq from "./AppointmentsReq";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signin"></Navigate>;
  };
  const currUserCat =()=>{ return  currentUser.Category?currentUser.Category :  <Navigate to="/signin"></Navigate>} ;
  const userName = ()=>{ return  currentUser.userName?currentUser.userName :  <Navigate to="/signin"></Navigate>} ;
  const userid = ()=>{ return  currentUser.userid?currentUser.userid :  <Navigate to="/signin"></Navigate>} ;
  console.log(userid);
  return (
    <div className="App background">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/header" element={<Header />} />
          <Route path="/howitworks" element={<Brand />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/specialapp" element={<SpecialJob />} />

          <Route path="/whychooseus" element={<WhatMEHFOOZ />} />

          <Route path="/home/types" element={<SignUpTypes />} />

          <Route
            path={`/appointment/:employeeType/:id`}
            element={
              <RequireAuth>
                <Appointment userid={userid} />
              </RequireAuth>
            }
          />
          <Route
            path="/user/:id"
            element={
              <RequireAuth>
                <CustomerProfile currUser={currentUser} />
              </RequireAuth>
            }
          />
          <Route
            path="/appointments/:id/:name"
            element={
              <RequireAuth>
                <ViewAppointmentsClients
                  custid={userid}
                  custname={userName}
                  custcat={currUserCat}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/appointments/:id"
            element={
              <RequireAuth>
                <AppointmentsReq />
              </RequireAuth>
            }
          />
          <Route
            path="/ViewAppointments/:id"
            element={
              <RequireAuth>
                <WorkerAppointmentRequest />
              </RequireAuth>
            }
          />
          <Route path="/home/types/Worker" element={<WorkerCategorySignUp />} />

          <Route path="/clientSignUp" element={<SignUp />} />

          <Route path="/about" element={<About />} />
          {/* Staff categories*/}
          <Route path="/staff/:subCategory" element={<SubStaff />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/viewUsers" element={<Users />} />

          <Route path="/viewUsers/:type" element={<ViewUsers />} />
          <Route path="/EmployeeFields/:type" element={<Admin />} />

          <Route path="/home/categories" element={<Category />} />
          <Route path="/home/categories/medical" element={<MedicalSub />} />
          <Route path="/home/categories/caretakers" element={<CTSub />} />
          {/* <Route
            path="/meeting"
            element={
              
                <Meeting/>
              
            }
          /> */}
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
          <Route path="/Admin" element={<AdminPanel />} />

          <Route path="/home/categories/others" element={<OSCategory />} />
          <Route
            path="/:employeeType/:id"
            element={<EmployeeProfile custid={userid} />}
          />

          <Route path="/1" element={<WorkingStaff />} />

          <Route path="/home/feature" element={<Features />} />
          <Route path="/signin" element={<Login />} />

          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
