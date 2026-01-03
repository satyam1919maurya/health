import React, { useEffect, useState } from "react";
import "./doctorp.css";

import Doctorsidebar from "../components/doctorsidebar";
import Header from "../../user/components/header";
import { redirect, useParams } from "react-router-dom";
import { Activity } from "react";
import { useCookies } from "react-cookie";

const Doctorp = () => {
    const [cookie, createcookie, removecookie] = useCookies()

    const [doctorname, setdoctorname] = useState("")
    const [doctoremail, setdoctoremail] = useState("")
    const [doctorphone, setdoctorphone] = useState("")
    const [hospitalname, sethospitalname] = useState("")
    const [qualification, setqualification] = useState("")
    const [specialization, setspecialization] = useState("")

    const [isvisible, setIsvisible] = useState(false)

    const openprofileform = () => {
        setIsvisible(true)
    }
    const closeeditform = () => {
        setIsvisible(false)
    }

    const { id } = useParams()
    // Temporary example data (replace with API later)
    const doctor = {
        name: "Dr. Aisha Sharma",
        specialization: "Cardijfjgologist",
        email: "aisha.sharma@hospital.com",
        phone: "+91 9876543210",
        experience: "10 Years",
        hospital: "City Care Hospital",
    };

    const appointments = [
        { patient: "Rohan Kumar", date: "14 Oct 2025", time: "10:30 AM", status: "Completed" },
        { patient: "Priya Singh", date: "14 Oct 2025", time: "12:00 PM", status: "Pending" },
        { patient: "Aman Yadav", date: "15 Oct 2025", time: "09:00 AM", status: "Upcoming" },
    ];

    const getSingleDoctor = async () => {
        const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor/${id}`, {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const d = await re.json()
        // console.log(d)
        setdoctorname(d.Doctorname)
        setdoctoremail(d.email)
        setdoctorphone(d.phone)
        sethospitalname(d.hospitalname)
        setqualification(d.qualification)
        setspecialization(d.specialization)
    }



    const update = async () => {
        const re = await fetch("http://localhost:5000/doctor", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: id,
                nm: doctorname,
                ph: doctorphone,
                sp: specialization,
                qualification: qualification,


            })
        });
        const d = await re.json();
        createcookie("doctorname", doctorname)

        console.log(d)

    }



    useEffect(() => {
        getSingleDoctor()

    }, [])

    useEffect(() => {
        document.title = "Doctor Profile"
    }, [])

    return (
        // <div className="doctor-dashboard">
        <div className="main">
            <Doctorsidebar />
            {/* <Header /> */}

            <div className="m1-container">
                <div className="dashboard-content">
                    {/* Doctor Info Card */}
                    <div className="doctor-profile-card">
                        <div className="profile-left">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                                alt="Doctor"
                                className="doctor-img"
                            />
                        </div>
                        <div className="profile-right">
                            <h2>{doctorname}</h2>
                            <p><strong>Email:</strong> {doctoremail}</p>
                            <p><strong>Phone:</strong> +91 {doctorphone}</p>
                            <p><strong>Qualification:</strong> {qualification}</p>
                            <p><strong>Specialization: </strong> {specialization}</p>
                            <p><strong>Hospital:</strong> {hospitalname}</p>
                            <button onClick={openprofileform} className="edit-btn">Edit Profile</button>
                        </div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="stats-container">
                        <div className="stat-card">
                            <h3>Appointments Today</h3>
                            <p>8</p>
                        </div>
                        <div className="stat-card">
                            <h3>Pending Cases</h3>
                            <p>3</p>
                        </div>
                        <div className="stat-card">
                            <h3>Total Patients</h3>
                            <p>245</p>
                        </div>
                    </div>

                    {/* Appointment List */}
                    <div className="appointment-section">
                        <h2>Upcoming Appointments</h2>
                        <table className="appointment-table">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appt, index) => (
                                    <tr key={index}>
                                        <td>{appt.patient}</td>
                                        <td>{appt.date}</td>
                                        <td>{appt.time}</td>
                                        <td>
                                            <span className={`status ${appt.status.toLowerCase()}`}>
                                                {appt.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Quick Actions */}
                    <div className="quick-actions">
                        <button className="action-btn">View All Patients</button>
                        <button className="action-btn">Schedule Appointment</button>
                        <button className="action-btn">View Reports</button>
                    </div>
                </div>
            </div>

            <Activity mode={isvisible ? 'visible' : 'hidden'}>

                <div style={{ marginLeft: "300px" }} className="popup">
                    <div className="h">
                        <div className="editp" style={{ textAlign: "center", }}><h2 >Edit Profile</h2></div>
                        <div className="close" style={{ color: "red" }} onClick={closeeditform}><h2>X</h2></div>
                    </div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={doctorname}
                        onChange={(e) => setdoctorname(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={doctoremail}
                        disabled

                    />
                    <label>Phone</label>
                    <input
                        type="text"
                        value={doctorphone}
                        onChange={(e) => setdoctorphone(e.target.value)}

                    />
                    <label>Qualification</label>
                    <input
                        type="text"
                        value={qualification}
                        onChange={(e) => setqualification(e.target.value)}
                    />
                    <label>Specialization</label>
                    <input
                        type="text"
                        value={specialization}
                        onChange={(e) => setspecialization(e.target.value)}
                    />


                    <label>Hospital</label>
                    <input
                        type="text"
                        value={hospitalname}
                        disabled
                    // onChange={(e) => sethospitalname(e.target.value)}
                    />

                    <br />
                    <br />

                    <button onClick={update}>Update</button>
                </div>
            </Activity>



        </div>
    );
};

export default Doctorp;
