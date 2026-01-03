import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./doctorprofile.css";
// import Sidebar from "../../Admin/components/sidebar";
import Doctorsidebar from "../components/doctorsidebar";
import { Activity } from "react";
import { useCookies } from "react-cookie";
// import Sidebar from "../../../Admin/components/Sidebar";

const Doctorappointment = () => {
  const [patientname, setpatientname] = useState(false);
  const [patientemail, setpatientemail] = useState("");
  const [apponitments, setapponitments] = useState([]);
  const [message, setmessage] = useState("");
  const [date, setdate] = useState("");
  const [phone, setPhone] = useState("");
  const [time, settime] = useState("");
  // const [email, setEmail] = useState("");

  // cookies

  const [cookie, ,] = useCookies()

  const openModal = () => {
    document.getElementById("profile-modal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("profile-modal").style.display = "none";
    setEditMode(false);
    resetForm();
  };




  const getappointment = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/appointment/${cookie.doctoremail}`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    // console.log(d)
    setapponitments(d)
  }




  useEffect(() => {
    getappointment()

  }, []);

  useEffect(() => {
    document.title = "Doctor Appointments"
  }, [])

  return (
    <>
      <div className="main">
        <Doctorsidebar />
        <div className="m1-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 text-center">
                <h1>Appointment's</h1>
              </div>
              {/* <Activity> */}
              {/* <div className="col-2 text-end">
                  <button className="btn btn-primary" onClick={openModal}>
                    ADD
                  </button>
                </div> */}
              {/* </Activity> */}
            </div>
          </div>

          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Massage</th>

                </tr>

              </thead>
              <tbody>
                {apponitments.map((x, i) => (
                  <tr key={x._id}>
                    <td>{i + 1}</td>
                    <td>{x.patientname}</td>
                    <td>{x.patientemail}</td>
                    <td>{x.phone}</td>
                    <td>{x.date}</td>
                    <td>{x.time}</td>
                    <td>{x.message}</td>

                  </tr>

                ))}
              </tbody>
            </table>
          </div>

          {/* modal form */}
          <div className="profile-form" id="profile-modal">
            <div className="form-close" onClick={closeModal}>
              <h3>X</h3>
            </div>
            <div className="form-header">
              <h1>{"Add Doctor"}</h1>
            </div>

            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter doctor name"
                value={patientname}
                onChange={(e) => setpatientname(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={patientemail}
                onChange={(e) => setpatientemail(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label>Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Time</label>
              <input
                type="text"
                value={time}
                onChange={(e) => settime(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
            </div>


          </div>
        </div>


      </div>
    </>
  );
};

export default Doctorappointment;
