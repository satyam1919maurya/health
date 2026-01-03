import React, { useState } from "react";
// import "./login.css"; // External CSS file
import logo from "../.././images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
// import Header from "../components/header";
import { useCookies } from 'react-cookie'
import { useEffect } from "react";

const Doctorogin = () => {

  const [cookie, createcookie, removecookie] = useCookies()

  const [email, setemail] = useState()
  const [password, setpasword] = useState()

  // APIs connect with backend--------

  const login = async () => {
    // alert(email)
    const re = await fetch("http://localhost:5000/doctorlogin", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        em: email,
        psw: password
      })
    })
    const d = await re.json()
    // console.log(d.dt[0]._id)

    
  

    if (d.msg == "valid") {
      createcookie("doctoremail", d.dt[0].email, { maxAge: 84000 })    
      createcookie("doctorname", d.dt[0].Doctorname, { maxAge: 84000 })   
      createcookie("doctorid", d.dt[0]._id, { maxAge: 84000 })   
      jump("/doctorp/"+d.dt[0]._id)
    }
    else {
      // alert(d.msg)
      alert("incorret password")
    }
  }

    useEffect(() => {
          document.title = "Doctor login"
      }, [])


  const jump = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
    // Add your login API call here
  };

  

  return (
    <div className="login-page">
      
      <div className="login-card">
        <div className="login-logo">
          <img src={logo} alt="Hospital Logo" />
          <h2>Health Care </h2>
          <p>Doctor Login</p>
        </div>

        <form className="fm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={formData.email}
            onChange={(e) => { setemail(e.target.value) }}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            // value={formData.password}
            onChange={(e) => { setpasword(e.target.value) }}
            required
          />

          <button type="submit" className="login-btn login-page-btn lb">
            Login
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default Doctorogin;
