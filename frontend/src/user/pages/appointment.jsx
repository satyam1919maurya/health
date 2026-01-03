import React, { useState } from "react";
import "./Appointment.css";
import Header from "../components/header";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Activity } from "react";

const Appointment = () => {
  const [cookie, createcookie, removecookie] = useCookies()

  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [hospitalname, sethospitalname] = useState("")
  const [hospitalid, sethospitalid] = useState("")
  const [doctorname, setdoctorname] = useState("")
  const [doctorid, setdoctorid] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [message, setmessage] = useState("")
  const [doctoremail, setdoctoremail] = useState("")

  //  const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   date: "",
  //   time: "",
  //   hospital: "",
  //   doctor: "",
  //   address: "",
  //   message: "",
  // });
  const jump = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cookie.useremail) {
      alert("Please login")
      jump("/login")
      return
    }
    if (!name || !phone || !email || !address || !hospitalname || !hospitalid || !doctorname || !doctorid || !date || !time || !message) return alert("Please fill all fields")
    // alert(cookie.useremail)
  // alert(doctoremail) 
  // return;
    const re = await fetch(`${import.meta.env.VITE_API_URL}/appointment`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        pname: name,
        phone: phone,
        pemail: cookie.useremail,
        address: address,
        hospitalid: hospitalid,
        hospitalname: hospitalname,
        doctorname: doctorname,
        doctorid: doctorid,
        date: date,
        time: time,
        message: message,
        doctoremail:doctoremail 
      })
    });
    const d = await re.json()
    console.log(d)
    if(d.msg == "Booked Appointment"){
      jump("/welcome")
    }
  };

  // gethospital in option in the appointment form-----


  const [hospitaldata, sethospitaldata] = useState([])
  const [doctordata, setdoctordata] = useState([])

  const gethospital = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    sethospitaldata(d);
  }
  const getdoctors = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    setdoctordata(d);
    // console.log(d)
  }
  // getting single hospital data 
  const getHospitalname = async (id) => {
    sethospitalid(id)
    const url = `${import.meta.env.VITE_API_URL}/hospital/` + id;
    const re = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
    const d = await re.json()
    // console.log(d)
    sethospitalname(d.name)

  }
  // getting single hospital data 
  const getdoctorname = async (id) => {
    setdoctorid(id)
    const url = `${import.meta.env.VITE_API_URL}/doctor/` + id;
    const re = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
    const d = await re.json()
    // console.log(d)
    setdoctorname(d.Doctorname)
    setdoctoremail(d.email)
    

  }


  useEffect(() => {
    gethospital();
    getdoctors()
    if(cookie.useremail) setemail(cookie.useremail)
  }, [])

  return (
    <div className="appointment-container">
      <Header />
      <form className="appointment-box" onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>

        <div className="form-row">
          <div className="input-group half">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => { setname(e.target.value) }}
              
              />
          </div>

          <div className="input-group half">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone number"
              onChange={(e) => { setphone(e.target.value) }}
              
              />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group half">
            <label>Email</label>
            <input
              type="email"
              name="email"
              disabled={!cookie.useremail ? false : true}
              value={cookie.useremail ? cookie.useremail : ""}
              placeholder="Enter your email"
              onChange={(e) => { setemail(e.target.value) }}
              
              />
          </div>

          <div className="input-group half">
            <label>Hospital</label>
            <select name="hospital" onChange={(e) => { getHospitalname(e.target.value) }}  >
              <option value="">Select Hospital</option>


              {hospitaldata.map((x) => (
                <option key={x._id} value={x._id}>{x.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group half">
            <label>Doctor</label>
            <select name="doctor" onChange={(e) => { getdoctorname(e.target.value) }}  >
              <option value="">Select Doctor</option>

              {doctordata.map((x) => (
                <option key={x._id} value={x._id}>{x.Doctorname}</option>
              ))}
            </select>
          </div>

          <div className="input-group half">
            <label>Date</label>
            <input
              type="date"
              name="date"
              onChange={(e) => { setdate(e.target.value) }}
              
              />
          </div>
        </div>
       

        <div className="form-row">
          <div className="input-group half">
            <label>Time</label>
            <input
              type="time"
              name="time"
              onChange={(e) => { settime(e.target.value) }}
              
              />
          </div>

          <div className="input-group half">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              onChange={(e) => { setaddress(e.target.value) }}

            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group full">
            <label>Message</label>
            <textarea
              name="message"
              rows="2"
              placeholder="Any specific concern..."
              onChange={(e) => { setmessage(e.target.value) }}
            ></textarea>
          </div>
        </div>

        {/* <Link to = "/welcome"> */}
        <button type="submit" className="submit-btn">
          Confirm Appointment
        </button>
        {/* </Link> */}
      </form>

       
    </div>
  );
};


export default Appointment