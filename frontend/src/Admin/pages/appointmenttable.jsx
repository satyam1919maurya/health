
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './hospital.css'
import '.././components/style.css'
import Sidebar from "../components/sidebar"
// import { connection } from "mongoose"



// function part of the form
const Appointmenttable = () => {
    // connection to backend

    // take useState

    // const [name, setname] = useState("")
    // const [phone, setphone] = useState("")
    // const [eamil, setemail] = useState("")
    // const [address, setaddress] = useState("")
    // const [hospital, sethospital] = useState("")
    // const [doctorname, setdoctorname] = useState("")
    // const [date, setdate] = useState("")
    // const [time, settime] = useState("")
    // const [message, setmessage] = useState("")


    const [appointmentdata, setappointmentdata] = useState([])

    const getappointment = async () => {
        // alert(name)
        const re = await fetch(`${import.meta.env.VITE_API_URL}/appointment`, {
            method: "GET",
            headers: { "content-type": "application/json" },

        })
        const d = await re.json();
        console.log(d);
        setappointmentdata(d)
    }

    useEffect(() => {
        getappointment();

    }, [])

    useEffect(()=>{
        document.title = "Appointment"
    } , [])


    // ---Body part ---
    return (
        <>
            <div className="main">
                <Sidebar />
                <div className="m1-container">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-1 ">
                            </div>
                            <div className="col-10  text-center">
                                <h1>Appointment</h1>

                            </div>
                            <div className="col-1 pt-2 text-center">
                                {/* <button className="btn btn-primary" onClick={openmodule}>ADD</button> */}

                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <table>
                            <tr>
                                <th>S.N.</th>
                                <th>PatientName</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Hospital</th>
                                <th>DoctorName</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Message</th>
                                {/* <th>Action</th> */}
                            </tr>
                            {
                                appointmentdata.map((x, i) => {
                                    return (
                                        <tr>
                                            < td > {i + 1}</td>
                                            <td>{x.patientname}</td>
                                            <td>{x.phone}</td>
                                            <td>{x.patientemail}</td>
                                            <td>{x.address}</td>
                                            <td>{x.hospitalname}</td>
                                            <td>{x.doctorname}</td>
                                            <td>{x.date}</td>
                                            <td>{x.time}</td>
                                            <td>{x.message}</td>
                                        </tr>

                                    )
                                })
                            }
                        </table>
                    </div>

                </div >
            </div >
        </>
    )

}
export default Appointmenttable



















