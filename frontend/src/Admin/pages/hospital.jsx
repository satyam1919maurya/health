import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './hospital.css'
import '.././components/style.css'
import Sidebar from "../components/sidebar"

import { ToastContainer, toast } from 'react-toastify';
// import { connection } from "mongoose"

// function part of the form
const Hospital = () => {

  const [editMode, setEditMode] = useState(false)
  const [hid, sethid] = useState("")

  const openmodule = () => {
    const open = document.getElementById("m")
    open.style.display = "block"
  }

  const closemodule = () => {
    resetstates()
    setEditMode(false)
    const close = document.getElementById("m")
    close.style.display = "none"
  }

  const resetstates = () => {
    setname("")
    setcategory("")
    setphone("")
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


  // connection to backend

  // take useState

  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [category, setcategory] = useState("")
  const [description, setdescription] = useState("")
  const [location, setlocation] = useState("")
  // const [pic, setpic] = useState("")

  const [hospitaldata, sethospitaldata] = useState([])

  // fetch the api by creating a function //

  const addhospital = async () => {
    // alert("Sure to Hospital Added ")
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        cattegory: category,
        description: description,
        location: location,
        // pic : pic
      })
    });
    const d = await re.json();
    showToast(d.msg, "success")
    // console.log(d)
    closemodule();
    gethospital();
  }

  // ---------getdata on the table section----------------

  const gethospital = async () => {
    // alert(name)
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    sethospitaldata(d);
  }

  // Delete the hospital in table -----===-----

  const del = async (y) => {
    // alert(y)
    const url = `${import.meta.env.VITE_API_URL}/hospital`;
    const re = await fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: y
      })
    })
    const d = await re.json()
    // alert(d.msg);
    gethospital();
    showToast(d.msg, "error")

  }

  // getting single hospital data 
  const getSingleHospital = async (id) => {
    sethid(id)
    setEditMode(true)
    // alert(y)
    const url = `${import.meta.env.VITE_API_URL}/hospital/` + id;
    const re = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
    const d = await re.json()
    console.log(d)
    setname(d.name)
    setcategory(d.category)
    setphone(d.phone)
    setdescription(d.description)
    setlocation(d.location)
    // setpic(d.pic)
    // alert(d.msg);
    // gethospital();
    openmodule()

  }

  const updateHospital = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/hospital`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: hid,
        name: name,
        phone: phone,
        cattegory: category,
        description: description,
        location: location,
        // pic: pic
      })
    });
    const d = await re.json();
    console.log(d)
    closemodule();
    gethospital();
    setEditMode(false)
    showToast(d.msg, "success")
  }


  useEffect(() => {
    gethospital();
  }, [])

  useEffect(() => {
    document.title = "Hospital"
  }, [])

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
                <h1>Hospital</h1>

              </div>
              <div className="col-1 pt-2 text-center">
                <button className="btn btn-primary" onClick={openmodule}>ADD</button>

              </div>
            </div>
          </div>
          <div className="content">
            <table>
              <thead>

              <tr>
                <th>S.N.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Phone</th>
                <th>Description</th>
                <th>Location</th>
                {/* <th>Picture</th> */}
                <th>Action</th>
              </tr>
              </thead>
              <tbody>


              {hospitaldata.map((x, i) => {
                return (
                  <tr key={x._id}>
                    <td>{i + 1}</td>
                    <td>{x.name}</td>
                    <td>{x.category}</td>
                    <td>{x.phone}</td>
                    <td>{x.description}</td>
                    <td>{x.location}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => { getSingleHospital(x._id) }}>Edit</button>
                      <button className="btn btn-danger m-2" onClick={() => { del(x._id) }}>Delete</button>
                    </td>
                  </tr>
                )
              })}
                </tbody>
            </table>
          </div>

          {/* form */}
          <div className="hospital-form" id="m">
            <div className="form-close" onClick={closemodule}><h3>X</h3></div>
            <div className="form-header"><h1>{editMode ? "Edit Hospital" : "Hospital"}</h1></div>

            <div className="form-row">
              <label>Name</label>
              <input
                value={name}
                type="text"
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter hospital name"
                name="text"
              />
            </div>

            <div className="form-row">
              <label>Category</label>
              <select value={category} onChange={(e) => setcategory(e.target.value)}>
                <option value="">Choose</option>
                <option value="private">Private</option>
                <option value="Gov">Government</option>
              </select>
            </div>

            <div className="form-row">
              <label>Phone</label>
              <input
                value={phone}
                type="text"
                onChange={(e) => setphone(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-row">
              <label>Description</label>
              <input
                value={description}
                type="text"
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Enter your description"
              />
            </div>
            <div className="form-row">
              <label>Location</label>
              <input
                value={location}
                type="text"
                onChange={(e) => setlocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>

            <button className="form-btn" onClick={editMode ? updateHospital : addhospital}>{editMode ? "Update" : "Save"}</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default Hospital