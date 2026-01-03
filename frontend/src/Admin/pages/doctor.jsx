import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import './doctor.css'
import { Activity } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Doctor = () => {

  const [doctorname, setdoctorname] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [gender, setgender] = useState("")
  const [hospital, sethospital] = useState("")
  const [specialization, setspecialization] = useState("")
  const [qualification, setqualification] = useState("")
  const [hospitalID, sethospitalID] = useState("")

  // state for get data and map data 
  const [hospitaldata, sethospitaldata] = useState([])

  // Reset form-----------

  const resetform = () => {
    setdoctorname("")
    setphone("")
    setemail("")
    setgender("")
    sethospital("")
    setspecialization("")
    setqualification("")
    // sethospitalID("")

  }


  // function for the form

  const openmodule = () => {
    const open = document.getElementById("m")
    open.style.display = "block"
    resetform()
  }


// popup function 
  const showToast = (msg,type) => {
    toast[type](msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    })

  }


  const closemodule = () => {
    setEditMode(false)
    const close = document.getElementById("m")
    close.style.display = "none"
  }


  // adding new doctor to the database 
  const addDoctor = async () => {
    console.log(`${import.meta.env.VITE_API_URL}/doctor`)
    console.log(gender)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        nm: doctorname,
        ph: phone,
        email: email,
        gen: gender,
        // hopitalname: hospital,
        sp: specialization,
        hospitalid: hospitalID,
        qualification: qualification
      })
    });
    const d = await re.json();
    // alert(d)
    // console.log(d)
    closemodule();
    getdoctor();
    showToast(d.msg, "success")
    // console.log(d.msg``)
  }


  // Delete the Doctor in table -----===-----

  const del = async (y) => {
    if (!window.confirm) return
    // alert(y)
    const url = `${import.meta.env.VITE_API_URL}/doctor`;
    const re = await fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: y
      })
    })
    const d = await re.json()
    alert(d.msg);
    getdoctor();

  }

  const handleHospital = (e) => {

    sethospitalID(e.target.value)
  }

  // gethospital in option in the doctor form-----

  const gethospital = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    console.log("first")
    console.log(d)
    sethospitaldata(d);
  }

  // APIS for the get doctor

  const [doctors, setdoctor] = useState([])
  const [editMode, setEditMode] = useState(false)

  const getdoctor = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    setdoctor(d);
    console.log("first")
    // console.log(d)
  }

  // geting a single Doctor in the hospital----------

  const getSingleDoctor = async (id) => {
    alert("hii")
    setEditMode(true)
    // alert(y)
    const url = `${import.meta.env.VITE_API_URL}/doctor/${id}`;
    console.log(url)
    const re = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
    const d = await re.json()
    console.log(d)
    setdoctorname(d.Doctorname)
    setphone(d.phone)
    setemail(d.email)
    setqualification(d.qualification)
    setspecialization(d.specilization)
    setgender(d.gender)
    sethospitalID(d.hospitalID)
    sethospital(d.hospital)

    // alert(d.msg);

    openmodule()

  }





  useEffect(() => {
    gethospital();
    getdoctor();
  }, [])

  useEffect(()=>{
    document.title = "Doctor's"
  },[])


  // -- Body part---
  return (
    <div className="main">
      <Sidebar />
      <div className="m1-container">
        <div className="container-fluid">
          <div className="row">

            <div className="col-1 ">
            </div>
            <div className="col-10  text-center">
              <h1>Doctor's</h1>

            </div>
            <div className="col-1 pt-2 text-center">
              <button className="btn btn-primary" onClick={openmodule}>ADD</button>

            </div>
          </div>
        </div>

        {/* <Activity mode="visible">
            <h1>hello</h1>
        </Activity> */}
        <div className="content">
          <table>
            <thead>

            <tr>
              <th>S.N.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Hospital</th>
              <th>Specialization</th>
              <th>Qualification</th>
              <th>Action</th>

            </tr>
            </thead>
            <tbody>


            {
              doctors.map((x, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Link to="/doctorlogin" className='link' style={{ color: "black" }}  >{x.Doctorname}</Link>
                    </td>
                    <td>{x.gender}</td>
                    <td>{x.phone}</td>
                    <td>{x.email}</td>
                    <td>{x.hospitalname}</td>
                    <td>{x.specialization}</td>
                    <td>{x.qualification}</td>
                    <td><button className='btn btn-success' onClick={() => { getSingleDoctor(x._id) }}>Edit</button>
                      <button className='btn btn-danger m-2' onClick={() => { del(x._id) }}>Delete</button></td>
                  </tr>
                )

              })
            }
              </tbody>
          </table>
        </div>

        {/* form section */}

        <div className="doctor-form" id="m">
          <div className="form-close" onClick={closemodule}><h3>X</h3></div>
          <div className="form-header"><h1>{editMode ? "Edit Doctor" : "Doctor,s"}</h1></div>

          <div className="form-row">
            <label>Name</label>
            <input
              value={doctorname}
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setdoctorname(e.target.value)}
              name="text"
            />
          </div>

          <div className="form-row gender-row">
            <label>Select Gender</label>
            <div className="gender-options">
              <label><input
                value="male"
                checked={gender === "male"}
                onChange={(e) => setgender(e.target.value)}
                type="radio"
                name="gn" /> Male</label>
              <label><input
                value="female"
                checked={gender === "female"}
                onChange={(e) => setgender(e.target.value)}
                type="radio"
                name="gn" /> Female</label>
            </div>
          </div>

          <div className="form-row">
            <label>Phone</label>
            <input
              value={phone}
              type="number"
              placeholder="Enter your phone"
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Hospital</label>
            <select onChange={(e) => handleHospital(e)} className="form-select">
              <option value={hospital}>Select Hospital</option>
              {hospitaldata.map((x) => (
                <option key={x._id} value={x._id}>{x.name}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Specialization</label>
            <input
              value={specialization}
              type="text"
              placeholder="Enter the specialization"
              onChange={(e) => setspecialization(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Qualification</label>
            <input
              value={qualification}
              type="text"
              placeholder="Enter the qualification"
              onChange={(e) => setqualification(e.target.value)}
            />
          </div>



          <button className="form-btn" onClick={addDoctor}>{editMode ? "Update data" : "Save"}</button>
        </div>


      </div>
    </div>
  )
}

export default Doctor