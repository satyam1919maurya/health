import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AdminDashboard = () => {
  const jump = useNavigate();
  const [cookie, ,] = useCookies();
  const [doctors, setDoctors] = useState()
  const [appointments, setappointments] = useState()
  const [hospitals, sethospitals] = useState()
  const [signups, setsignups] = useState()




  // get all doctors 
  const getdoctor = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    setDoctors(d.length)
  }

  // geting all appointment

  const getappointment = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/appointment`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();

    // console.log(d.length);
    setappointments(d.length)
    // jump("/appointmenttable")
  }

  // get all hospitals 

  const gethospital = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    //  console(d.length)
    sethospitals(d.length)

  }

  const signup = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    //  console.log(d.length)
    setsignups(d.length)

  }

  useEffect(() => {
    document.title = "Admin Dashboard";
  }, [])

  const goapp = () =>{
    jump("/appointmenttable")
  }
  const gohos = () =>{
    jump("/hospital")
  }
  const godoc = () =>{
    jump("/doctor")
  }



  useEffect(() => {
    getdoctor()
    getappointment()
    gethospital()
    signup()
  })

  return (
    <>
      <Sidebar />

      <div className="admin-page">

        {/* Header */}
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>Welcome Back, Admin</h2>
            <p>Monitor activities, manage users, doctors, and analytics easily.</p>
          </div>

          <img
            src="https://img.freepik.com/free-vector/admin-concept-illustration_114360-2332.jpg"
            alt="Admin Banner"
            className="hero-img"
          />
        </section>

        {/* Dashboard Stats */}
        <main className="dashboard-content">
          <div className="cards">

            <div className="card glass-card chi">
              <h3>Total Users</h3>
              <p>{signups}</p>
            </div>

            <div className="card glass-card chi" onClick={godoc}>
              <h3>Total Doctors</h3>
              <p>{doctors}</p>
            </div>

            <div className="card glass-card chi" onClick={goapp}>
              <h3>Appointments</h3>
              <p>{appointments}</p>
            </div>

            <div className="card  glass-card chi"onClick={gohos} >
              <h3>Hospital's</h3>
              <p>{hospitals}</p>
            </div>

          </div>
        </main>

      </div>
    </>
  );
};

export default AdminDashboard;
